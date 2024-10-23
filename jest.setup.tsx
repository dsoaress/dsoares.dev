import '@testing-library/jest-dom'

import type { ImgHTMLAttributes } from 'react'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
    // biome-ignore lint/nursery/noImgElement: this is a mock
    return <img {...props} src={src} alt={alt} />
  }
}))
