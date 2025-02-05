"use server";

import { API_URL } from "@/constants/apiUrl";
import { revalidatePath } from "next/cache";

export async function createSavingsAction(_, formData) {
  const savingDate = formData.get("savingDate");
  const savingAmount = Number(formData.get("savingAmount"));
  const savingDesc = formData.get("savingDesc");

  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify([
      { tanggal: savingDate, nominal: savingAmount, keterangan: savingDesc },
    ]),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/");
}
