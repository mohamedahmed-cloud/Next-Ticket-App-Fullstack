import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon={faFireFlameCurvedFlameCurved} />
interface PriorityProps {
    priority: number
}
export default function Priority({priority}:PriorityProps) {
    // console.log(typeof(priority))
    return (
            <section className="flex justify-between lg:w-2/4 md:w-1/4 sm:w-1/4 w-2/4 ">
                <FontAwesomeIcon icon={faFireFlameCurved} className={`lg:text-2xl md:text-xl sm:text-3xl text-xl ${priority >= 1?  "text-red": "text-white" }`}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFireFlameCurved} className={`lg:text-2xl md:text-xl sm:text-3xl text-xl ${priority  >= 2 ? "text-red" : "text-white"}`}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFireFlameCurved} className={`lg:text-2xl md:text-xl sm:text-3xl text-xl ${priority  >= 3 ? "text-red": "text-white"}`}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFireFlameCurved} className={`lg:text-2xl md:text-xl sm:text-3xl text-xl ${priority  >= 4 ? "text-red": "text-white"}`}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFireFlameCurved} className={`lg:text-2xl md:text-xl sm:text-3xl text-xl ${priority  >= 5 ? "text-red": "text-white"}`}></FontAwesomeIcon>
            </section>
    )
}


