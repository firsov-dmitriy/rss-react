import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
interface LayoutProps {
  getValue: (text: string) => void;
  onSubmit: (eve: React.FormEvent<HTMLFormElement>) => void;
  showBurgerMenu: (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Layout: FC<LayoutProps> = ({ getValue, onSubmit, showBurgerMenu }) => {
  return (
    <>
      <Header getValue={getValue} onSubmit={onSubmit} showBurgerMenu={showBurgerMenu} />
      <Outlet />
    </>
  );
};

export default Layout;
