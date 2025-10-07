import { useEffect, useState } from "react"
import deleteIcon from '../assets/deleteIcon.svg'

export const TodoList = () =>{
    const [tasks, setTasks] = useState([{id:Date.now(),objective:"Workout",isCompleted:false}]);
    const [newTask, setNewTask] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        let storedTodo = localStorage.getItem('todo');
        if(storedTodo!=null){
            setTasks(JSON.parse(storedTodo))
        }
        setIsLoaded(true)
    },[])
    useEffect(() => {
        if(isLoaded){
            localStorage.setItem('todo', JSON.stringify(tasks))
        }
    }, [tasks]);

    const changeTaskStatus = (id) =>{
        setTasks((prevTask)=>
            prevTask.map((task)=>
                task.id==id ? {...task,isCompleted:!task.isCompleted} : task
            ))
    }

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks((prev)=>[...prev,{id:Date.now(),objective:newTask,isCompleted:false}])
        setNewTask("")
    }

    const handleKeyDown = (e) =>{
        if(e.key=="Enter"){
            addTask();
        }
    }

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <div style={{border:"2px solid black",borderRadius:"10px",boxShadow:"initial",padding:"40px"}}>
            <h1>Todo List</h1>
            <div style={{
                display:"flex",
                justifyContent:"space-between",
                marginBottom:"30px"
            }}>
                <input value={newTask} onKeyDown={handleKeyDown} onChange={(e)=>setNewTask(e.target.value)}  type="text" style={{border:'1px solid black', height:"40px",borderRadius:"5px",marginRight:"4px"}}/>
                <button style={{border:"2px solid green"}} onClick={()=>addTask()}>Add Task</button>
            </div>
            {tasks.map((task)=>{
                return (<div key={task.id} style={{
                    height:"45px",
                    width:"300px",
                    border:"2px solid black",
                    borderRadius:"10px",
                    margin:"10px",
                    backgroundColor:task.isCompleted ? "#99ff99" : "#ff944d",
                    display:"flex",
                    padding:"5px",
                    justifyContent:"space-between"
                }}>
                    <input checked={task.isCompleted} onChange={()=>changeTaskStatus(task.id)} type="checkbox" />
                    <span style={{marginLeft:"15px",marginTop:"10px"}}>{task.objective}</span>
                    <img onClick={()=>deleteTask(task.id)} src={deleteIcon} alt="Logo" width={30} height={30}  />
                </div>)
            })}
        </div>
    )
}