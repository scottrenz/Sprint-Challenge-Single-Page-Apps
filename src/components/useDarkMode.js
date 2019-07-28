import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useDarkMode () {
    const [darkValue, setDarkValue] = useLocalStorage('pageCount')
    useEffect(() => {
            }, [darkValue]);

            return [darkValue,setDarkValue]
  }
  export default useDarkMode;
