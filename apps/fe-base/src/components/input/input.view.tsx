import React, { ReactElement } from 'react';
import { TextField } from '@mui/material';

import { UiInputType } from '.';

interface IUiInput {
    variant?: string;
    type?: string;
    name?: string;
    min?: number;
    max?: number;
    label: string;
    onRegister: any;
}

/**
 * The input component uses the material ui textfield and
 * restricts the props the developer is allowed to use
 */
const Input = ({
    variant = 'outlined',
    name = '',
    type = UiInputType.TEXT,
    label,
    min,
    max,
    onRegister = () => {},
}: IUiInput): ReactElement => {
    return (
        <TextField
            className="w-full"
            label={label}
            variant={variant}
            InputProps={{
                inputProps: {
                    min: min,
                    max: max,
                    minLength: min,
                    maxLength: max,
                },
            }}
            type={type}
            {...onRegister(name)}
        />
    );
};

export default Input;
