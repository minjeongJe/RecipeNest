import React, { useState, useEffect } from 'react';
import useRecipeRandom from '../../../../Hook/useRecipeRandom';
import { Alert } from 'react-bootstrap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.style.css';
import { Container } from 'react-bootstrap';

const Banner = () => {
  const { data, isLoading, isError, error } = useRecipeRandom();
  const [loading, setLoading] = useState(true);
  const [currentMealName, setCurrentMealName] = useState('');
  console.log("ddd",data);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setCurrentMealName(data[0].strMeal);
    }
  }, [data]);

  if (loading || isLoading) {
    return (
      <div className="loading-banner">
        <DotLottieReact
          src="https://lottie.host/b94ebbfc-8813-4cd4-adfc-4cbcfc881bc7/utP2m39gQx.json"
          loop
          autoplay
          className='loading-spinner'
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
    <Container className="banner">
      <div className='main-banner'>
        <h1 className='banner-title'>Experience a variety of recipes that delight both your eyes and taste buds</h1>
        <div className="carousel-container">
          <h2 className="meal-title">{currentMealName}</h2>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={(swiper) => {
              const currentIndex = swiper.realIndex;
              setCurrentMealName(data[currentIndex]?.strMeal);
            }}
          >
            {data && data.map((meal, index) => (
              <SwiperSlide key={index}>
                <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
