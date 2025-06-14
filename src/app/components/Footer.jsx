import styles from '@/app/styles/Footer.module.css'
import Link from 'next/link'
import { CiFileOn } from "react-icons/ci";
import { FaCode } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <Link href='/pages/learn'>
        <CiFileOn /> Learn
      </Link>
      <Link href='/pages/leet'>
        <FaCode /> Examples
      </Link>
      <a href='https://leetcode.com/' target='_blank'>
        <SiLeetcode /> Go to LeetCode
      </a>
    </footer>
  )
}