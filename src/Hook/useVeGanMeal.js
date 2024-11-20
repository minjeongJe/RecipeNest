import { api } from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchVeGanMeal = () => {
    return api.get(`filter.php?c=Vegan`);
}

export const useVeGanMeal = () => {
  return useQuery({
    queryKey:['vegan-recipes'],
    queryFn: fetchVeGanMeal,
    select: (result) => result.data, 
  })
}




