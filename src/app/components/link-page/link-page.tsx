import Link from 'next/link'
import React from 'react'
import ILink from './link-page.type'

const LinkPage = ({nameLink}: ILink) => {
  return (
    <>
      <ul>
        <li>
          <Link href={"#"}>{nameLink}</Link>
        </li>
      </ul>
    </>
  )
}

export default LinkPage
