import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchBeefMealRecommend = () => {
    return api.get(`filter.php?c=Beef`);
};

export const useBeefMealRecommendQuery = () => {
    return useQuery({
        queryKey: ['seafood-recipes'],
        queryFn: fetchBeefMealRecommend,
        select: (result) => result.data, 
    });
};
