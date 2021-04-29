import { signIn } from 'next-auth/client'
import { AiOutlineGithub as GitHub } from 'react-icons/ai'

export default function Login() {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-8">
      <div className="space-y-8 text-center">
        <h1 className="text-3xl font-bold ">Hello, stranger 🖖</h1>
        <p>You need to be logged in</p>
        <div className="flex justify-center">
          <button
            className="flex items-center bg-green-600 hover:bg-green-700 transition-colors py-3 px-6 rounded-md"
            onClick={() => {
              signIn('github')
            }}
          >
            <GitHub className="mr-2" />
            GitHub
          </button>
        </div>
      </div>
    </div>
  )
}
