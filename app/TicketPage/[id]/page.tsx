"use client";
import React, { useRef, FormEvent, useState, useEffect } from "react";
import SendButton from "../../(components)/SendButton";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { Key } from "react";

export default function TicketPage({ params }: any) {
  let editMode = true;
  const { id } = params;
  if (params.new) editMode = false;



  const router = useRouter();
  const titleRef = useRef<HTMLInputElement>(null);
  const DescriptionRef = useRef<HTMLTextAreaElement>(null);
  const [category, setCategory] = useState<
    { _id: Key | null | undefined; title: string }[] | null
  >(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: 1,
    progress: 0,
    status: "Not Started",
    active: false,
  });

  const handleTitleFocus = () => {
    if (titleRef.current) titleRef.current.focus();
  };
  const handleDescriptionFocus = () => {
    if (DescriptionRef.current) DescriptionRef.current.focus();
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    let value = "";
    let name = "";
    if (e.target) value = e.target.value;
    if (e.target) name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
		if(editMode) {
			const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData)
			})
			if (!res.ok){
				throw new Error("Can't updaet Ticket")
			}

		} else {
				const res = await fetch("../api/Tickets", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});
				if (!res.ok) {
					throw new Error("Failed to Create new Ticket");
				}
		}
    router.push("/");
    router.refresh();
  };

  const getCategory = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/Category", {
        cache: "no-store",
      });
      return res.json();
    } catch (error) {
      //   console.log("Error During get ticket")
      return NextResponse.json({ error });
    }
  };
	const getCurrTicket = async () => {
		try {
			const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
				cache: "no-store",
			});
			return res.json();
		} catch (error) {
			return NextResponse.json({ error });
		}
	};

	useEffect(() => {
		if (editMode == true) {
			console.log("Enter to get")
			const fetchOldTicket = async () => {
				const {oldTicket} = await getCurrTicket();
				setFormData({...formData, ...oldTicket})
			}
			fetchOldTicket()
		}
	}, [])

  useEffect(() => {
    const fetchData = async () => {
      const { category } = await getCategory();
      setCategory(category);
      const choosenCategory = category[0];
      if (choosenCategory)
        setFormData({ ...formData, category: choosenCategory["title"] });
    };
    fetchData();
  }, []);

  return (
    <main
      onSubmit={handleSubmit}
      className="m-0 p-0 bg-dark w-screen text-white down-page flex items-center justify-center flex-col"
    >
      <form>
        <h1>{editMode? "Edit": "Create"} Your Ticket</h1>
        <section>
          <label onClick={handleTitleFocus}> Title</label>
          <input
            ref={titleRef}
            type="text"
            onChange={handleChange}
            name="title"
						value={formData.title}
          />
        </section>
        <section>
          <label onClick={handleDescriptionFocus}> Description</label>
          <textarea
            ref={DescriptionRef}
            onChange={handleChange}
            name="description"
						value={formData.description}
          />
        </section>
        <section>
          <label> Category</label>
          <select onChange={handleChange} name="category">
            {category ? (
              category.map(
                (ele: { _id: Key | null | undefined; title: string }) => (
                  <option key={ele._id} value={ele.title} selected={formData.category == ele.title}>
                    {ele.title}
                  </option>
                )
              )
            ) : (
              <option value="">please Create category Frist </option>
            )}
          </select>
        </section>
        <section>
          <label> Priority</label>
          <input
            type="radio"
            name="priority"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <input
            type="radio"
            name="priority"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <input
            type="radio"
            name="priority"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <input
            type="radio"
            name="priority"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <input
            type="radio"
            name="priority"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
        </section>
        <section>
          <label>Progress</label>
          <input type="range" onChange={handleChange} name="progress" value={formData.progress} />
        </section>
        <div>
          <section>
            <label>status</label>
            <select onChange={handleChange} name="status">
              <option value="Not Started" selected={formData.status == "Not Started"}>Not Started</option>
              <option value="Started"     selected={formData.status == "Started"}>Started</option>
              <option value="Finish"      selected={formData.status == "Finish"}>Finish</option>
            </select>
          </section>
          <SendButton editMode={editMode}/>
        </div>
      </form>
    </main>
  );
}
