import React, { ReactElement } from "react";
import Link from './Link';

const navigation = [
  { name: 'Home',   href: '/', current: true },
  { name: 'About',  href: '/about', current: false },
  { name: 'News',   href: '/news', current: false },
  { name: 'P6M7G8 Inc.',   href: 'https://p6m7g8.com', current: false },
  { name: 'Continuous Learning',   href: 'https://continuouslearning.io', current: false },
]

const Nav = (): ReactElement => (

  <nav className="mt-4 space-x-1 text-right" aria-label="NavBarTopRight">
    {
      navigation.map((item) => (
        <Link item={item}>
          a
        </Link>
      ))
    }
  </nav>
)

export default Nav;