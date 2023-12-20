import React from 'react'
export default function SendButton({editMode}) {
    return (
        <button type="submit" className="bg-teal text-white px-5 py-2 rounded-lg mt-5"> {editMode? "Edit Form": "Create Mode"}</button>
    )
}