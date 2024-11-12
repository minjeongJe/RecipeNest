import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchMultipleRandomMeals = async () => {
  const fetchedMeals = [];
  for (let i = 0; i < 5; i++) {
    const response = await api.get('/random.php');
    fetchedMeals.push(response.data.meals[0]);
  }
  return fetchedMeals;
};

const useRecipeRandom = () => {
  return useQuery({
    queryKey: ['randomRecipes'],
    queryFn: fetchMultipleRandomMeals,
    select: (data) => data, 
  });
};

export default useRecipeRandom;
