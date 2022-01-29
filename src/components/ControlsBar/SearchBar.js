import { SearchIcon } from "@heroicons/react/solid"
import { useEffect, useRef, useState } from "react"
import { useWeather } from "../../context/weatherContext"

function SearchBar({ className }) {

  const { city, setCity } = useWeather()
  const inputRef = useRef()
  const [value, setValue] = useState(city || "")

  async function handleSubmit(e) {
    e.preventDefault()
    inputRef.current.blur();
    setCity(value)
  }

  useEffect(() => {
    setValue(city)
  }, [city])

  return (
    <form onSubmit={handleSubmit} className={`flex justify-center items-center gap-2 ${className}`}>
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        ref={inputRef}
        className={`block flex-1 px-2 py-1 bg-transparent border-b border-b-transparent focus:border-b-white w-100 outline-none text-white text-center scale-110 focus:scale-100 transition-all duration-200 ease-in-out`}
      />
      <button type="submit" className="mx-auto outline-none focus:scale-110 hover:scale-110 transition-all duration-200 ease-in-out opacity-50 focus:opacity-100 text-white hover:opacity-100 hover:shadow-sm " >
        <SearchIcon className="w-7 sm:w-8 h-7 sm:h-8 p-1" />
      </button>
    </form>
  )

}

export default SearchBar