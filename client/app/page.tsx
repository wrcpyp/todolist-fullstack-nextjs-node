"use client"

import TodoFilter from "@/components/layout/TodoFilter"
import TodoInput from "@/components/layout/TodoInput"
import TodoList from "@/components/layout/TodoList"
import ClearAllBtn from "@/components/ui/ClearAllBtn"

const page = () => {

    return (
        <div>
            <div>
                <h1>Todo App</h1>

                <TodoInput />

                <TodoFilter />

                <TodoList />

                <ClearAllBtn />
            </div>
        </div>
    )
}

export default page