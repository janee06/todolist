import Link from "next/link";
import Todo from "../components/todo";
import {prisma} from "./db";
import {User} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/react";






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

            <div className="flex flex-col mt-2  ">
                <ScrollShadow className=" h-[400px]">

            <header className="flex justify-between items-center pb-5 ml-5">
                <div className="h-10 w-10 ">
                    <User className="rounded-full outline-indigo-700"/>
                </div>
                <h1 className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-5 mb-5 text-4xl text-indigo-700 font-semibold grid flex items-center justify-center">♥ Todos ♥</h1>
                <Link
                    href="/newitem"
                    className="border border-indigo-500 text-indigo-700 rounded text-xl px-2 py-1 hover:bg-indigo-300 focus-within:bg-zinc-700 outline-none mr-5"
                >
                    New
                </Link>
            </header>

            <ul className="flex w-full flex-wrap md:flex-nowrap gap-2 text-lg mb-5 text grid flex items-center justify-center ">

                {



                    // eslint-disable-next-line react/jsx-key
                    todos.map((todo: TodoType)=> <div> key={todo.id} {todo.title}  <Divider/> </div>   )
                }

            </ul>
                </ScrollShadow >
            </div>

        </>
    );
}

