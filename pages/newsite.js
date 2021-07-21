import styles from '../styles/Home.module.css'
import Header from './parts/header'
import HomeBanner from './parts/home-banner'
import Nav from './parts/nav'
import HomeServices from './parts/home-services'
 
export default function Home() {

    return (
        <div>
            <Header />
            <Nav />
            <HomeBanner />
            <HomeServices />
        </div>
    )
}
