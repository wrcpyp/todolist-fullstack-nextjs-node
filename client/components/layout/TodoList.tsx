import TodoItem from "./TodoItem"

type Todo = {
    id: number
    task: string
    status: boolean
}

type Props = {
    todos: Todo[]
    onDelete: (id: number) => void
    filter: string
    isTodoDone: (id: number) => void
}

const TodoList = ({ todos, onDelete, filter, isTodoDone }: Props) => {

    const filtered = todos.filter((todo) => {
        if (filter === "active") {
            return !todo.status
        }
        if (filter === "done") {
            return todo.status
        }
        return true
    })

    return (
        <div>
            {filtered.map((todo: any) => (
                <TodoItem key={todo.id} task={todo} onDelete={onDelete} isTodoDone={isTodoDone} />
            ))}
        </div>
    )
}

export default TodoList