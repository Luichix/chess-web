import React, { useState, useContext } from 'react'
import ButtonTheme from '../../../customs/ButtonTheme'
import AuthContext from '../../../../context/auth'
import LanguageContext from '../../../../context/language'
import ThemeContext from '../../../../context/theme'
import Link from 'next/link'
import word from '../../../../data/navbar.json'
import styles from './account.module.css'
import classNames from 'classnames'

const Account = () => {
  const [open, setOpen] = useState(false)

  const auth = useContext(AuthContext)
  const { language, handleLanguage } = useContext(LanguageContext)
  const { theme, handleTheme } = useContext(ThemeContext)
  const [checked, setChecked] = useState(theme === 'dark' ? true : false)
  const texts = word[language]

  const handleChecked = () => {
    if (checked) {
      setChecked(false)
    } else {
      setChecked(true)
    }
  }

  return (
    <div
      className={classNames(styles.group, {
        [styles.visible]: open,
        [styles.hidden]: !open,
      })}
    >
      {auth ? (
        <Link href="/account">
          <a className={styles.link} onClick={() => setOpen(false)}>
            {texts.dashboard}
          </a>
        </Link>
      ) : (
        <>
          <Link href="/login">
            <a
              to="/login"
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {texts.login}
            </a>
          </Link>
          <Link href="/signup">
            <a
              to="/signup"
              className={styles.register}
              onClick={() => setOpen(false)}
            >
              {texts.register}
            </a>
          </Link>
        </>
      )}
      <div className={styles.space}>
        <select
          name="language"
          onChange={handleLanguage}
          className={classNames(styles.select, styles[theme])}
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
      <div className={styles.space}>
        <ButtonTheme
          checkedHandler={handleChecked}
          themeHandler={handleTheme}
          checked={checked}
        />
      </div>
    </div>
  )
}

export default Account
