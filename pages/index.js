import styles from '../styles/Home.module.scss'
import React from 'react'
import Image from 'next/image'
import LogoImg from '../public/img/logo.png'

export default function Home() {

    return (
        <div className={styles.container}>
            <Image src={LogoImg} />
            <p className={styles.paragraph}>Estamos construindo a melhor experiência pra você!</p>
        </div>
    )
}
