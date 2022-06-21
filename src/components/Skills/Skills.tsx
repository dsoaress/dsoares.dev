import { Icon } from '@/components/Icon'
import { Tooltip } from '@/components/Tooltip'
import { useData } from '@/hooks/useData'

export function Skills() {
  const { c } = useData()

  return (
    <div className="mx-auto">
      <ul className="flex list-none flex-wrap justify-center gap-6 text-neutral-700 transition-colors duration-300 dark:text-neutral-200">
        {c.skills?.map(label => (
          <li key={label}>
            <Tooltip content={label}>
              <Icon variant={label} size={18} aria-label={label} />
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  )
}
