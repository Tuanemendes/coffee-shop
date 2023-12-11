import Image from 'next/image'
import React from 'react'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.container}>   
        <p className={styles.name}>Coffee</p>
        <a target="_blank" href="https://icons8.com/icon/37302/caf%C3%A9"></a><a target="_blank" href="https://icons8.com">
        <Image 
            src="/coffee.png" 
            alt="Logo Coffee" 
            width={40} 
            height={40} 
            priority
        />
       </a> 
        
    </div>
  )
}

export default Logo
