import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="w-full h-auto flex items-center justify-center">
            <SignUp />
        </div>
    )
}
