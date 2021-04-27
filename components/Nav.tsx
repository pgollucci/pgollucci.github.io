import React, { ReactElement } from "react"

const navigation = [
  { name: 'Home',   href: '/', current: true },
  { name: 'About',  href: '/about', current: false },
  { name: 'News',   href: '/news', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Nav = (): ReactElement => (
    <nav className="mt-4 space-y-1" aria-label="Sidebar" >
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current ? 'bg-gray-300 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'flex items-center px-3 py-2 text-2xl font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <span className="truncate">{item.name}</span>
        </a>
      ))}
    </nav>
)

export default Nav;