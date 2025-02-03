import React, { useCallback, useMemo, useState, useEffect, ChangeEvent } from 'react';
import { SArrowIcon, SInput, SWrapper } from './create-task.styles';
import { TCreateTask } from './create-task.types';

export const CreateTask: React.FC<TCreateTask> = ({ handleCreateTask }) => {
  const [title, setTitle] = useState<string>('');

  const handleAddTask = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && title) {
      handleCreateTask(title);
      setTitle('');
    }
  }, [handleCreateTask, title]);

  const handleEditTask = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }, [handleCreateTask]);

  return (
    <>
      <SWrapper>
        <SArrowIcon />
        <SInput id="outlined-basic" value={title} placeholder="What needs to be done?" variant="outlined" onChange={handleEditTask} onKeyDown={handleAddTask} fullWidth />
      </SWrapper>
    </>
  );
};