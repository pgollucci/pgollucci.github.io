import React, { ReactElement } from "react"

const navigation = [
  { name: 'Home',   href: '/', current: true },
  { name: 'About',  href: '/about', current: false },
  { name: 'News',   href: '/news', current: false },
  { name: 'P6M7G8 Inc.',   href: 'https://p6m7g8.com', current: false },
  { name: 'Continuous Learning',   href: 'https://p6m7g8.com', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Nav = (): ReactElement => (
    <nav className="mt-4 space-x-1 text-right" aria-label="TopBar" >
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-blue-300 text-gray-900' : 'text-gray-600 hover:bg-blue-300 hover:text-gray-900',
            'items-center px-3 py-2 text-2xl font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
)

export default Nav;