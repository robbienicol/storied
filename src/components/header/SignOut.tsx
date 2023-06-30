import { useRouter } from "next/navigation"
import React from "react"

const SignOut = () => {
  const router = useRouter()
  const handleSignout = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    sessionStorage.setItem("authToken", "")
    setTimeout(() => {
      router.push("/")
    }, 1000) // Navigates to "/" after 1 second, I used this to simulate a login
  }

  return (
    <div className="absolute top-full right-8 bg-black rounded-md shadow-lg">
      <form onSubmit={handleSignout}>
        <ul className="py-1">
          <div className="text-center justify-center align-middle hover:bg-gray-700">
            <button
              type="submit"
              className="mt-2 mx-2 rounded-md px-2 py-2  text-white "
            >
              Sign out
            </button>
          </div>
        </ul>
      </form>
    </div>
  )
}

export default SignOut
