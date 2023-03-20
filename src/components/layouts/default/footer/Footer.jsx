import React from 'react'
import Social from '../social'
import style from './footer.module.css'
import Title from '../../../common/Title'
import Paragraph from '../../../common/Paragraph'

function Footer() {
  return (
    <footer id="footer" className={style.footer}>
      <div className={style.content}>
        <Title color="primary">Delicias de Quesos El Rey</Title>
        <Paragraph size="xs">
          Todos los derechos reservados © 2022 &nbsp;
        </Paragraph>
        <a
          className={style.me}
          href="https://luichix.github.io/portafolio/"
          target="_blank"
          rel="noreferrer"
        >
          <code>
            Diseñado por: <b>Luichix Rex</b>
          </code>
        </a>
      </div>
      <Social />
    </footer>
  )
}

export default Footer
