import { useMediaQuery } from 'react-responsive';

const useMediaQueryLogic = (): any => {
  return useMediaQuery({
    query: '(min-width: 1024px)',
  });
};

export default useMediaQueryLogic;
