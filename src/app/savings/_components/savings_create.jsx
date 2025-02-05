"use client";

import { useActionState } from "react";
import { createSavingsAction } from "../_actions/actions_create";

export const SavingsCreate = () => {
  const [state, formAction, pending] = useActionState(
    createSavingsAction,
    null
  );

  return (
    <section>
      <form className="space-y-4 mt-4 text-[16px] p-4" action={formAction}>
        <input name="savingDate" type="date" placeholder="Tanggal.." />
        <input
          name="savingAmount"
          placeholder="Masukan jumlah.."
          type="number"
        />
        <input name="savingDesc" placeholder="Deskripsi" type="text" />
        <button disabled={pending}>
          {pending ? "saving.." : "Add saving"}
        </button>
      </form>
    </section>
  );
};
