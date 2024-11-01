import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import HomePage from './Pages/HomePage/HomPage';
import RecipeDetailPage from './Pages/RecipeDetailPage/RecipeDetailPage'
import NotFoundPage from './NotFoundPage/NotFoundPage';

// 홈페이지 /
// 음식 레시피 디테일 페이지 /recipe/:id
// 건강한 레시피 페이지 / 
function App() {
  return (
    <Routes>
      <Route path = "/" element = {<AppLayout />}>
        <Route index element = {<HomePage />}/>
        <Route path='recipe'>
          <Route path=':id' element = {<RecipeDetailPage /> }/>
        </Route>
      </Route>
      <Route path = "/*" element = {<NotFoundPage />} />
    </Routes>
  );
}

export default App;
