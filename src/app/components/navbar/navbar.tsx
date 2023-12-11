
import React from 'react'
import LinkPage from '../link-page/link-page'
import navbarData from './data/navbar.data'
import styles from './navbar.module.css'
import Button from '../button/button'
import Logo from '../logo/logo'

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        {
          navbarData.map(link =>(
            <LinkPage nameLink={link.nameLink}/>
          ))
        }
      </nav>
    </>
  )
}

export default Navbar
