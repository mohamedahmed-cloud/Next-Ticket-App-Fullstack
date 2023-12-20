import React from 'react';
import DeleteTicket from './DeleteTicket';
import PriorityTicket from "./PriorityTicket"
import TicketTitle from './TicketTitle'
import Link from 'next/link'
import "./style.css"
import {Key} from 'react'

interface TicketProps {
    title: string,
    description: string,
    progress: number,
    status: string,
    priority: number,
    date: Date,
    id: Key | null | undefined
}
const handleDate = (date: Date) =>  {
    const options: Intl.DateTimeFormatOptions  = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    const newDate = new Date(date)
    const FormattedTime = newDate.toLocaleString("en-US", options);
    return FormattedTime

}

export default function TicketCard({id, title, description, progress, status, priority, date}: TicketProps) {
    let statusColor = "text-red"
    if (status == "Started") statusColor = "text-statusOrange"
    else if (status == "Finish") statusColor = "text-statusGreen"
    return (
        <main className=" bg-teal mt-5 px-3 py-5 rounded-lg">
            <section className="flex justify-between">
                <PriorityTicket priority={priority}/>
                <DeleteTicket id={id}/>
            </section>
            <Link href={`/TicketPage/${id}`}>
                <TicketTitle title={title} description= {description}/>
                <section className="text-white my-3">
                    <p>{handleDate(date)}</p>
                </section>
                <section className="flex justify-between">
                    <input type="range" min="0" max="100" style={{width:"50%"}} value={progress}/>
                    <p className={`bg-white ${statusColor} px-3 py-1 rounded-md font-bold text-lg`}> {status}</p>
                </section>
            </Link>
        </main>
    )
}
