import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Navbar.module.css'

import { checkCurrentPath } from '../../utils/routes'

function Navbar() {
    const router = useRouter()
    const currentPath = router.pathname
    
  return (
      <div className={styles.navbar_container}>
        <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={150} height={48} /></Link>
        
        <div className={styles.link_container}>
        <Link href='/'><a className={`${styles.navbar_link} ${checkCurrentPath(currentPath, '/') ? styles.navbar_link_selected : ''}`}>Home</a></Link>
        <Link href='/articles'><a className={`${styles.navbar_link} ${checkCurrentPath(currentPath, '/articles') ? styles.navbar_link_selected : ''}`}>Articles</a></Link>
        <Link href='/projects'><a className={`${styles.navbar_link} ${checkCurrentPath(currentPath, '/projects') ? styles.navbar_link_selected : ''}`}>Projects</a></Link>
        <Link href='/learn'><a className={`${styles.navbar_link} ${checkCurrentPath(currentPath, '/learn') ? styles.navbar_link_selected : ''}`}>Learn</a></Link>

        </div>
      </div>
  )
}

export default Navbar