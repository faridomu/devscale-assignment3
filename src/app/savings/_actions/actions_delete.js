"use server";

import { API_URL } from "@/constants/apiUrl.js";
import { revalidatePath } from "next/cache";

// function for delete
export async function deleteSavingsAction(_, formData) {
  const id = formData.get("savings_id");

  await fetch(API_URL, {
    method: "DELETE",
    body: JSON.stringify([id]),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/");
}
