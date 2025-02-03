import { useCallback, useMemo, useState } from 'react';
import { EFilter, TTask } from '../shared/types/todo';

export const useTodoList = () => {
  const [taskList, setTaskList] = useState<TTask[]>([]);
  const [filter, setFilter] = useState<EFilter>(EFilter.All);

  const handleChangeFilter = (newFilter: EFilter) => setFilter(newFilter);

  const handleCreateTask = useCallback((title: string) => {
    setTaskList([...taskList, { id: Date.now(), text: title, completed: false }])
  }, [taskList]);

  const handleCompleteTask = useCallback((id: number) => {
    const updatedTasks = taskList.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
    setTaskList(updatedTasks)
  }, [taskList]);

  const handleClearCompleted = useCallback(() => {
    const cleared = taskList.filter(task => !task.completed);
    setTaskList(cleared);
  }, [taskList, filter]);

  const tasks = useMemo(() => {
    if (filter === EFilter.completed || filter === EFilter.Active) {
      return taskList.filter(task => filter === EFilter.completed ? task.completed : !task.completed);
    }

    return taskList;
  }, [taskList, filter]);

  return {
    tasks,
    handleCreateTask,
    handleCompleteTask,
    handleChangeFilter,
    handleClearCompleted,
    filter,
  };
};