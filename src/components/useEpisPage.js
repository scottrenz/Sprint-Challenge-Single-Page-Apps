import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useEpisPage () {
    const [episPage, setEpisPage] = useLocalStorage('episPageCount')
    useEffect(() => {
            }, [episPage]);

            return [episPage,setEpisPage]
  }
  export default useEpisPage;
