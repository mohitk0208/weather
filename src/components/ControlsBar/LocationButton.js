import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useWeather } from "../../context/weatherContext";

function LocationButton({ setValue, className}) {

  const { setCity } = useWeather()

  const locationHandler = async () => {
    setCity("LOCATION")
  }

  return (
    <div className={`flex items-center ${className} `}>
      <LocationMarkerIcon className={`h-6 w-6 sm:h-8 sm:w-8 text-white hover:shadow-sm hover:text-gray-200 transition-colors duration-200 ease-in-out cursor-pointer`} onClick={locationHandler} />
    </div>
  )
}

export default LocationButton