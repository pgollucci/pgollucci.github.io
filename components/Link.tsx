import React, { ReactElement } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return (
    <span
      key={href}>
      <Link href={href}>
        {React.cloneElement(children, { className })}
      </Link>
    </span>
  )
}
