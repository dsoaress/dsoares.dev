import Icons from './social-icons'
import * as data from '../config.json'
import styles from '../styles/social.module.scss'

const Social = () => (
  <div>
    <ul className={styles.list}>
      {data.socialLinks.map((social, i) => {
        const Icon = Icons[social.label]

        return (
          <li className={styles.item} key={i}>
            {social.url && (
              <a
                className={styles.link}
                href={social.url}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={styles.iconWrapper} title={social.label} />
              </a>
            )}
          </li>
        )
      })}
    </ul>
  </div>
)

export default Social
