"use client"
import React from "react"
import { ChromePicker } from "react-color"
import Settings from "./Settings"
import Login from "./Login"
import Image from "next/image"
import SignOut from "./SignOut"

const logoUrl = "https://www.storiedinc.com/wp-content/uploads/2018/10/logo.svg"

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false)
  const [isLoginOpen, setIsLoginOpen] = React.useState<boolean>(false)
  const [selectedColor, setSelectedColor] = React.useState<string>("#000000")
  const [isSignoutOpen, setIsSignoutOpen] = React.useState<boolean>(false)
  const [loginToken, setLoginToken] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")

  const [isColorPickerOpen, setIsColorPickerOpen] =
    React.useState<boolean>(false)

  // Fetching the auth token, basically checking if the user is logged in
  React.useEffect(() => {
    const authToken = sessionStorage.getItem("authToken")
    if (authToken?.length) {
      setLoginToken(authToken)
    }
  }, [])

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen)
    setIsLoginOpen(false)
    setIsSignoutOpen(false)
  }

  const handleLoginClick = () => {
    setIsLoginOpen(!isLoginOpen)
    setIsSettingsOpen(false)
  }
  const handleSignoutClick = () => {
    setIsSignoutOpen(!isSignoutOpen)
    setIsSettingsOpen(false)
  }

  const handleColorChange = (color: { hex: React.SetStateAction<string> }) => {
    setSelectedColor(color.hex)
  }
  return (
    <div>
      <header
        className="flex justify-between items-center p-1"
        style={{ backgroundColor: selectedColor }}
      >
        <Image
          priority
          src={logoUrl}
          alt="Storied Logo"
          width={160}
          height={80}
        />

        <div className="relative">
          <button
            className="px-2 mr-3 py-2 border border-white rounded-md hover:bg-gray-700 text-white"
            onClick={handleSettingsClick}
          >
            Settings
          </button>
          {loginToken === "winner" ? (
            <button
              className="px-2 mr-3 py-2 border border-white rounded-md hover:bg-gray-700 text-white"
              onClick={handleSignoutClick}
            >
              hello@hi.com
            </button>
          ) : (
            <button
              className="px-2 mr-3 py-2 border border-white rounded-md hover:bg-gray-700 text-white"
              onClick={handleLoginClick}
            >
              Login
            </button>
          )}
          {isSettingsOpen && (
            <Settings
              isColorPickerOpen={isColorPickerOpen}
              setIsColorPickerOpen={setIsColorPickerOpen}
              setIsSettingsOpen={setIsSettingsOpen}
            />
          )}
          {isLoginOpen && <Login email={email} setEmail={setEmail} />}
          {isSignoutOpen && <SignOut />}
        </div>
      </header>
      {isColorPickerOpen && (
        <div className="flex justify-center">
          <ChromePicker color={selectedColor} onChange={handleColorChange} />
        </div>
      )}
    </div>
  )
}

export default Header
