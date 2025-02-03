import { TextField } from '@mui/material';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const SWrapper = styled.div`
  position: relative;
  height: 56px;
  width: 100%;
  background-color: var(--white-1);
`;

export const SInput = styled(TextField)`
  .MuiInputBase-root {
    font: var(--Text_100_20);
    border-radius: unset;
    width: 100%;
    height: 58px;
    padding-left: 68px;
    border: unset;
  }
`;

export const SArrowIcon = styled(KeyboardArrowDownIcon)`
  position: absolute;
  top: 8px;
  left: 14px;
  width: 40px !important;
  height: 40px !important;
  path {
    fill: var(--grey-2);
  }
`;
