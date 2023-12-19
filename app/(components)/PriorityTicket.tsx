import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export default function DeleteTicket() {
    return (
    
            <section className="flex justify-between lg:w-2/4 md:w-1/4 sm:w-1/4 w-2/4">
                <FontAwesomeIcon icon={faFire} className="text-white text-xl"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFire} className="text-white text-xl"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFire} className="text-white text-xl"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFire} className="text-white text-xl"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFire} className="text-white text-xl"></FontAwesomeIcon>
            </section>
        
    )
}
