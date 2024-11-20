import React from 'react'
import { useBeefMealRecommendQuery } from '../../../../Hook/useBeefMeal';
import 'react-multi-carousel/lib/styles.css';
import MealSlider from '../../../../common/MealSlider/MealSlider';
import { responsive } from '../../../../constants/responsive';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Alert } from 'react-bootstrap';
import './BeefMealSlide.style.css';

const BeefMealRecommend = () => {
  const { data, isLoading, isError, error } = useBeefMealRecommendQuery();

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
    <div className='beef-recipe'>
      <MealSlider data={data} responsive={responsive} title="Beef Recipe" />
    </div>
  );
}

export default BeefMealRecommend
