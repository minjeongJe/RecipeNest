import React from 'react';
import './NotFoundPage.style.css'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFoundPage = () => {   
  const navigate = useNavigate()
  return (
    <div className='NotFoundPage-container'>
      <div><FontAwesomeIcon icon={faFaceSadCry} className='face-icon'/></div>
      <h1 className='no-page'>404  - 해당 페이지를 찾지 못했습니다.</h1>   
      <div className='home-page' onClick={() => navigate('/')}>홈페이지로 돌아가기</div>
    </div>
  )
} 

export default NotFoundPage
