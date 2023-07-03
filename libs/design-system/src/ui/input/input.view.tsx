import { ReactElement } from 'react';
import { TextField } from '@mui/material';

import { UiInputType } from '.';
import { Controller } from 'react-hook-form';

interface IUiInput {
  type?: string;
  name?: string;
  min?: number;
  max?: number;
  error?: string;
  label: string;
  onValidate?: any;
  onControl?: any;
}

const Input = ({
  name = '',
  error = '',
  type = UiInputType.TEXT,
  label,
  min,
  max,
  onControl = null,
}: IUiInput): ReactElement => {
  return (
    <Controller
      control={onControl}
      name={name}
      render={({ field: { onChange, onBlur } }) => (
        <TextField
          className="w-full"
          variant="outlined"
          label={label}
          error={!!error}
          helperText={error}
          InputProps={{
            inputProps: {
              min: min,
              max: max,
              minLength: min,
              maxLength: max,
            },
          }}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
    />
  );
};

export default Input;
