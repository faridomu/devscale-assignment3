import { API_URL } from "@/constants/apiUrl";
import { revalidatePath } from "next/cache";

export const SavingsUpdate = ({ id, tanggal, nominal, ket }) => {
  async function updateSavingAction(formData) {
    "use server";

    const id = formData.get("id");
    const savingDate = formData.get("savingDate");
    const savingAmount = Number(formData.get("savingAmount"));
    const savingDesc = formData.get("savingDesc");

    await fetch(API_URL, {
      method: "PUT",
      body: JSON.stringify({
        _id: id,
        tanggal: savingDate,
        nominal: savingAmount,
        keterangan: savingDesc,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidatePath("/");
  }

  return (
    <section>
      <form
        className="space-y-4 mt-4 text-[16px] p-4"
        action={updateSavingAction}
      >
        <input name="id" defaultValue={id} hidden />
        <input
          name="savingDate"
          type="date"
          placeholder="Tanggal.."
          defaultValue={tanggal}
        />
        <input
          name="savingAmount"
          placeholder="Masukan jumlah.."
          type="number"
          defaultValue={nominal}
        />
        <input
          name="savingDesc"
          placeholder="Deskripsi"
          type="text"
          defaultValue={ket}
        />
        <button>Update savings</button>
      </form>
    </section>
  );
};
