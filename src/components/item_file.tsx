"use server";
import {Avatar} from "@nextui-org/react";
import {BsFillTrash3Fill} from "react-icons/bs";
import {prisma} from "../app/db";

export default function ItemTile(props: ItemTileProps) {

    return (
        <div key={props.id} className="flex flex-row items-center my-10 bg-indigo-200 justify-between">
            <Avatar className="size-20"></Avatar>
            {props.id} {props.content}
            <button onClick={() => props.onDelete}>
                <BsFillTrash3Fill></BsFillTrash3Fill>
            </button>
        </div>);
}
interface ItemTileProps{
    id: string
    content: string
    onDelete: Function
}