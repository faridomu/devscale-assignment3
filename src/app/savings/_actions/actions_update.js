"use server";
import { API_URL } from "@/constants/apiUrl";
import { revalidatePath } from "next/cache";

export async function updateSavingAction(_, formData) {
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
