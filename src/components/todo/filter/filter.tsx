import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { TFilter } from './filter.types';
import { SClearButton, STabs, SWrapper } from './filter.styles';
import { EFilter } from '../../../shared/types/todo';
import { Tab } from '@mui/material';

export const Filter: React.FC<TFilter> = ({ tasks, handleChangeFilter, filter, handleClearCompleted }) => {
  const itemsLeft = useMemo(() => tasks.filter((task) => !task.completed).length, [tasks]);

  return (
    <SWrapper>
      <div>
        {itemsLeft} items left
      </div>
      <STabs value={filter} onChange={(_, value) => handleChangeFilter(value)} aria-label="disabled tabs example">
        <Tab label="All" value={EFilter.All} />
        <Tab label="Active" value={EFilter.Active} />
        <Tab label="Completed" value={EFilter.completed} />
      </STabs>
      <SClearButton onClick={handleClearCompleted}>Clear completed</SClearButton>
    </SWrapper>
  );
};