import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchRecipeDetail = (id) => {
    return api.get(`/lookup.php?i=${id}`);
}

export const useRecipeDetailQuery = (id) => {
    return useQuery({
        queryKey: ['recipe-detail', id],
        queryFn: () => fetchRecipeDetail(id),
        select: (result) => result.data,
    })
}



