import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useMenu = () => {

    const axiosCommon = useAxiosCommon()

    const {data:menu=[],refetch,isLoading} = useQuery({
        queryKey:['menu'],
        queryFn: async () =>{
            const {data} = await axiosCommon.get("/menu.json");
            return data;
        }
    })

    return {menu,refetch,isLoading}
};

export default useMenu;
