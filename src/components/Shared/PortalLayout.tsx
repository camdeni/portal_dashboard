import * as React from 'react';
import classname from 'classnames';
import style from './Shared.module.scss';
import SideBarMenu from './Menu/SideBarMenu';
import HeaderMenu from './Menu/HeaderMenu';
import { Icon } from '@iconify/react';

const PortalLayout = ({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle?: { title: string; icon?: string };
}) => {
  return (
    <div className={classname(style.portalLayout, 'relative')}>
      <SideBarMenu />
      <HeaderMenu />
      <main className={classname(style.main)}>
        {pageTitle && (
          <div className={classname('flex items-center')}>
            <Icon
              icon={pageTitle.icon || 'arcticons:smart-home'}
              fontSize={50}
            />
            <span className="font-bold text-20" style={{ marginLeft: '20px' }}>
              {pageTitle.title}
            </span>
          </div>
        )}
        <div className={classname('relative', style.children)}>{children}</div>
      </main>
    </div>
  );
};

export default PortalLayout;
