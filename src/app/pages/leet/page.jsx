import styles from '../../styles/leet.module.css'
import Leet1 from '@/app/leets/leet1.jsx'
import Leet2 from '@/app/leets/leet2.jsx'

export default function leet(){
  return(
    <>
      <h1>leet code page</h1>
      <div className={styles.leets}>
        <Leet1/>
        <Leet2/>
      </div>
    </>
  )
}