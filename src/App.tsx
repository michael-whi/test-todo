import React from 'react';
import { PageContainer } from './components/page-container';
import { Todo } from './components/todo';

const App: React.FC = () => {
  return (
    <div>
      <PageContainer>
        <Todo />
      </PageContainer>
    </div>
  );
};

export default App;