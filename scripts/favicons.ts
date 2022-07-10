import { existsSync, mkdirSync } from 'node:fs'
// import { request } from 'node:https'
import { join } from 'node:path'
// import sharp from 'sharp'

export async function favicons({
  favicon,
  faviconSizes
}: {
  favicon: string
  faviconSizes: number[]
}) {
  const publicDir = join(__dirname, '..', 'public')
  const faviconsDir = join(publicDir, 'favicons')

  if (!existsSync(faviconsDir)) mkdirSync(faviconsDir)

  return { favicon, faviconSizes }

  // faviconSizes.forEach(size => {
  //   request(favicon, res => {
  //     res.pipe(
  //       sharp()
  //         .resize(size, size)
  //         .toFile(`${faviconsDir}/favicon-${size}.png`, (err, info) => {
  //           console.log('err: ', err)
  //           console.log('info: ', info)
  //         })
  //     )
  //   })
  // })
}
