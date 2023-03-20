import React, { useContext } from 'react'
import styles from './home.module.css'
import Title from '../../components/common/Title'
import Paragraph from '../../components/common/Paragraph'
import Button from '../../components/common/Button'
import LanguageContext from '../../context/language/LanguageContext'
import word from '../..//data/home.json'
// import Image from 'next/image'

const Home = () => {
  const { language } = useContext(LanguageContext)
  const texts = word[language]
  return (
    <div className={styles.main}>
      <div className={styles.section1}>
        <div className={styles.group1}>
          <Title size="xxl" color="primary">
            {texts.cheeseTitle}
          </Title>
          <Title size="lg">{texts.chessSubtitle}</Title>
          <Paragraph size="sm" line="loose">
            {texts.cheeseContent}
          </Paragraph>
          <Button color="primary" size="large">
            {texts.cheeseButton}
          </Button>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.group1}>
          <Title size="xl" color="primary">
            {texts.cheeseLovesTitle}
          </Title>
          {texts.cheeseLovesContent.map((item, index) => (
            <Paragraph size="sm" line="loose" key={index}>
              {item}
            </Paragraph>
          ))}
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.group2}>
          <Title size="xl" color="primary">
            {texts.mostPopularTitle}
          </Title>
          <Paragraph size="sm" line="loose">
            {texts.mostPopularContent}
          </Paragraph>
          <div className={styles.grid1}>
            <div className={styles.ticket1}>
              <Paragraph>Categoria</Paragraph>
              <Title>Queso Palmito</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at
                ipsa error iure vitae, sint nulla neque eum porro odit vel magni
                qui eaque minus tenetur fugit reprehenderit corporis ex.{' '}
              </Paragraph>
            </div>
            {/* <figure>
              <Image src={'/history.jpg'} width="250px" layout="fill"></Image>
            </figure> */}
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.group2}>
          <Title size="xl" color="primary">
            {texts.catalogeTitle}
          </Title>
          <Paragraph size="sm" line="loose">
            {texts.catalogeContent}
          </Paragraph>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.group2}>
          <Title size="xl" color="primary">
            {texts.recipesTitle}
          </Title>
          <Paragraph size="sm" line="loose">
            {texts.recipesContent}
          </Paragraph>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.group2}>
          <Title size="xl" color="primary">
            {texts.favoriteTitle}
          </Title>
          <Paragraph size="sm" line="loose">
            {texts.favoriteContent}
          </Paragraph>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.group2}>
          <Title size="xl" color="primary">
            {texts.tipsTitle}
          </Title>
          <Paragraph size="sm" line="loose">
            {texts.tipsContent}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default Home
