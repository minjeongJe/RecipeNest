import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeDetailQuery } from '../../Hook/useRecipeDetail';
import { Alert, Container } from 'react-bootstrap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './RecipeDetailPage.style.css';
import YouTube from 'react-youtube';

const RecipeDetailPage = () => {
  const { id } = useParams(); 
  const { data, isLoading, isError, error } = useRecipeDetailQuery(id);

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
      <Alert variant="danger" className='error-alert'>
        {error.message}
      </Alert>
    );
  }

  const meal = data?.meals?.[0];
  if (!meal) {
    return <Alert variant="warning">No recipe data available.</Alert>;
  }

  // Ingredients와 Measures 배열을 결합하기
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient !== "" && measure && measure !== "") {
      ingredients.push(`${ingredient} (${measure})`);
    }
  }

   {/* YouTube 비디오 ID 추출 */}
   const videoId = meal.strYoutube ? meal.strYoutube.split('v=')[1] : null;

  return (
    <Container>
      <div className='recipe-detail'>
        <h2 className='recipe-title'>{meal.strMeal}</h2>
        <div className='recipe-detail-area'>
          <img src={meal.strMealThumb} alt={meal.strMeal} className='meal-img'/>
          <div className='recipe-items-area'>
            <div className='recipe-items'>
              <span>Category:</span> {meal.strCategory}
            </div>
            <div className='recipe-items food-area'>
              <span>Area:</span> {meal.strArea}
            </div>
          
            {/* 재료 목록 표시 */}
            <h3>Ingredients</h3>
            <ul className='recipe-ingredients'>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}
                  {index < ingredients.length - 1 && ", "}   
                </li>
              ))}
            </ul>
          </div>    
        </div>
        
        {/* 레시피 설명 */}
        <h3 className='recipe-instructions'>Instructions</h3>
        <div>{meal.strInstructions}</div>

        {/* 소스 링크 */}
        {meal.strSource && <p>Source: <a href={meal.strSource} target="_blank" rel="noopener noreferrer">Visit Recipe Source</a></p>}

        {/* YouTube 링크 */}
        {meal.strYoutube && <p>Watch on YouTube: <a href={meal.strYoutube} target="_blank"  rel="noopener noreferrer">Video Tutorial</a></p>}
        
        <YouTube
          videoId={videoId}
          opts={{
            videoId:"meal.strYoutube",
            width: "560",
            height: "315",
            playerVars: {
              rel: 0 //관련 동영상 표시하지 않기
            },
          }}
        />
      </div>
    </Container>
  );      
};

export default RecipeDetailPage;
