import { useRouter } from "next/navigation"
import React, { SetStateAction } from "react"

interface IEmailTypes {
  email: string
  setEmail: React.Dispatch<SetStateAction<string>>
}

const Login = ({ email, setEmail }: IEmailTypes) => {
  // FIX: tell chatgpt to add formik

  const router = useRouter()
  const [password, setPassword] = React.useState<string>("")

  const passwordInput = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setPassword(e.target.value)
  }

  const emailInput = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    // If the creds are correct I am getting the token and taking you to /Home.
    if (email === "hello@hi.com" && password === "password") {
      sessionStorage.setItem("authToken", "winner")
      e.preventDefault()
      setTimeout(() => {
        router.push("/Home")
      }, 1000) // Navigates to "/Home" after 1 second, I used this to simulate a login
    } else {
      // FIX: ADD AN ERROR TOAST
    }
  }

  return (
    <div className="absolute top-full right-0 mt-2 bg-black rounded-md shadow-lg">
      <form onSubmit={handleSubmit}>
        <ul className="py-1">
          <li className="px-4 py-2">Email</li>
          <div className="justify-between items-center">
            <input
              value={email}
              onChange={emailInput}
              className="border border-gray-300 rounded-md mx-2 text-black"
              type="email"
            />
          </div>
          <li className="px-4 py-2">Password</li>
          <input
            value={password}
            onChange={passwordInput}
            className="border border-gray-300 rounded-md mx-2 text-black"
            type="password"
          />
          <div className="text-center">
            <button
              type="submit"
              className="mt-2 mx-2 rounded-md px-2 py-2 hover:bg-gray-700"
            >
              Login
            </button>
          </div>
        </ul>
      </form>
    </div>
  )
}

export default Login
