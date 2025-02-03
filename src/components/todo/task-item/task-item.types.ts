import { TTask } from '../../../shared/types/todo';

export type TTaskItem = {
  task: TTask;
  disabledBorder: boolean;
  handleCompleteTask: (id: number) => void;
};
