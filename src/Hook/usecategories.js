import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchCategories = () => {
    return api.get(`/categories.php`)
}

export const useCategoriesQuery = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
        select: (result) => result. data, 
    })
}