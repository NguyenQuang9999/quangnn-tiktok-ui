import { useEffect, useState } from "react";

function useDebounce(value,delay) {
    const [deboucedValue,setDebouncedValue] = useState(value)
    useEffect(() => {
        const handle = setTimeout(() => setDebouncedValue(value),delay)
        return () => clearTimeout(handle)
    },[value])
    return deboucedValue
}

export default useDebounce;