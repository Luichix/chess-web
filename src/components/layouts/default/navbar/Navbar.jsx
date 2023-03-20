import React, { useState, useContext } from 'react'
import styles from './navbar.module.css'
import classNames from 'classnames'
import LanguageContext from '../../../../context/language'
import ThemeContext from '../../../../context/theme'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import word from '../../../../data/navbar.json'
import Pack from '../../../common/Pack'
import Title from '../../../common/Title'
import Crown from '../../../svg/Crown'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { language } = useContext(LanguageContext)
  const texts = word[language]
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.navbar}>
      <Pack theme={theme} color="transparent">
        <div className={styles.container}>
          <div className={styles.logotype}>
            <Crown color="#eb2929" size="26px" />
            <Title>Quesos El Rey</Title>
          </div>
          <div className={styles.section}>
            <div
              className={classNames(styles.group, {
                [styles.visible]: open,
                [styles.hidden]: !open,
              })}
            >
              <Link href="/">
                <a className={styles.link} onClick={() => setOpen(false)}>
                  {texts.home}
                </a>
              </Link>
              <Link href="/store">
                <a className={styles.link} onClick={() => setOpen(false)}>
                  {texts.store}
                </a>
              </Link>
              <Link href="/blog">
                <a className={styles.link} onClick={() => setOpen(false)}>
                  {texts.blog}
                </a>
              </Link>
              <Link href="/carrer">
                <a className={styles.link} onClick={() => setOpen(false)}>
                  {texts.carrer}
                </a>
              </Link>
              <Link href="/contact">
                <a className={styles.link} onClick={() => setOpen(false)}>
                  {texts.contact}
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.nav}>
            {open === false ? (
              <i className={styles.button} onClick={() => setOpen(true)}>
                <FaBars />
              </i>
            ) : (
              <i className={styles.button} onClick={() => setOpen(false)}>
                <AiOutlineClose />
              </i>
            )}
          </div>
        </div>
      </Pack>
    </div>
  )
}

export default Navbar
