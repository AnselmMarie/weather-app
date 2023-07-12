import { ReactElement } from 'react';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { UiInputType } from '.';

interface IUiInput {
  type?: string;
  name?: string;
  min?: number;
  max?: number;
  errorMessage?: string;
  defaultValue?: string;
  label: string;
  onChange?: any;
  onBlur?: any;
  onControl?: any;
}

const UiInput = ({
  name = '',
  type = UiInputType.TEXT,
  label,
  min,
  max,
  errorMessage = '',
  defaultValue = '',
  onBlur = null,
  onControl = null,
  onChange = null,
}: IUiInput): ReactElement => {
  const InputField = ({
    onControlChange = null,
    onControlBlur = null,
    controlValue = null,
  }: any): ReactElement => {
    return (
      <TextField
        className="w-full"
        variant="outlined"
        label={label}
        error={!!errorMessage}
        helperText={errorMessage ? errorMessage : ''}
        InputProps={{
          inputProps: {
            min: min,
            max: max,
            minLength: min,
            maxLength: max,
          },
        }}
        defaultValue={controlValue || defaultValue}
        type={type}
        onBlur={onControlBlur || onBlur}
        onChange={onControlChange || onChange}
      />
    );
  };

  if (onControl) {
    return (
      <Controller
        control={onControl}
        name={name}
        render={({
          field: { onChange: onControlChange, onBlur: onControlBlur, value: controlValue },
          fieldState: { error },
        }) => (
          <InputField
            onControlChange={onControlChange}
            onControlBlur={onControlBlur}
            controlValue={controlValue}
          />
        )}
      />
    );
  }

  return <InputField />;
};

export default UiInput;
