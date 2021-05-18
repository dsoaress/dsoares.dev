import chrome from 'chrome-aws-lambda'
import { createHash } from 'crypto'
import fs from 'fs'

import seoData from '@/seo'

const isDev = process.env.NODE_ENV === 'development'
const { OG_IMAGE_URL } = process.env

export default async function getOgImage(path) {
  if (isDev) {
    return
  }

  const url = `${OG_IMAGE_URL}${path}`
  const hash = createHash('md5').update(url).digest('hex')
  const ogImageDir = `./public/images/og`
  const imagePath = `${ogImageDir}/${hash}.png`
  const publicPath = `https://${seoData.siteUrl}/images/og/${hash}.png`

  const browser = await chrome.puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: true
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 630 })
  await page.goto(url, { waitUntil: 'networkidle2' })
  const buffer = await page.screenshot({ type: 'png' })
  await browser.close()

  fs.mkdirSync(ogImageDir, { recursive: true })
  fs.writeFileSync(imagePath, buffer)

  return publicPath
}
