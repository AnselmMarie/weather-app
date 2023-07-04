import { ReactElement } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface UiSelectProps {
  menuItems?: any;
  label?: string | null;
  defaultValue?: string;
  onChange?: any;
}

const SelectView = ({
  menuItems = [],
  label = null,
  defaultValue,
  onChange,
}: UiSelectProps): ReactElement => {
  return (
    <FormControl fullWidth>
      {label ? <InputLabel id="demo-simple-select-label">{label}</InputLabel> : null}
      <Select label={label} defaultValue={defaultValue} onChange={onChange}>
        {menuItems.map((el: any, i: any): ReactElement => {
          return (
            <MenuItem key={i} value={el.value}>
              {el.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectView;
