
export default function Home() {
  return (
      <div>
      <NavBar/>
    <div className="flex flex-row py-4 space-x-6 ">
        <Card title={"Todo"} description={"Description"} checked={true}/>
        <Card title={"Todo"} description={"Description"} checked={true}/>
        <Card title={"Todo"} description={"Description"} checked={true}/>
    </div>
</div>
  );
}
class TodoItemProps{
    title:string;
    description: string;
    checked: Boolean;

}
function NavBar(){
    return <nav className="flex justify-between bg-cyan-500">
        <label className="hover:text-orange-400">Stránka všechny Todos </label>
        <label className="hover:text-orange-400">Přidej Todos</label>
    </nav>
}


 function Card({title, description, checked}:TodoItemProps){
    return <div className="flex flex-col items-center justify-start bg-slate-300 w-1/6 h-60 px-4 hover:bg-slate-600">
        <h2>{title}</h2>
        <label className="text-xs">{description}</label>
    </div>
}

