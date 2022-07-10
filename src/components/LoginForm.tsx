import { useState } from 'react'

import { supabase } from '@/services/supabase'

export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="absolute inset-0 flex h-screen w-screen items-center justify-center">
      <div className="">
        <div className="w-32">
          <h1 className="header">Supabase + Next.js</h1>
          <p className="description">Sign in via magic link with your email below</p>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={e => {
                e.preventDefault()
                handleLogin(email)
              }}
              className="button block"
              disabled={loading}
            >
              <span>{loading ? 'Loading' : 'Send magic link'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
