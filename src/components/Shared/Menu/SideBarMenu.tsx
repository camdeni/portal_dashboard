import * as React from 'react';
import classname from 'classnames';
import style from './Menu.module.scss';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { sidebarMenus } from 'src/utils/Menus';
import { useLocation } from 'react-router-dom';

const SideBarMenu = () => {
  const [collapseId, setCollapseId] = React.useState<number>();

  const location = useLocation();

  const handleCollapse = (itemKey: number) => {
    if (itemKey === collapseId) {
      setCollapseId(undefined);
    } else {
      setCollapseId(itemKey);
    }
  };

  return (
    <div
      className={classname(
        'fixed top-0 left-0 bottom-0 bg-primary',
        style.sideBarMenu
      )}
    >
      <div
        className={classname('font-bold uppercase text-white', style.header)}
      >
        <img src="/camveniLogo.svg" alt="" />
      </div>
      <div className={classname('relative', style.sidebarNavigation)}>
        <span className="text-14 text-white">Navigation</span>
        <ul className={style.menu}>
          {sidebarMenus.map((item, itemKey) => (
            <li
              key={itemKey}
              className={classname(
                'relative collapse collapse-arrow',
                style.listMenu,
                location.pathname === item.uri && style.listMenuActive
              )}
              onClick={() => handleCollapse(itemKey)}
            >
              <Link
                to={item.sub ? '#' : item.uri}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center">
                  <Icon icon={item.icon} fontSize={30} color="white" />
                  <span
                    className={classname(
                      style.listMenuSpan,
                      'text-white text-14 font-bold'
                    )}
                  >
                    {item.name}
                  </span>
                </div>
                {item.sub && item.sub.length > 0 && (
                  <button className="outline-none focus:outline-none">
                    <Icon
                      icon={
                        collapseId === itemKey
                          ? 'ant-design:caret-down-outlined'
                          : 'ant-design:caret-left-outlined'
                      }
                      fontSize={20}
                      color="white"
                    />
                  </button>
                )}
              </Link>
              {collapseId === itemKey && item.sub && item.sub.length > 0 && (
                <div className={classname('relative', style.subMenu)}>
                  <ul>
                    {item.sub.map((sub) => (
                      <li className={classname('flex items-center')}>
                        <Link
                          to={sub.uri}
                          className={classname('flex items-center')}
                        >
                          <Icon icon={sub.icon} color="white" fontSize={30} />
                          <span
                            className={classname('text-14 text-white ml-12')}
                          >
                            {sub.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideBarMenu;
