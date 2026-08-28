import type { TaskModel } from '../../models/TaskModel'
import type { TaskStateModel } from '../../models/TaskStateModel'

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNTDOWN = 'COUNTDOWN',
  COMPLETE_TASK = 'COMPLETE',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK
      payload: TaskModel
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK
    }
  | {
      type: TaskActionTypes.RESET_STATE
    }
  | {
      type: TaskActionTypes.COUNTDOWN
      // payload: { 'secondsRemaining': number }
      payload: Pick<TaskStateModel, 'secondsRemaining'>
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK
    }
