import { ReactElement } from 'react';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { UiInputType } from '.';

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
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <TextField
          className="w-full"
          variant="outlined"
          label={label}
          error={!!error}
          helperText={error ? error.message : ''}
          InputProps={{
            inputProps: {
              min: min,
              max: max,
              minLength: min,
              maxLength: max,
            },
          }}
          defaultValue={value}
          type={type}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
    />
  );
};

export default Input;
