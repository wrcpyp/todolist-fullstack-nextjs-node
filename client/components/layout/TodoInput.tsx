"use client"

import axios from "axios"
import { useState } from "react"

type Props = {
    onAdd: () => void
}

const TodoInput = ({ onAdd }: Props) => {

    const [task, setTask] = useState("")

    const addTask = async (e: any) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem("token")
            await axios.post("http://todolist-fullstack-nextjs-node-production.up.railway.app/api/todos", { task }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            onAdd()
            setTask("")
        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <form onSubmit={addTask} className="flex gap-2 mb-4">
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task..."
                type="text"
                style={{ fontSize: '16px' }}
                className="flex-1 bg-[#141414] border border-[#2a2a2a] rounded-xl px-4 py-2.5 text-[#e0e0e0] placeholder-[#444] outline-none focus:border-[#444] transition-colors"
            />
            <button className="cursor-pointer w-11 bg-white text-[#111] rounded-xl text-xl hover:bg-[#e0e0e0] transition-colors">
                +
            </button>
        </form>
    )
}

export default TodoInput