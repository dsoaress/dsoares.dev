import { signOut } from 'next-auth/client'

export default function Admin() {
  return (
    <>
      <h1>Admin</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
