import React from 'react';
import classname from 'classnames';
import style from './Menu.module.scss';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { avatarMenu } from 'src/utils/Menus';

export const AvatarMenu = () => {
  return (
    <div
      className={classname(
        style.avatarMenu,
        'bg-white absolute top-0 right-0 z-10'
      )}
    >
      <div className={classname(style.userDetail)}>
        <div className="flex items-center">
          <div className={style.userAvatar}>
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
          </div>
          <div
            className={classname(style.names, 'flex flex-col')}
            style={{ marginLeft: '18px' }}
          >
            <span className="font-bold text-14 capitalize ml-2">John Doe</span>
            <span className="text-14">johndoe@gmail.com</span>
          </div>
        </div>
        <div className={style.hr}></div>
      </div>
      <div className={classname('relative', style.aMenu)}>
        <ul>
          {avatarMenu.map((item) => (
            <li key={item.name}>
              <Link to={item.uri} className="flex items-center h-full">
                <Icon icon={item.icon} fontSize={30} />
                <span className="ml-3 text-14">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AvatarMenu;
