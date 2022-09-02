import * as React from 'react';
import classname from 'classnames';
import style from './Shared.module.scss';
import SideBarMenu from './Menu/SideBarMenu';
import HeaderMenu from './Menu/HeaderMenu';

const PortalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classname(style.portalLayout, 'relative')}>
      <SideBarMenu />
      <HeaderMenu />
      <main>{children}</main>
    </div>
  );
};

export default PortalLayout;
