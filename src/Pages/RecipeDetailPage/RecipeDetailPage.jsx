import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeDetailQuery } from '../../Hook/useRecipeDetail';
import { Alert, Container } from 'react-bootstrap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import YouTube from 'react-youtube';
import './RecipeDetailPage.style.css';

const MAX_LENGTH = 350; 

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useRecipeDetailQuery(id);
  const [isShowText, setIsShowText] = useState(false); 

  const onClickMoreDesc = () => {
    setIsShowText((prevState) => !prevState);
  };

  // Loading 상태 표시
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

  // Error 상태 표시
  if (isError) {
    return (
      <Alert variant="danger" className="error-alert">
        {error.message}
      </Alert>
    );
  }

  const meal = data?.meals?.[0];
  if (!meal) {
    return <Alert variant="warning">No recipe data available.</Alert>;
  }

  // 재료 목록 배열 생성
  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ingredient && measure ? `${ingredient} (${measure})` : null;
  }).filter(Boolean);

  // YouTube 비디오 ID 추출
  const videoId = meal.strYoutube?.split('v=')[1];

  return (
    <Container className="recipe-detail">
      <h2 className="recipe-title">{meal.strMeal}</h2>

      {/* 메인 레시피 영역 */}
      <div className="recipe-detail-area">
        
        {/* 이미지 및 기본 정보 */}
        <div className="recipe-items-area">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-img" />
          <div className="recipe-items">
            <p><span>Category:</span> {meal.strCategory}</p>
            <p><span>Area:</span> {meal.strArea}</p>

            {/* 재료 목록 */}
            <h3>Ingredients</h3>
            <ul className="recipe-ingredients">
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}
                  {index < ingredients.length - 1 && ' , '}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 레시피 설명 */}
        <div className="recipe-instructions-area">
          <h3>Instructions</h3>
          <div className="instructions">
            <p>
              {meal.strInstructions.length > MAX_LENGTH && !isShowText
                ? `${meal.strInstructions.slice(0, MAX_LENGTH)}...`
                : meal.strInstructions}
              {meal.strInstructions.length > MAX_LENGTH && (
                <button onClick={onClickMoreDesc} className="more-button">
                  {isShowText ? '접기' : '더보기'}
                </button>
              )}
            </p>
          </div>
        </div>

        {/* 출처 링크 */}
        {meal.strSource && (
          <p className='recipe-source'>
            Source: <a href={meal.strSource} target="_blank" rel="noopener noreferrer" className='recipe-source-name'>Visit Recipe Source</a>
          </p>
        )}

        {/* YouTube 비디오 */}
        <div className='youtube-container'>
          <h4 className='youtube-title'>Watch on YouTube</h4>
          {videoId && (
          <div className="youtube-wrapper">
            <YouTube
              videoId={videoId}
              className="youtube-iframe"
              opts={{
                playerVars: { rel: 0 },
              }}
            />
          </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RecipeDetailPage;
