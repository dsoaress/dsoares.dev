import SEO from './seo'
import Fonts from './fonts'
import Header from './header'
import Footer from './footer'
import styles from '../styles/layout.module.scss'

const Layout = ({ children, title }) => (
  <div className={styles.wrapper}>
    <SEO title={title} />
    <Fonts />
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
