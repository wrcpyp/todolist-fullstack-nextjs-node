"use client"

import TodoFilter from "@/components/layout/TodoFilter"
import TodoInput from "@/components/layout/TodoInput"
import TodoList from "@/components/layout/TodoList"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

const page = () => {

    const [username, setUsername] = useState("")
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState("all")

    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            router.push("/login")
            return
        }

        const decoded: any = jwtDecode(token)
        setUsername(decoded.username)
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.get("http://localhost:8000/api/todos", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const sorted = res.data.data.sort((a: any, b: any) => a.id - b.id)
            setTodos(sorted)
        } catch (error) {
            console.log("error", error)
        }
    }

    const deleteTask = async (id: number) => {
        try {
            const token = localStorage.getItem("token")
            await axios.delete(`http://localhost:8000/api/todos/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            fetchTodos()
        } catch (error) {
            console.log("error", error)
        }
    }

    const editTask = async (id: number, task: string) => {
        try {
            const token = localStorage.getItem("token")
            await axios.put(`http://localhost:8000/api/todos/${id}`, { task }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            fetchTodos()
        } catch (error) {
            console.log("error", error)
        }
    }

    const deleteAllTask = async () => {
        try {
            const token = localStorage.getItem("token")
            await axios.delete("http://localhost:8000/api/todos", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            fetchTodos()
        } catch (error) {
            console.log("error", error)
        }
    }

    const isTodoDone = async (id: number) => {
        const token = localStorage.getItem("token")
        await axios.patch(`http://localhost:8000/api/todos/${id}`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        })
        fetchTodos()
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push('/login')
    }

    return (
        <div className="min-h-screen bg-[#111111] flex justify-center py-10 px-4">
            <div className="w-[420px] h-fit bg-[#1c1c1c] border border-[#2a2a2a] rounded-2xl p-9">
                <div className="flex justify-between items-start mb-7">
                    <div>
                        <p className="text-[11px] font-medium text-white uppercase tracking-widest mb-1">Welcome back.</p>
                        <h1 className="text-2xl font-semibold text-white">{username}</h1>
                        <p className="text-xs text-white mt-1">{todos.length} tasks remaining</p>
                    </div>
                    <button onClick={handleLogout} className="cursor-pointer text-xs text-white border border-white px-4 py-1.5 rounded-lg hover:border-[#555] hover:text-[#aaa] transition-all">
                        Sign out
                    </button>
                </div>
                <TodoInput onAdd={fetchTodos} />
                <TodoFilter filter={filter} setFilter={setFilter} />
                <TodoList todos={todos} onDelete={deleteTask} filter={filter} isTodoDone={isTodoDone} onEdit={editTask} />
                <hr className="border-[#222] mb-4" />
                <button onClick={() => deleteAllTask()} className="cursor-pointer w-full py-2.5 text-sm text-[#444] border border-[#2a2a2a] rounded-xl hover:border-[#444] hover:text-[#888] transition-all">Clear All</button>
            </div>
        </div>
    )
}

export default page