import React from 'react';
import { Alert } from 'react-bootstrap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useVeGanMeal } from '../../../../Hook/useVeGanMeal';
import MealSlider from '../../../../common/MealSlider/MealSlider';
import { responsive } from '../../../../constants/responsive';

const VeGanMealSlider = () => {
  const { data, isLoading, isError, error } = useVeGanMeal();

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
    <div>
      <MealSlider data={data} responsive={responsive} title="VeGan Recipe" />
    </div>
  );
};

export default VeGanMealSlider;
