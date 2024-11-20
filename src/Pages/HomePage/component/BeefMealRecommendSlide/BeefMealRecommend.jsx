import React from 'react'
import { useBeefMealRecommendQuery } from '../../../../Hook/useBeefMeal';
import 'react-multi-carousel/lib/styles.css';
import MealSlider from '../../../../common/MealSlider/MealSlider';
import { responsive } from '../../../../constants/responsive';

const BeefMealRecommend = () => {
  const { data, isLoading, isError, error } = useBeefMealRecommendQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <MealSlider data={data} responsive={responsive} title="Beef Recipe" />
    </div>
  );
}

export default BeefMealRecommend
