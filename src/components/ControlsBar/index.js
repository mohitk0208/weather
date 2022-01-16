import { useState } from "react";
import LocationButton from "./LocationButton";
import SearchBar from "./SearchBar";
import UnitSwitch from "./UnitSwitch";

function ControlsBar() {

  const [value, setValue] = useState("")

  return (
    <div className="w-full bg-black/90 px-5 py-2 flex justify-around items-center">
      <LocationButton setValue={setValue} />
      <SearchBar value={value} setValue={setValue} />
      <UnitSwitch />
    </div>
  )
}

export default ControlsBar;