import React from 'react';

import { Menu } from 'antd';
import type { NextPage } from 'next';
import Link from 'next/link';

const { Item } = Menu;

const LayoutNavbar: NextPage = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['home']}
      style={{ lineHeight: '64px' }}
    >
      <Item key="home">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Item>
      <Item key="about">
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </Item>
    </Menu>
  );
};

export default LayoutNavbar;
