'use client'

import { FiMail } from 'react-icons/fi'

import { Block } from './block'

export function EmailList() {
  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3 text-lg">Join my mailing list</p>
      <form onSubmit={e => e.preventDefault()} className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded border border-neutral-700 bg-neutral-800 px-3 py-1.5 transition-colors focus:border-primary-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-300"
        >
          <FiMail /> Join
        </button>
      </form>
    </Block>
  )
}
