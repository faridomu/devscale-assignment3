"use client";

import { useActionState } from "react";
import { updateSavingAction } from "../_actions/actions_update";

export const SavingsUpdate = ({ id, tanggal, nominal, ket }) => {
  const [state, formAction, pending] = useActionState(updateSavingAction, null);

  return (
    <section>
      <form className="space-y-4 mt-4 text-[16px] p-4" action={formAction}>
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
        <button disabled={pending}>{pending ? "updating..." : "update"}</button>
      </form>
    </section>
  );
};
