import Link from "next/link";
import Todo from "../components/todo";
import {prisma} from "./db";
import {User} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";

export type TodoType = {
    id: string;
    title: string;
    complete: boolean;
    deleted: boolean;
};

export default async function Home() {

    function getTodos() {
        return prisma.todo.findMany({
        });
    }
    const todos = await getTodos();

    return (
        <>
              <div className="h-10 w-10 ">
                  <User/>
              </div>

            <header className="flex justify-between items-center pb-5 ml-10">
                <h1 className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5 mb-5 text-3xl text-indigo-700 font-semibold grid flex items-center justify-center">♥ Todos ♥</h1>
                <Link
                    href="/newitem"
                    className="border border-indigo-500 text-indigo-700 rounded px-2 py-1 hover:bg-indigo-300 focus-within:bg-zinc-700 outline-none mr-5"
                >
                    New
                </Link>
            </header>


            <ul className="flex w-full flex-wrap md:flex-nowrap gap-2  mb-5 text grid flex items-center justify-center ">
                {
                     todos.map((todo: TodoType)=> <Checkbox defaultSelected className="flex flex-col-start"> <div> {todo.id} {todo.title} <Divider/>  </div> </Checkbox>)
                }
            </ul>
        </>
    );
}

