'use client'

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {useRouter} from 'next/navigation'
import {Key} from 'react'

interface DeleteTicketProps {
    id: Key | null | undefined
}
export default function DeleteTicket({id} : DeleteTicketProps) {
    const route = useRouter()
    console.log(id);
    const deleteTicket = async () => {
        const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
            method: "DELETE",
        })
        if (!res.ok)
            throw new Error("Ticket Can't Deleted")
        route.refresh();
    }
    return (
    
            <section className="text-red cursor-pointer ">
                <FontAwesomeIcon icon={faX}  className="text-sm"
                onClick={deleteTicket}></FontAwesomeIcon>
            </section>
        
    )
}
