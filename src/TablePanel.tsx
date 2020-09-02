import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import {  useTheme } from '@grafana/ui';
import TableComponent from 'components/table.component';

interface Props extends PanelProps<SimpleOptions> {}

export const TablePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  
  

  return (
    <div className={theme.isLight ? 'light-theme':'dark-theme'}> 
        <TableComponent  {...options}></TableComponent>
    </div>
      
  );
};
 