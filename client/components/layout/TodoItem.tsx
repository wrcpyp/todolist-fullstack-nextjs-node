"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

type Props = {}

const TodoItem = (props: Props) => {

    const router = useRouter()
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            router.push("/login")
            return
        }

        axios.get("http://localhost:8000/api/todos", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setTodos(res.data.data))
            .catch(() => {
                localStorage.removeItem("token")
                router.push("/login")
            })
    }, [])

    return (
        <div>
            {todos.map((todo: any) => (
                <p key={todo.id}>{todo.task}</p>
            ))}
        </div>
    )
}

export default TodoItem