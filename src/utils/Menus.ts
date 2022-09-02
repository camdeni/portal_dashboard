export const sidebarMenus = [
  {
    name: 'Dashboard',
    icon: 'arcticons:smart-home',
    uri: '/dashboard',
  },
  {
    name: 'Attendance',
    icon: 'carbon:report-data',
    uri: '#',
    sub: [
      {
        name: 'Report',
        icon: 'icon-park-twotone:sales-report',
        uri: '/report',
      },
      {
        name: 'Record Attendance',
        icon: 'ant-design:file-add-filled',
        uri: '#',
      },
    ],
  },
];

export const avatarMenu = [
  {
    name: 'Settings',
    icon: 'icon-park-twotone:setting-computer',
    uri: '#',
  },
  { name: 'Logout', icon: 'majesticons:logout-half-circle-line', uri: '#' },
];
