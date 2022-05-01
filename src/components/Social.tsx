import { Icon } from '@/components/Icon'
import { Link } from '@/components/Link'
import { useData } from '@/hooks/useData'

export function Social() {
  const { c } = useData()

  return (
    <div className="mx-auto">
      <ul className="flex list-none flex-wrap justify-center gap-6">
        {c.social.map(({ label, url }) => (
          <li className="transform transition-transform hover:scale-110 active:scale-95" key={url}>
            <Link
              href={url}
              aria-label={label}
              className={`umami--click--${label} text-neutral-50`}
              external
            >
              <Icon variant={label} size={22} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
