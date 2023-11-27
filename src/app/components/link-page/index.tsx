import Link from 'next/link'
import React from 'react'

interface Link{
    nameLink: string;
}

const LinkPage = (props:Link) => {
  return (
    <>
      <ul>
        <li>
          <Link href={"/"}>{props.nameLink}</Link>
        </li>
      </ul>
    </>
  )
}

export default LinkPage
