import Image from 'next/image'
import React from 'react'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.container}>   
        <p className={styles.name}>CoffeeBlack</p>
        <Image 
            src="/cup-coffee.svg" 
            alt="Logo Coffee" 
            width={40} 
            height={40} 
            priority
            className={styles.logo}
        />
    </div>
  )
}

export default Logo
