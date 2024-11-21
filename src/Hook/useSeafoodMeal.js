import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchSeafoodMeal = () => {
    return api.get('filter.php?c=Seafood')
}

export const useSeafoodQuery = () => {
    return useQuery({
        queryKey: ['Seafood-recipe'],
        queryFn: fetchSeafoodMeal,
        select: (result) => result.data,
    })
}


