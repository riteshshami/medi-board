import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex items-center justify-center" style={{ minHeight: "calc(100vh - 200px)" }}>
            <SignIn />
        </div>
    )
}
