import LocationButton from "./LocationButton";
import SearchBar from "./SearchBar";
import UnitSwitch from "./UnitSwitch";

function ControlsBar() {

  return (
    <div className="w-full bg-black/90 px-[10%] md:px-5 py-2 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
      <LocationButton className="col-start-1 col-end-2 md:col-start-1 md:col-end-2 justify-start md:justify-center" />
      <SearchBar className="col-start-1 col-end-3 row-start-2 row-end-3 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-1"/>
      <UnitSwitch className="col-start-2 col-end-3 md:col-start-4 md:col-end-5 justify-end md:justify-center" />
    </div>
  )
}

export default ControlsBar;