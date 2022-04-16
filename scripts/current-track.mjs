import Prisma from '@prisma/client'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration.js'
import { readFileSync } from 'node:fs'
import { runAppleScript } from 'run-applescript'

const prisma = new Prisma.PrismaClient()

async function getCurrentTrack() {
  const script = readFileSync('scripts/current-track.scpt', 'utf8')
  const data = await runAppleScript(script)

  dayjs.extend(duration)

  if (data) {
    const [title, artist, album, rawDuration] = data.split(';;')
    const duration = dayjs.duration(parseInt(rawDuration), 'seconds').format('mm:ss').toString()
    return { title, artist, album, duration }
  }
}

async function setCurrentTrack() {
  setInterval(async () => {
    const data = await getCurrentTrack()
    if (data) await prisma.track.create({ data })
  }, 1000 * 30)
}

setCurrentTrack()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => await prisma.$disconnect())
