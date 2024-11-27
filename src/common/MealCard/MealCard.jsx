import React from 'react';
import './MealCard.style.css';
import { useNavigate } from 'react-router-dom';

const MealCard = ({ meal }) => {
  const navigate = useNavigate();

  // 디테일 페이지로 이동
  const goToDetailPage = (id) => {
    navigate(`/recipe/${id}`)
  }

  return (
    <div
      style={{
        backgroundImage: `url(${meal.strMealThumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='mealCard-container'
      onClick={() => goToDetailPage(meal.idMeal)}
    >
      <div className='mealCard-items'>
        <div>00</div>
        <h1 className='beef-recipe-title'>{meal.strMeal}</h1>
      </div>
    </div>
  );
};

export default MealCard;





