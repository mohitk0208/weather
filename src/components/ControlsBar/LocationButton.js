import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useWeather } from "../../context/weatherContext";

function LocationButton({ setValue }) {

  const { setResetHandler, getWeatherByLocation } = useWeather()

  const locationHandler = async () => {
    setResetHandler(true);
    setValue("LOCATION")
    await getWeatherByLocation()
    setResetHandler(false)
  }

  return (
    <div>
      <LocationMarkerIcon className="h-8 w-8 text-white hover:shadow-sm hover:text-gray-200 transition-colors duration-200 ease-in-out cursor-pointer " onClick={locationHandler} />
    </div>
  )
}

export default LocationButton