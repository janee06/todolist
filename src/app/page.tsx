import {Input} from "@nextui-org/react";

export default function Home(){
    return (<div>
            <h2>Create your own Todo :)</h2>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input isRequired type="email" label="Title" placeholder="Enter your title for todo"/>
            <Input type="email" label="Content"  placeholder="Enter your todo"/>
            <Input type="email" label="autorID" placeholder="Enter your email" />
        </div>
    </div>
    );
}


