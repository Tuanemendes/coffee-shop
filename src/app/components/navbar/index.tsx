
import React from 'react'
import LinkPage from '../link-page'

const Navbar = () => {
  return (
    <>
      <nav>
      <LinkPage nameLink='Home'></LinkPage>
      <LinkPage nameLink='Menu'></LinkPage>
      <LinkPage nameLink='service'></LinkPage>
      <LinkPage nameLink='contact'></LinkPage>
      </nav>
    </>
  )
}

export default Navbar
