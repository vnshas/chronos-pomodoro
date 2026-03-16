import { createContext } from "react"
import type { TaskStateModel } from "../../models/TaskStateModel"
import { initialTaskState } from "./initialTaskState"
import type { TaskActionModel } from "./taskActions"

export const initialContextValue = {
    state:initialTaskState,
    dispatch: () => {},
}

type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<TaskActionModel>
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)

