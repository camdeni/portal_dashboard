import React from 'react';
import classname from 'classnames';
import style from './Menu.module.scss';
import { Icon } from '@iconify/react';

export const HeaderMenu = () => {
  return (
    <div className={classname(style.headerMenu, 'fixed left-0 top-0 right-0')}>
      <div
        className={classname(
          'flex justify-between relative z-10',
          style.menuContainer
        )}
      >
        <div></div>
        <div className={classname('flex items-cent justify-between')}>
          <div className={classname('flex items-center', style.avatar)}>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <span
              className="text-14 font-bold capitalize"
              style={{ color: 'rgba(0, 0, 0, 0.36)', marginLeft: '8px' }}
            >
              John doe
            </span>
          </div>
          <div
            className="relative"
            style={{ marginTop: '3.5px', marginLeft: '10px' }}
          >
            <button
              className="outline-none focus:outline-none cursor-pointer"
              type="button"
            >
              <Icon
                fontSize={15}
                icon="ant-design:caret-down-outlined"
                color="rgba(0, 0, 0, 0.36)"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderMenu;
