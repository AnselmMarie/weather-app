import { ReactElement } from 'react';

import { useFormLogic } from '../../hooks';

import { UiInput } from '.';

const InputControlledView = (props: any): ReactElement => {
  const { onControl } = useFormLogic({});

  return <UiInput {...props} onControl={onControl} />;
};

export default InputControlledView;
