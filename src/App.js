import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import HomePage from './Pages/HomePage/HomPage';
import RecipeDetailPage from './Pages/RecipeDetailPage/RecipeDetailPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import CategoriesPage from './Pages/HomePage/Categories/CategoriesPage';
import RecipesPage from './Pages/HomePage/Recipes/RecipesPage';

// 홈페이지 /
// 각 종 음식 레시피 페이지 /recipe
// 음식 타입 및 설명 /recipe/categories
// 음식 레시피 디테일 페이지 /recipe/:id
function App() {
  return (
    <Routes>
      <Route path = "/" element = {<AppLayout />}>
        <Route index element = {<HomePage />}/>
        <Route path="/recipe">
          <Route index element = {<RecipesPage /> }/>
          <Route path ="categories" element = {<CategoriesPage /> }/>
          <Route path=":id" element = {<RecipeDetailPage /> }/>
        </Route>
      </Route>
      <Route path = "/*" element = {<NotFoundPage />} />
    </Routes>
  );
}

export default App;
