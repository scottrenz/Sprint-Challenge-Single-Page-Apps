import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useCharPage () {
    const [charPage, setCharPage] = useLocalStorage('charPageCount')
    useEffect(() => {
            }, [charPage]);

            return [charPage,setCharPage]
  }
  export default useCharPage;
