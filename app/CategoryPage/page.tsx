'use client'
import React, {useRef, FormEvent} from 'react';
import SendButton from "../(components)/SendButton"
import { useRouter } from 'next/navigation';

export default function CategoryPage() {
    const router = useRouter()
    const titleRef = useRef<HTMLInputElement>(null);
    const handleFocusFunction = () => {
        if (titleRef.current) titleRef.current.focus();
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let category = ""
        if (titleRef.current)  category = titleRef.current.value
        const categoryData = {"title": category};

        const res = await fetch("./api/Category", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(categoryData)
        })
        // console.log(res);
        if(!res.ok) {
            throw new Error("Failed to create new Category")
        }
        router.push("/");
        router.refresh()


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
