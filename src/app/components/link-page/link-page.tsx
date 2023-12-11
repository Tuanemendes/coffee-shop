import Link from 'next/link'
import React from 'react'
import ILink from './link-page.type'
import styles from './link-page.module.css'

const LinkPage = ({nameLink}: ILink) => {
  return (
    <>
      <ul className={styles.container}>
        <li className={styles.listLink}>
          <Link className={styles.item} href={"#"}>{nameLink}</Link>
        </li>
      </ul>
    </>
  )
}

export default LinkPage
