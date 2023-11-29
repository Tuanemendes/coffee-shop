import Link from 'next/link'
import React from 'react'

interface ILink{
    location?: string;
    nameLink: string;
}

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
