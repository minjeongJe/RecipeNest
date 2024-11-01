import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

// Fetch multiple random recipes
const fetchMultipleRandomMeals = async () => {
  const fetchedMeals = [];
  for (let i = 0; i < 5; i++) {
    const response = await api.get('/random.php');
    fetchedMeals.push(response.data.meals[0]);
  }
  return fetchedMeals;
};

// Custom hook using React Query to fetch the random meals
const useRecipeRandom = () => {
  return useQuery({
    queryKey: ['randomRecipes'],
    queryFn: fetchMultipleRandomMeals,
    select: (data) => data, 
  });
};

export default useRecipeRandom;
