import AccountProfile from "@/components/forms/onboarding-form"

export default function Page(){
    return (
        <main className="flex flex-col max-w-3xl items-start justify-start px-10 py-20">
            <h1 className="font-bold text-2xl">Onboarding</h1>
            <section>
                <AccountProfile/>
            </section>
        </main>
    )
}
