import Image from 'next/image'
import cn from 'classnames'

export default function PostIcon({ className, icon }) {
  return (
    <div className={cn('flex-shrink-0', className)}>
      <Image src={icon} width={48} height={48} />
    </div>
  )
}
