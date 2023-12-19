'use client'
import React, {useRef, FormEvent } from 'react'
import SendButton from "../(components)/SendButton"

export default function TicketPage() {
    const titleRef = useRef<HTMLInputElement>(null);
    const DescriptionRef = useRef<HTMLTextAreaElement>(null);

    const handleTitleFocus = () => {
        if (titleRef.current) titleRef.current.focus();
    }
    const handleDescriptionFocus = () => {
        if (DescriptionRef.current) DescriptionRef.current.focus(); 
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let  category = ""
        if (titleRef.current) category = titleRef.current.value
        const object = {"categoryName": category};

    }

    return (
        <main onSubmit ={handleSubmit} className="m-0 p-0 bg-dark w-screen text-white down-page flex items-center justify-center flex-col">
            <form>
                <h1 >Create Your Ticket</h1>
                <section>  
                    <label onClick={handleTitleFocus}> Title</label>
                    <input  ref={titleRef} type="text"/>
                </section>
                <section>  
                    <label onClick={handleDescriptionFocus}> Description</label>
                    <textarea ref={DescriptionRef}/>
                </section>  
                <section>  
                    <label > Category</label>
                    <select>
                        <option value="1">Yousef</option>
                    </select>
                </section>
                <section>  
                    <label > Priority</label>
                    <input type="radio" name="priority"/>
                    <input type="radio" name="priority"/>
                    <input type="radio" name="priority"/>
                    <input type="radio" name="priority"/>
                    <input type="radio" name="priority"/>
                </section>
                <section>  
                    <label >Progress</label>
                    <input   type="range" />
                </section>
                <div>
                    <section>  
                        <label >status</label>
                        <select>
                            <option value="1">Not Started</option>
                            <option value="2">Started</option>
                            <option value="3">Finish</option>
                        </select>
                    </section>
                    <SendButton />
                </div>
            </form>
    </main>
    )
}