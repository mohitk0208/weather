import { SearchIcon } from "@heroicons/react/solid"
import { useRef } from "react"
import { useWeather } from "../../context/weatherContext"

function SearchBar({ value, setValue }) {

  const { setResetHandler, getWeather, unit } = useWeather()
  const inputRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault()
    inputRef.current.blur();
    setResetHandler(true);
    await getWeather(value, unit);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        ref={inputRef}
        className="block px-2 py-1 bg-transparent border-b border-b-transparent focus:border-b-white w-100 outline-none text-white text-center scale-110 focus:scale-100 transition-all duration-200 ease-in-out "
      />
      <button type="submit" className="mx-auto outline-none focus:scale-110 hover:scale-110 transition-all duration-200 ease-in-out opacity-50 focus:opacity-100 text-white hover:opacity-100 hover:shadow-sm " >
        <SearchIcon className="w-8 h-8 p-1" />
      </button>
    </form>
  )

}

export default SearchBar