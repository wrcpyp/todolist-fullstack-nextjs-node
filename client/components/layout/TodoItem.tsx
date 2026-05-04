"use client"

import { useState } from "react"

type Todo = {
    id: number
    task: string
    status: boolean
}

type Props = {
    task: Todo
    onDelete: (id: number) => void
    isTodoDone: (id: number) => void
    onEdit: (id: number, task: string) => void
}

const TodoItem = ({ task, onDelete, isTodoDone, onEdit }: Props) => {

    const [isEditing, setIsEditing] = useState(false)
    const [tempText, setTempText] = useState(task.task ?? "")

    const handleSave = () => {
        if (tempText.trim() !== "") {
            onEdit(task.id, tempText)
        }
        setIsEditing(false)
    }

    return (
        <div className="flex items-center gap-3 px-2.5 py-3 rounded-xl hover:bg-[#222] transition-colors group">
            <input
                type="checkbox"
                checked={task.status ?? false}
                onChange={() => isTodoDone(task.id)}
                className="w-4 h-4 accent-white cursor-pointer flex-shrink-0"
            />

            {isEditing ? (
                <div className="flex gap-2 flex-1 items-start">
                    <input
                        value={tempText}
                        onChange={(e) => setTempText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSave()}
                        autoFocus
                        style={{ fontSize: '16px' }}
                        className="flex-1 bg-transparent border-b border-[#444] outline-none text-sm text-[#e0e0e0]"
                    />
                    <button onClick={handleSave} className="text-xs text-[#aaa]">Save</button>
                    <button onClick={() => setIsEditing(false)} className="text-xs text-[#555]">Cancel</button>
                </div>
            ) : (
                <>
                    <span className={`flex-1 text-sm break-all ${task.status ? "line-through text-[#444]" : "text-[#d0d0d0]"}`}>
                        {task.task}
                    </span>
                    <div className="flex gap-1">
                        <button onClick={() => setIsEditing(true)} className="cursor-pointer text-xs text-[#555] px-2 py-1 rounded hover:bg-[#2a2a2a] hover:text-[#aaa] transition-all">Edit</button>
                        <button onClick={() => onDelete(task.id)} className="cursor-pointer text-xs text-[#666] px-2 py-1 rounded hover:bg-[#2a1a1a] hover:text-[#e85d3f] transition-all">Delete</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default TodoItem