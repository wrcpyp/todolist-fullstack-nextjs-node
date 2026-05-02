"use client"

type Props = {}

const TodoInput = (props: Props) => {
    return (
        <div>
            <input placeholder="Add your new todo" type="text" className="border" />
            <button className="border">+</button>
        </div>
    )
}

export default TodoInput