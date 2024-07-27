import { cn } from '@/lib/utils'

type Props = {
  size: number
  className?: string
}

export function Logo({ size, className }: Readonly<Props>) {
  return (
    <svg
      viewBox="0 0 375 548"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      width={size}
      height={size}
      className={cn('fill-current', className)}
    >
      <path d="M274.023 527.357L19.241 434.973V190.092l210.81-81.362a9.607 9.607 0 006.153-8.97V46.448l54.108-22.495v363.6l-56.103-20.487V174.298c0-3.168-1.57-6.14-4.185-7.933a9.565 9.565 0 00-8.91-1.03L84.926 218.153a9.618 9.618 0 00-6.14 8.97l.072 179.678a9.634 9.634 0 006.388 9.053l251.275 89.634-62.498 21.87zm-59.05-167.3l-43.21-15.767-.117-57.974 43.327-15.807v89.549zM355.776 491.93l-257.69-91.915-.065-166.315 116.946-45.362-.033 61.716-56.207 20.507a9.616 9.616 0 00-6.323 9.054l.15 71.421a9.617 9.617 0 006.316 9.015l137.759 50.276c.743.267 1.499.437 2.262.521a9.622 9.622 0 006.55-1.675 9.62 9.62 0 004.1-7.88V24.22l46.235 20.122V491.93zm19.23-453.885a9.614 9.614 0 00-5.783-8.82L303.766.736c-.104-.047-.221-.06-.326-.099-.384-.15-.775-.24-1.173-.339-.365-.097-.73-.202-1.102-.247-.404-.052-.801-.046-1.205-.046-.378 0-.75-.013-1.122.026-.41.046-.801.157-1.199.254-.365.085-.73.163-1.082.3-.11.033-.215.04-.32.085L222.9 31.149a9.616 9.616 0 00-5.925 8.878V93.17L6.158 174.526a9.62 9.62 0 00-6.153 8.97v258.217a9.62 9.62 0 006.343 9.04L270.686 546.6a9.623 9.623 0 003.278.574 9.671 9.671 0 003.181-.535l91.42-31.985c.45-.163.821-.45 1.239-.671.371-.19.775-.313 1.127-.555.046-.032.078-.078.13-.117.183-.137.333-.306.503-.456a9.948 9.948 0 001.394-1.428c.183-.234.333-.482.49-.73a8.814 8.814 0 00.834-1.662c.104-.26.221-.508.3-.782a9.55 9.55 0 00.404-2.549c0-.032.02-.065.02-.098 0-.006-.007-.013-.007-.013 0-.006.006-.013.006-.02V38.046z" />
    </svg>
  )
}
