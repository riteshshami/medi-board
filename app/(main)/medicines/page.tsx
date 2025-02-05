import AddMedicineModal  from "@/components/common/add-medicine-modal";

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <header className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="font-bold text-2xl">Medicines Listed</h1>
        <AddMedicineModal />
      </header>
    </main>
  )
}
