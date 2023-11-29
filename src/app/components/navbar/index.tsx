
import React from 'react'
import LinkPage from '../link-page'
import navbarData from './data/navbar.data'

const Navbar = () => {
  return (
    <>
      <nav>
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
