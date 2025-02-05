import { API_URL } from "@/constants/apiUrl.js";
import { SavingsDelete } from "./savings_delete";
import Link from "next/link";

export const SavingsRead = async () => {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  const totalSavings = data.reduce((sum, item) => sum + item.nominal, 0);
  console.log("Total savings:", totalSavings);

  return (
    <main>
      <section className="p-4">
        <h1 className="font-semibold mb-4">My Savings Records</h1>
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="grid grid-cols-4 border items-center"
            >
              <div className="border-r p-2">{item.tanggal}</div>
              <div className="border-r p-2">Rp. {item.nominal}</div>
              <div className="border-r p-2">{item.keterangan}</div>
              <div className="flex p-2 justify-center gap-2">
                <button className="text-[12px] bg-yellow-500 hover:bg-yellow-400">
                  <Link href={`savings/${item._id}`}>edit</Link>
                </button>
                <SavingsDelete id={item._id} />
              </div>
            </div>
          );
        })}
      </section>
      <div className="p-4">
        <p className="font-semibold text-[20px]">Total Savings</p>
        <p className="font-bold text-[32px] text-green-700">
          Rp. {totalSavings}
        </p>
      </div>
    </main>
  );
};
