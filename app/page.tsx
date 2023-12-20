import Image from "next/image";
import TicketCard from "./(components)/TicketCard"
import {NextResponse} from 'next/server'
import { Key } from "react";

const getTicket = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    })
    return res.json();

  } catch(error) {
    // console.log("Error During get ticket")
    return NextResponse.json({error})
  }
}
const getCategory = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Category", {
      cache: "no-store",
    })
    return res.json();

  } catch(error) {
    // console.log("Error During get ticket")
    return NextResponse.json({error})
  }
}
export default async function Home() {
    const {ticketData} = await getTicket();
    const {category} = await getCategory()
    // console.log(category);



    return (
    <main className="mb-6">
      {category.map((parent: {_id: Key | null | undefined; title: string}) => (
        <div key={parent._id} className="flex flex-col">
            {ticketData.filter((ele: {category: string}) => ele.category === parent.title).length > 0 &&
            <h2 className="mx-4 mt-8 underline underline-offset-8 text-4xl font-bold">{parent.title}</h2>}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 mx-4" >
              {ticketData.map((ele: { _id: Key | null | undefined; title: string; category: string; description: string; progress: number; status: string; priority: number, createdAt: Date }) => (
                parent.title.toLowerCase() === ele.category.toLowerCase() && (
                  <> 
                    <TicketCard 
                      key={ele._id}
                      id={ele._id}
                      title={ele.title} 
                      description={ele.description} 
                      progress={ele.progress}
                      status={ele.status}
                      priority={ele.priority}
                      date = {ele.createdAt}
                    />
                  
                  </>
                  )
              ))}
              </div>
      </div>
))}

    </main>
    );
}