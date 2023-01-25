import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Card } from '@mui/material';

interface IUiCard {
    classes?: string;
    raised?: boolean;
    children: ReactNode;
    onClick?: () => void;
}

/**
 * The card component uses the material ui card and
 * restricts the props the developer is allowed to use
 */
const CardView = ({
    classes = '',
    raised = false,
    children,
    onClick = () => {},
}: PropsWithChildren<IUiCard>): ReactElement => {
    return (
        <Card raised={raised} className={classes} onClick={onClick}>
            {children}
        </Card>
    );
};

export default CardView;
