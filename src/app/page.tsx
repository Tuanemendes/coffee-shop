
import Button from './components/button/button'
import Logo from './components/logo/logo'
import Navbar from './components/navbar/navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
         <Logo/>
         <Navbar/>
         <Button/>
         <Button/>
      </div>
    </main>
  )
}
