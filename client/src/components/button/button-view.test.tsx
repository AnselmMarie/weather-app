import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './button.view';

const handleClick = jest.fn();

test('Button will render with default prop settings', async () => {
    render(<Button testid="test-button">Testing Button</Button>);

    const element = screen.getByTestId('test-button');

    expect(element.getAttribute('type')).toEqual('button');
    expect(element).toHaveClass(
        'MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge'
    );
    expect(element).toHaveTextContent('Testing Button');
});

test('Button will be clicked', async () => {
    render(
        <Button testid="test-button" onClick={handleClick}>
            Testing Button
        </Button>
    );

    const element = screen.getByTestId('test-button');

    await userEvent.click(element);

    expect(handleClick).toBeCalledTimes(1);
});
