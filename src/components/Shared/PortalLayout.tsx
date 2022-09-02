import * as React from 'react';
import classname from 'classnames';
import style from './Shared.module.scss';
import SideBarMenu from './Menus/SideBarMenu';

const PortalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classname(style.portalLayout, 'relative')}>
      <SideBarMenu />
      <main>{children}</main>
    </div>
  );
};

export default PortalLayout;
