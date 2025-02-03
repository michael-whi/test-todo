import styled from 'styled-components';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const SWrapper = styled.div<{ $disableTopBorder?: boolean }>`
  height: 70px;
  width: 100%;
  background-color: var(--white-1);
  border: 1px solid var(--grey-1);
  border-top: ${({ $disableTopBorder }) =>
    $disableTopBorder ? 'none' : '1px solid var(--grey-1)'};
  padding: 16px;
`;

export const SIncompleted = styled(PanoramaFishEyeIcon)`
  cursor: pointer;
  width: 38px !important;
  height: 38px !important;
  path {
    fill: var(--grey-2);
  }
`;

export const SCompleted = styled(CheckCircleOutlineIcon)`
  width: 38px !important;
  height: 38px !important;
  path {
    fill: var(--green-1);
  }
`;

export const STitle = styled.div<{ $completed: boolean }>`
  font: var(--Text_100_24);
  color: ${({ $completed }) =>
    $completed ? 'var(--grey-2)' : 'var(--grey-3)'};
  text-decoration: ${({ $completed }) =>
    $completed ? 'line-through' : 'unset'};
  margin-left: 32px;
`;

export const SContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
