import React from "react";
import { useSearchParams } from "react-router-dom";
import { useMealSearchQuery } from "../../../Hook/useSearch";
import { Alert, Container, Row, Col } from 'react-bootstrap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MealCard from "../../../common/MealCard/MealCard";
import './RecipesPage.style.css';

const RecipesPage = () => {
  const [query] = useSearchParams();
  const keyword = query.get("s");

  const { data, isLoading, isError, error } = useMealSearchQuery({ keyword });
  console.log("sss",data);

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
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container className="recipes-container">
      <h1 className="recipes-title">Recipes</h1>
      <Row className="g-4 recipes-items">
        {data.searchByName.map((meal) => (
            <Col lg={3} xs={5} className="all-recipes">
              <MealCard key={meal.idMeal} meal={meal} />
            </Col>
        ))} 
      </Row>
    </Container>
  );
};

export default RecipesPage;
