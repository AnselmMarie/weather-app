import { ReactElement } from 'react';

interface UiMainLayoutProps {
  sideNav?: ReactElement | null;
  main?: ReactElement | null;
}

const UiMainLayout = ({ sideNav = null, main = null }: UiMainLayoutProps): ReactElement => {
  return (
    <div className="desktopAndUp:flex min-h-screen prose-base">
      <div className="desktopAndUp:w-1/5 z-10 p-md bg-white shadow-lg">{sideNav}</div>
      <div className="desktopAndUp:w-4/5 p-md">{main}</div>
    </div>
  );
};

export default UiMainLayout;
