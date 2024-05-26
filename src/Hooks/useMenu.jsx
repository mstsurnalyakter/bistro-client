import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenu = () => {

    const {data:menu=[],refetch,isLoading} = useQuery({
        queryKey:['menu'],
        queryFn: async () =>{
            const {data} = await axios.get("/menu.json");
            return data;
        }
    })

    return {menu,refetch,isLoading}
};

export default useMenu;
