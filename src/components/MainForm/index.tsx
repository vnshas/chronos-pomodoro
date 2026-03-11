import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import { DefaultButton } from "../DefaultButton"
import { DefaultInput } from "../DefaultInput"
import { useRef } from "react"
import type { TaskModel } from "../../models/TaskModel"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"

export const MainForm = () =>{
  const {state,setState} = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement >(null)

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle)
  console.log(nextCycle)
  
  function handleCreateNewTask(event:React.SubmitEvent<HTMLFormElement>){
    event.preventDefault()
    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()

    if(!taskName){
      alert('Valor inválido')
      return
    }
    const newTask : TaskModel = {
        id: Date.now.toString(),
        name: taskName,
        duration: 1,
        startDate: Date.now(),
        completeDate: null,
        interruptDate: null, 
        type: "workTime",
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState =>{
      return {
        ...prevState,
        config:{...prevState.config},
        activeTask: newTask,
        currentCycle:nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask]
      }
    })
  }  
  
  return(
        <form onSubmit={ handleCreateNewTask} className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="task"
              id="input"
              type="text"
              placeholder="Digite Algo"
              ref={taskNameInput}
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton  icon={<PlayCircleIcon />}/>
          </div>
        </form>
    )
}