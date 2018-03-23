const menu = [
  {
    name: 'Store list',
    translateKey: 'store_list',
    link: '/dashboard',
    icon: 'la la-shopping-cart',
    subMenu: [
      {
        name: 'User list',
        translateKey: 'user_list',
        link: '/dashboard2'
      }
    ]
  },
  {
    name: 'User list',
    translateKey: 'user_list',
    link: '/dashboard2',
    icon: 'la la-users',
    subMenu: []
  },
  {
    name: 'Genre setting',
    translateKey: 'genre_setting',
    link: '/dashboard2',
    icon: 'la la-cogs',
    subMenu: []
  },
  {
    name: 'Cast list',
    translateKey: 'cast_list',
    link: '/dashboard2',
    icon: 'la la-user',
    subMenu: []
  }
];

export default menu;
