"use client"

type Props = {
    filter: string
    setFilter: (filter: string) => void
}

const TodoFilter = ({ filter, setFilter }: Props) => {
    return (
        <div className="flex gap-1 bg-[#141414] border border-[#2a2a2a] rounded-xl p-1 mb-5">
            {["all", "active", "done"].map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`flex-1 py-1.5 rounded-lg text-sm font-medium capitalize transition-all
        ${filter === f ? "bg-[#2a2a2a] text-[#e0e0e0]" : "text-[#555] hover:text-[#888]"}`}
                >
                    {f}
                </button>
            ))}
        </div>
    )
}

export default TodoFilter