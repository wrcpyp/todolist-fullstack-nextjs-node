type Todo = {
    id: number
    task: string
    status: boolean
}

type Props = {
    task: Todo
    onDelete: (id: number) => void
    isTodoDone: (id: number) => void
}

const TodoItem = ({ task, onDelete, isTodoDone }: Props) => {

    return (
        <div className="flex items-center gap-3 px-2.5 py-3 rounded-xl hover:bg-[#222] transition-colors group">
            <input
                type="checkbox"
                checked={task.status}
                onChange={() => isTodoDone(task.id)}
                className="w-4 h-4 accent-white cursor-pointer flex-shrink-0"
            />
            <span className={`flex-1 text-sm ${task.status ? "line-through text-[#444]" : "text-[#d0d0d0]"}`}>
                {task.task}
            </span>
            <div className="flex gap-1">
                <button className="cursor-pointer text-xs text-[#555] px-2 py-1 rounded hover:bg-[#2a2a2a] hover:text-[#aaa] transition-all">Edit</button>
                <button onClick={() => onDelete(task.id)} className="cursor-pointer text-xs text-[#666] px-2 py-1 rounded hover:bg-[#2a1a1a] hover:text-[#e85d3f] transition-all">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem