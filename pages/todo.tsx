import { NextPage } from "next"
import { useState } from "react"
import Head from 'next/head'
import SidebarTodo from "../components/todo/sidebar-todo"
import type { Todo } from "../utils/types/types"

const Todo: NextPage = () => {
    const [todos, setTodos] = useState([])
  return (
    <>
      <Head>
        <title>TODO: TS INDUSTRY SYSTEMS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-row mt-4 justify-center max-w-5xl mx-auto">
        <SidebarTodo setTodos={setTodos} todos={todos}/>
        <div className="shadow-md sm:rounded-lg overflow-x-auto relative w-full">

        </div>
      </div>
    </>
  )
}

export default Todo