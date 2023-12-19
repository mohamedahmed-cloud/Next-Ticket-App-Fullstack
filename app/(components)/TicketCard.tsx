import React from 'react';
import DeleteTicket from './DeleteTicket';
import PriorityTicket from "./PriorityTicket"
import TicketTitle from './TicketTitle'
import "./style.css"

export default function TicketCard() {
    return (
        <main className=" bg-teal mt-5 px-3 py-5 rounded-lg">
            <section className="flex justify-between">
                <PriorityTicket />
                <DeleteTicket />
            </section>
            <TicketTitle />
            <section className="text-white my-3">
                <p>12-11-23 11:0:0 PM</p>
            </section>
            <section className="flex justify-between">
                <input type="range" min="0" max="100" style={{width:"50%"}} />
                <p className="bg-white text-red px-3 py-1 rounded-md font-medium"> Started</p>
            </section>
        </main>

        
    )
}
