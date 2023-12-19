'use client'
import React, {useRef, FormEvent} from 'react';
import SendButton from "../(components)/SendButton"


export default function CategoryPage() {
    const titleRef = useRef<HTMLInputElement>(null);
    const handleFocusFunction = () => {
        if (titleRef.current) titleRef.current.focus();
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let category = ""
        if (titleRef.current)  category = titleRef.current.value
        const object = {"categoryName": category};


    }
    return (
        <main onSubmit ={handleSubmit} className="m-0 p-0 bg-dark w-screen text-white down-page flex items-center flex-col">
            <form>
                <h1 className="mt-5 mb-5">Create Your Ticket</h1>
                <section>  
                    <label onClick={handleFocusFunction}> Title</label>
                    <input  ref={titleRef} type="text"/>
                </section>
                <SendButton />
            </form>
        </main>
    )
}
