import React, { useState } from 'react';
import { useCategoriesQuery } from '../../../Hook/usecategories';
import { Alert, Container } from 'react-bootstrap';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './CategoriesPage.style.css';

const CategoriesPage = () => {
  const { data, isLoading, isError, error } = useCategoriesQuery();
  console.log("ccc", data);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    <Container>  
      {/* 전체 카테고리 메뉴 */}
      <ul className="categorie">
        {data?.categories?.map((category) => (
          <li key={category.idCategory} role="menuitem">
            <a
              href="#"
              className="dropdown-item"
              onClick={(e) => {
                e.preventDefault(); // 페이지 이동 방지
                setSelectedCategory(category);
              }}
            >
              {category.strCategory}
            </a>
          </li>
        ))}
      </ul>

      {/* 선택된 카테고리 정보 */}
      {selectedCategory ? (
        <div className="category-detail">
          <h3>{selectedCategory.strCategory}</h3>
          <img
            src={selectedCategory.strCategoryThumb}
            alt={`${selectedCategory.strCategory} thumbnail`}
            className="category-thumbnail"
          />
          <p>{selectedCategory.strCategoryDescription}</p>

          {/* 선택된 카테고리 해제 버튼 */}
          <button className='prv-page'  onClick={() => setSelectedCategory(null)}>Return</button>
        </div>
      ) : (
        <div className="all-categories">
          {data?.categories?.map((category) => (
            <div key={category.idCategory} className='categories-items'>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <p>{category.strCategory}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default CategoriesPage;
