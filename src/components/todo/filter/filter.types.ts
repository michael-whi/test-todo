import { EFilter, TTask } from '../../../shared/types/todo';

export type TFilter = {
  handleChangeFilter: (filter: EFilter) => void;
  handleClearCompleted: () => void;
  tasks: TTask[];
  filter: EFilter;
};
