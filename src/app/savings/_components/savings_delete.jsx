"use client";

import { useActionState } from "react";
import { deleteSavingsAction } from "../_actions/actions_delete";

export const SavingsDelete = ({ id }) => {
  const [state, formAction, pending] = useActionState(
    deleteSavingsAction,
    null
  );

  return (
    <form action={formAction}>
      <input name="savings_id" defaultValue={id} hidden />
      <button
        className="bg-red-600 hover:bg-red-400 w-fit text-[12px]"
        disabled={pending}
      >
        {pending ? "deleting..." : "delete"}
      </button>
    </form>
  );
};
