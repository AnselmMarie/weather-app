import { ReactElement } from 'react';

import { MenuItem, Select } from '@mui/material';

interface UiSelectProps {
  menuItems?: any;
  labelId?: string;
  id?: string;
  label: string;
  defaultValue?: string;
  onChange?: any;
}

const BackdropView = ({
  menuItems = [],
  labelId = '',
  id = '',
  label,
  defaultValue,
  onChange,
}: UiSelectProps): ReactElement => {
  return (
    <Select labelId={labelId} id={id} label={label} defaultValue={defaultValue} onChange={onChange}>
      {menuItems.map((el: any, i: any): ReactElement => {
        return (
          <MenuItem key={i} value={el.value}>
            {el.label}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default BackdropView;
