import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useListPage () {
    const [listPage, setListPage] = useLocalStorage('listPageCount')
    useEffect(() => {
            }, [listPage]);

            return [listPage,setListPage]
  }
  export default useListPage;
