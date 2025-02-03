import React, { PropsWithChildren } from 'react';
import { SPageWrapper } from './page-container.styles';

export const PageContainer:React.FC<PropsWithChildren> = ({ children }) => {

  return (
  <SPageWrapper>
    {children}
  </SPageWrapper>
  );
};