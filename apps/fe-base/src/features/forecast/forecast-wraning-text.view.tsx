import { ReactElement } from 'react';

import { useMediaQueryLogic } from '@weather-app/design-system';

const ForecastWarningText = (): ReactElement => {
  const desktopAndUpQuery = useMediaQueryLogic();

  const desktopWarningText =
    'To see a 7-day forecast of an area, enter and then submit an address on the left.';

  const mobileWarningText =
    'To see a 7-day forecast of an area, click on the "Add Address" button, then submit an address.';

  return <p>{desktopAndUpQuery ? desktopWarningText : mobileWarningText}</p>;
};

export default ForecastWarningText;
