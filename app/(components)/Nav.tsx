'use client'

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTicket,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "@nextui-org/react";
import "./style.css";
// Point to search, i see when use tooltip that let the pages reload when navigation, 
// searh how to fix this issues.

export default function Nav() {
  return (
    <nav className="flex items-center justify-between  bg-teal p-4 nav-class">
      <section className="w-3/4 sm:2/4  md:w-1/4  flex justify-between items-center">
        <Link href="/" className="text-white" >
        
          {/* <Tooltip content="Home" className="tooltip" placement="bottom"> */}
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
          {/* </Tooltip> */}
        </Link>
        <Link href="/TicketPage/new" className="text-white">
          {/* <Tooltip
            content="Create Ticket"
            className="tooltip"
            placement="bottom"
          > */}
            <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon>
          {/* </Tooltip> */}
        </Link>
        <Link href="/CategoryPage" className="text-white">
          {/* <Tooltip
            content="Create Category"
            className="tooltip"
            placement="bottom"
          > */}
            <FontAwesomeIcon icon={faTableList}></FontAwesomeIcon>
          {/* </Tooltip> */}
        </Link>
      </section>
      <section>
        <Link
          href="https://github.com/mohamedahmed-cloud"
          target="_blank"
          className="text-white"
        >
          {/* <Tooltip content="Follow Me" className="tooltip" placement="bottom"> */}
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          {/* </Tooltip> */}
        </Link>
      </section>
    </nav>
  );
}
