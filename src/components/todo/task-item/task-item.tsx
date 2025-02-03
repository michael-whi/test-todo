import { SCompleted, SContent, SIncompleted, STitle, SWrapper } from './task-item.styles';
import { TTaskItem } from './task-item.types';

export const TaskItem: React.FC<TTaskItem> = ({ task, disabledBorder, handleCompleteTask }) => {
  const { id, text, completed } = task;

  return (
    <>
      <SWrapper $disableTopBorder={disabledBorder}>
        <SContent>
          {completed ? <SCompleted /> : <SIncompleted onClick={() => handleCompleteTask(id)} />}
          <STitle $completed={completed}>{text}</STitle>
        </SContent>
      </SWrapper>
    </>
  );
};