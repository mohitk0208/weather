import { useWeather } from "../../context/weatherContext"

function UnitSwitch({className}) {

  const { unit, setUnit } = useWeather()

  return (
    <div className={`flex items-center ${className} `} >
      <input
        type="checkbox"
        id="unit-choice"
        checked={unit}
        onChange={(e) => setUnit(e.target.checked)}
        hidden
        className="hidden"
      />
      <label htmlFor="unit-choice"
        className={`w-16 h-8 sm:w-20 sm:h-9 bg-black/40 rounded-md flex justify-between items-center text-base sm:text-xl px-2 text-green-400 relative after:w-7 after:h-6 sm:after:w-8 sm:after:h-7 after:absolute after:bg-white after:transition-transform duration-200 ease-in-out after:rounded-sm ${unit === true ? "after:translate-x-0 " : "after:translate-x-[100%]"}`} >
        <div className={``} >
          &deg;F
        </div>

        <div className={``}>
          &deg;C
        </div>
      </label>
    </div>

  )
}

export default UnitSwitch