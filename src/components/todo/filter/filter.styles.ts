import { Button, Tabs } from '@mui/material';
import styled from 'styled-components';

export const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 8px 16px;
`;

export const SClearButton = styled(Button)``;

export const STabs = styled(Tabs)`
  .MuiButtonBase-root {
    font: var(--Text_100_14);
    text-transform: none;
    padding: 4px 6px;
    max-width: 98px;
    min-width: 32px;
  }
`;
