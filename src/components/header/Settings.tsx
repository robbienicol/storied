import React from "react"

interface ISettings {
  isColorPickerOpen: boolean
  setIsColorPickerOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface AudioDevice {
  deviceId: string
  kind: string
  label: string
}

const Settings = ({
  isColorPickerOpen,
  setIsColorPickerOpen,
  setIsSettingsOpen,
}: ISettings) => {
  const [inputDevices, setInputDevices] = React.useState<AudioDevice[]>([])
  const [isAudioDeviceOpen, setIsAudioDeviceOpen] =
    React.useState<boolean>(false)
  const [selectedDevice, setSelectedDevice] = React.useState<string>("")

  // Audio Functionality
  const handleAudioDeviceOptionClick = () => {
    setIsAudioDeviceOpen(!isAudioDeviceOpen)
  }

  React.useEffect(() => {
    // Fetch available audio input devices
    const fetchInputDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        const audioInputDevices = devices.filter(
          (device) => device.kind === "audioinput"
        )
        setInputDevices(audioInputDevices)
      } catch (error) {
        console.error("Error fetching audio input devices:", error)
      }
    }
    fetchInputDevices()
  }, [])

  // Note: I am fetching the audio output devices, but if i want to actually implement this, i need to hit an audio library API
  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const deviceId = event.target.value
    setSelectedDevice(deviceId)
  }

  // Color Functionality
  const handleColorPickerOptionClick = () => {
    setIsColorPickerOpen(!isColorPickerOpen)
  }
  const closeColorPicker = () => {
    setIsColorPickerOpen(false)
    setIsSettingsOpen(false)
  }
  return (
    <div className="absolute top-full right-0 mt-2 bg-black rounded-md shadow-lg">
      <ul className="py-0">
        <li
          className="px-4 py-2 hover:bg-gray-700"
          onClick={handleAudioDeviceOptionClick}
        >
          Audio Input Device
        </li>
        {isAudioDeviceOpen && (
          <li className="px-4 py-2">
            <select
              value={selectedDevice}
              className="text-black"
              onChange={handleDeviceChange}
            >
              {inputDevices.map((device) => (
                <option key={device.deviceId} value={device.deviceId}>
                  {device.label || `Device ${device.deviceId}`}
                </option>
              ))}
            </select>
          </li>
        )}
        {isColorPickerOpen ? (
          <li
            className="px-4 py-2 hover:bg-green-500 bg-green-700"
            onClick={closeColorPicker}
          >
            All Done?
          </li>
        ) : (
          <li
            className="px-4 py-2 hover:bg-gray-700"
            onClick={handleColorPickerOptionClick}
          >
            Color Picker
          </li>
        )}
      </ul>
    </div>
  )
}

export default Settings
