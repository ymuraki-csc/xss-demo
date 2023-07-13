import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const redirectTo = router.query.redirect_to ?? '/'
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  return (
    <form
      action={redirectTo}
      onSubmit={() => {
        localStorage.setItem('username', username)
      }}
    >
      <input
        aria-label="username"
        type="text"
        onChange={(e) => setUsername(e.currentTarget.value)}
        placeholder="username"
        required={true}
        className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
      />
      <input
        aria-label="password"
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
        placeholder="password"
        required={true}
        className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
      />
      <button
        className={
          'w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black'
        }
      >
        Login
      </button>
    </form>
  )
}
