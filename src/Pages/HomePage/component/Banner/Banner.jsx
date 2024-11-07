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
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const { data, isLoading, isError, error } = useRecipeRandom();
  console.log("bbb",data);
  const [currentMealName, setCurrentMealName] = useState('');
  const [currentMealId, setCurrentMealId] = useState('');
  const navigate = useNavigate();

  // 특정 id로 디테일 페이지로 이동하는 함수
  const goToDetailPage = (id) => {
    navigate(`/recipe/${id}`);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setCurrentMealName(data[0].strMeal);
      setCurrentMealId(data[0].idMeal);
    }
  }, [data]);

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
    <Container className="banner">
      {/* main-banner 클릭 시 현재 음식 ID로 디테일 페이지 이동 */}
      <div className='main-banner' onClick={() => goToDetailPage(currentMealId)}>
        <h1 className='banner-title'>Experience a variety of recipes that delight both your eyes and taste buds</h1>
        <div className="carousel-container">
          <h2 className="meal-title" onClick={(e) => {
            e.stopPropagation(); // 부모 div의 onClick 이벤트 방지
            goToDetailPage(currentMealId);
          }}>
            {currentMealName}
          </h2>
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
              setCurrentMealId(data[currentIndex]?.idMeal);
            }}
          >
            {data && data.map((meal) => (
              <SwiperSlide key={meal.idMeal}>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="meal-image"
                  onClick={(e) => {
                    e.stopPropagation(); // 부모 div의 onClick 이벤트 방지
                    goToDetailPage(meal.idMeal);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
