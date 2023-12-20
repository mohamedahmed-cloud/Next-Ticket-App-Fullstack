import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
interface TicketProps {
    title: string,
    description: string,

}


export default function TicketTitle({title, description}: TicketProps) {
    return (
    
        <div className="text-white mt-2">
            <h1 className="mb-1">{title}</h1>
            <hr className="w-3/4 mx-2 mb-2"/>
            <p className="text-whitep">{description}
            </p>

        </div>
        
    )
}
