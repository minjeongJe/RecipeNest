import React from 'react'
import { useSeafoodQuery } from '../../../../Hook/useSeafoodMeal';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Alert } from 'react-bootstrap';
import { responsive } from '../../../../constants/responsive';
import MealSlider from '../../../../common/MealSlider/MealSlider';


const SeafoodMealSlide = () => {
  const {data, isLoading, isError, error} = useSeafoodQuery();

  if (isLoading) {
    return (
      <div className="loading-banner">
        <DotLottieReact
          src="https://lottie.host/b94ebbfc-8813-4cd4-adfc-4cbcfc881bc7/utP2m39gQx.json"
          loop
          autoplay
          className="loading-spinner"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="danger">
        {error.message}
      </Alert>
    );
  }

  return (
    <div className='seafood-recipe'>
      <MealSlider data={data} responsive={responsive} title="seafood Recipe" />
    </div>
  )
}

export default SeafoodMealSlide
