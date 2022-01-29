import { useCallback, useState } from "react"
import { getQueryStringValue, setQueryStringValue } from "../utils/functions"


export const useQueryString = (key, initialValue) => {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue)


  const onSetValue = useCallback(newValue => {
    setValue(newValue)
    setQueryStringValue(key, newValue)
  }, [key])


  return [value, onSetValue]

}
