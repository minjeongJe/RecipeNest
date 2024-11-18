// import { useQuery } from "@tanstack/react-query";
// import { api } from "../utils/api";

// const fetchSearch = () => {
//     return api.get(`search.php?s=${id}`)
// }

// export const useSearchQuery = () => {
//     return useQuery({
//         queryKey: ['Search'],
//         queryFn: fetchSearch,
//         select: (result) => result. data, 
//     })
// }

import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchMealsSearch = (keyword) => {
  // 첫 번째 요청: 이름으로 검색 (예: Arrabiata)
  const searchByName = api.get(`search.php?s=${keyword}`);
  // 두 번째 요청: 첫 글자로 검색 (예: 'a')
  const searchByFirstLetter = api.get(`search.php?f=${keyword[0].toLowerCase()}`);

  return Promise.all([searchByName, searchByFirstLetter]);
};

export const useMealsQuery = ({keyword}) => {
  return useQuery({
    queryKey: ['Meals-search', keyword],
    queryFn: () => fetchMealsSearch(keyword),
    select: (result) => {
      const [searchByNameData, searchByFirstLetterData] = result;
      return {
        searchByName: searchByNameData.data,
        searchByFirstLetter: searchByFirstLetterData.data,
      };
    },
  });
};
