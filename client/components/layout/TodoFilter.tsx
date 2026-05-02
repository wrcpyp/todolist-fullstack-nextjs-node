"use client"

type Props = {}

const TodoFilter = (props: Props) => {
    return (
        <div>
            <button className="border">All</button>
            <button className="border">Active</button>
            <button className="border">Done</button>
        </div>
    )
}

export default TodoFilter