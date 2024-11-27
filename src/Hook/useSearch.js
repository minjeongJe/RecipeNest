import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchMealSearch = async ({ keyword }) => {
  if (!keyword) {
    // 검색어가 없으면 기본 레시피 데이터 요청
    const res = await api.get("search.php?s=");
    return { searchByName: res.data.meals }; // 기본 데이터 반환
  }

  // 검색어가 있으면 검색 요청 수행
  const searchByName = api.get(`search.php?s=${keyword}`);
  const searchByFirstLetter = api.get(`search.php?f=${keyword[0].toLowerCase()}`);

  return Promise.all([searchByName, searchByFirstLetter]).then(([nameRes, letterRes]) => ({
    searchByName: nameRes.data.meals || [], // 검색 결과
    searchByFirstLetter: letterRes.data.meals || [],
  }));
};

export const useMealSearchQuery = ({ keyword = "" }) => {
  return useQuery({
    queryKey: ["Meals-search", keyword],
    queryFn: () => fetchMealSearch({ keyword }),
    select: (result) => {
      // 검색 결과 처리
      return {
        searchByName: result.searchByName || [], // 기본 데이터 또는 검색 결과
        searchByFirstLetter: result.searchByFirstLetter || [], // 검색된 첫 글자 데이터
      };
    },
  });
};
