import Icons from '@/components/Icons'
import Link from '@/components/Link'
import socialData from '@/content/social.json'

export default function Social() {
  return (
    <ul className="inline-flex mx-auto space-x-4">
      {socialData.map(({ label, url }) => {
        const Icon = Icons[label]
        return (
          <li key={url}>
            <Link href={url} aria-label={label} rel="noopener noreferrer" target="_blank">
              <Icon size={22} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
