import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MealCard from '../MealCard/MealCard';
import { responsive } from '../../constants/responsive';
import { Container } from 'react-bootstrap';


// 응답형 설정 정의

const mealSlider = ({ data, title }) => {
  // 데이터가 없는 경우 예외 처리
  if (!data || !data.meals) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.meals.map((meal) => (
          <MealCard meal={meal} key={meal.idMeal} />
        ))}
      </Carousel>
    </Container>
  );
};

export default mealSlider;
