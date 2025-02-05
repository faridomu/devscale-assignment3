import { API_URL } from "@/constants/apiUrl.js";
import { SavingsUpdate } from "../_components/savings_update";
import Link from "next/link";

export default async function Page({ params }) {
  // How to get id from params
  const { id } = await params;
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();

  return (
    <div className="bg-gray-100 w-[650px] m-auto my-12 p-8 shadow-lg">
      <div className="text-black">Tanggal : {data.tanggal}</div>
      <div>Nominal : {data.nominal}</div>
      <div>Keterangan : {data.keterangan}</div>
      <SavingsUpdate
        id={data._id}
        tanggal={data.tanggal}
        nominal={data.nominal}
        ket={data.keterangan}
      />
      <p className="text-gray-700 hover:text-gray-500 font-bold mx-4 my-8 ">
        <Link href={"/"}>⬅ Back to home</Link>
      </p>
    </div>
  );
}
