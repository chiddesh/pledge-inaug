import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  const launchTime = new Date(2026, 3, 18, 10, 10, 0)

  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const diff = launchTime - now

      if (diff <= 0) {
        clearInterval(timer)
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" })
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setTimeLeft({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      })

    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleInaugurate = () => {
    localStorage.setItem("inaugurated", "true")
    window.open("https://www.ranipetpledge.in/", "_blank", "noopener,noreferrer")
  }

  const isLocked =
    timeLeft.hours !== "00" ||
    timeLeft.minutes !== "00" ||
    timeLeft.seconds !== "00"

  console.log(new Date())
  console.log(launchTime)

  return (
    <div className='flex flex-col bg-neutral-100 min-h-screen'>

      <NavBar />

      <div className='flex flex-1 items-center justify-center p-4 sm:p-6'>

        <div className='w-full max-w-[900px] bg-white rounded-3xl shadow 
                        flex flex-col gap-6 sm:gap-8 items-center justify-center 
                        p-6 sm:p-10 text-center'>

          <h2 className='text-2xl text-orange-600 sm:text-4xl lg:text-5xl font-bold leading-tight'>
            இணையதளம் துவக்க விழா
          </h2>

          <p className='text-sm sm:text-base text-gray-800 leading-relaxed font-bold'>
            மாவட்ட ஆட்சித்தலைவர் அவர்களால் திறந்து வைக்கப்படுகிறது
            <br className='hidden sm:block' />
            <span className='text-gray-800'>
              Inaugurated by the District Collector
            </span>
          </p>

          <div className='flex items-center justify-center gap-4 sm:gap-6'>

            <div className='text-center'>
              <p className='text-3xl sm:text-5xl font-bold'>{timeLeft.hours}</p>
              <p className='text-xs text-gray-500'>HOURS</p>
            </div>

            <p className='text-2xl font-bold text-gray-400'>:</p>

            <div className='text-center'>
              <p className='text-3xl sm:text-5xl font-bold'>{timeLeft.minutes}</p>
              <p className='text-xs text-gray-500'>MINS</p>
            </div>

            <p className='text-2xl font-bold text-gray-400'>:</p>

            <div className='text-center'>
              <p className='text-3xl sm:text-5xl font-bold'>{timeLeft.seconds}</p>
              <p className='text-xs text-gray-500'>SECS</p>
            </div>

          </div>

          <button
            onClick={handleInaugurate}
            disabled={isLocked}
            className='mt-4 px-6 sm:px-8 py-3 rounded-full 
                       bg-orange-600 text-gray-700 
                       hover:bg-orange-700 transition 
                       text-sm sm:text-base 
                       disabled:opacity-50 disabled:cursor-not-allowed'
          >
            துவக்கம் / Inaugurate
          </button>

          <p className='text-xs text-gray-400 italic'>
            The inauguration ceremony is scheduled to begin shortly.
          </p>

        </div>

      </div>
    </div>
  )
}

export default App