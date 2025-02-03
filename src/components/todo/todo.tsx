import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { SContentWrapper, SHeader, SItemContainer, SWrapper } from './todo.styles';
import { CreateTask } from './create-task';
import { useTodoList } from '../../hooks';
import { TaskItem } from './task-item/task-item';
import { Filter } from './filter';

export const Todo: React.FC = () => {
  const {
    tasks,
    handleCompleteTask,
    handleCreateTask,
    handleClearCompleted,
    handleChangeFilter,
    filter
  } = useTodoList();

  return (
    <SWrapper>
      <SHeader>todos</SHeader>
      <SContentWrapper>
        <CreateTask handleCreateTask={handleCreateTask} />
        <SItemContainer>
          {tasks.map((task, index) =>
            <TaskItem key={task.id} task={task} handleCompleteTask={handleCompleteTask} disabledBorder={!!index} />
          )}
        </SItemContainer>
      </SContentWrapper>
      <Filter filter={filter} tasks={tasks} handleChangeFilter={handleChangeFilter} handleClearCompleted={handleClearCompleted} />
    </SWrapper>
  );
};