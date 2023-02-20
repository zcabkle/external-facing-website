import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Foodbanks',
    path: '/foodbanks',
    icon: < AiIcons.AiFillShop />,
    cName: 'nav-text'
  },
  {
    title: 'Items',
    path: '/items',
    icon: <AiIcons.AiFillShopping />,
    cName: 'nav-text'
  },
  {
    title: 'Help',
    path: '/help',
    icon: <IoIcons.IoIosHelpCircle />,
    cName: 'nav-text'
  }
];
