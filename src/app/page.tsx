import {Input} from "@nextui-org/react";

export default function Home(){
    return (<div className=" m-5 ">
            <h2 className="text-4xl font-extrabold text-center">♥ Create your own Todo ;) ♥</h2>
        <div className=" flex w-full flex-wrap md:flex-nowrap gap-4 mt-10 mb-5 text-2xl font-semibold grid flex items-center justify-center   ">
            <Input className="" isRequired type="email" label="Title" placeholder="Enter your title for todo"/>
            <Input type="email" label="Content"  placeholder="Enter your todo"/>
            <Input type="email" label="AutorID" placeholder="Enter your email" />
        </div>
    </div>
    );
}


