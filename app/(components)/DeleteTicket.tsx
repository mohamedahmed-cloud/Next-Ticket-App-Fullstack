import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
export default function DeleteTicket() {
    return (
    
            <section className="text-red cursor-pointer ">
                <FontAwesomeIcon icon={faX}  className="text-sm"></FontAwesomeIcon>
            </section>
        
    )
}
