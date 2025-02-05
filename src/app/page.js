import { Header } from "@/components/header";
import { SavingsCreate } from "./savings/_components/savings_create";
import { SavingsRead } from "./savings/_components/savings_read";

export default function Home() {
  return (
    <div className="mx-auto w-[650px] shadow-md">
      <main className="h-full">
        <Header />
        <SavingsCreate />
        <SavingsRead />
      </main>
    </div>
  );
}
