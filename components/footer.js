import Link from './link'
import styles from '../styles/footer.module.scss'
import { Heart } from '@emotion-icons/entypo/Heart'

const Footer = () => (
  <footer className={styles.wrapper}>
    <span className={styles.item}>
      Made with{' '}
      <Heart size="24" title="love" style={{ color: 'var(--highLight)' }} /> and{' '}
      <Link href="https://nextjs.org/" alt="Next.js" rel="">
        Next.js
      </Link>
    </span>
    <span className={styles.item}>Daniel Soares</span>
  </footer>
)

export default Footer
