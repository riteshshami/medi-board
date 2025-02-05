import { currentUser } from "@clerk/nextjs/server";

export const currentProfile = async () => {
    const user = await currentUser();

    return user;
}
