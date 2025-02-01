"use server";

import { revalidatePath } from "next/cache";
import Medicine from "../models/medicine.model";
import User from "../models/userProfile.model";
import dbConnect from "../mongoose";

interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function addMedicine({
  text,
  author,
  path,
}: Params) {
  try {
    dbConnect();
    const name = text.toLowerCase();
    const createdMedicine = await Medicine.create({
      name,
      author,
    });

    // Update user model
    await User.findByIdAndUpdate(author, {
      $push: { threads: createdMedicine._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error adding medicine: ${error.message}`)
  }
}

export async function fetchMedicines(pageNumber = 1, pageSize = 20){
  dbConnect();

  const skipAmount = (pageNumber - 1 ) * pageSize;

  const postsQuery = Medicine.find({parentId: { $in: [null, undefined] }})
  .sort({ createdAt: 'desc' })
  .skip(skipAmount)
  .limit(pageSize)
  .populate({path: 'author', model: User})
  .populate({
    path: 'children',
    populate: {
      path: 'author',
      model: 'User',
      select: "_id name parentId image"
    }
  })

  const totalPostsCount = await Medicine.countDocuments({ parentId: {$in: [null, undefined]} })

  const posts = await postsQuery.exec();

  const isNext = totalPostsCount > skipAmount + posts.length;

  return { posts, isNext };

}

export async function fetchMedicineById(id: string){
  dbConnect();

  try{
    // TODO: Populate Community
    const medicine = await Medicine.findById(id)
    .populate({
      path: 'author',
      model: User,
      select: "_id id name image"
    }).exec();

    return medicine;
  }catch(error: any){
    throw new Error(`Error fetching medicine: ${error.message}`)
  }
}
