import Image from "next/image";
import TicketCard from "./(components)/TicketCard"
export default function Home() {
  return (
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 mx-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />

    </main>
    );
}