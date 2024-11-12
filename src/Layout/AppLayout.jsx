import './AppLayout.style.css';
import Logo from '../images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const Navigate = useNavigate();
  const goToHomePage = () => {
    Navigate("/");
  }

  return (
    <div>
      <nav className="nav-container" role="navigation" aria-label="Main navigation">
        <div className="nav-area">
          <div className="logo-area" onClick={goToHomePage}>
            <img src={Logo} alt="RecipeNest Logo" className="logo"/>
            <h1 className="logo-name">RecipeNest</h1>
          </div>
          <form className="search-area" role="search" aria-label="Search recipes">
            <div className="search-container">
              <input
                className="search-txt"
                type="text"
                placeholder="Please search for a recipe."
                aria-label="Search input"
              />
              <button type="submit" className="search-btn" aria-label="Search button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
          <ul className="recipe-area">
            <li className="recipe-item" role="menuitem" aria-label="Recipe Add">
              <span>Recipe Add</span>
              <div className="icon-container" aria-label="Add new recipe">
                <FontAwesomeIcon icon={faSquarePlus} />
                <div className="add-counter">0</div>
              </div>
            </li>
            <li role="menuitem" aria-label="Login">
              <div>
                <FontAwesomeIcon icon={faUser} className="user-icon" />
                <span>Login</span>
              </div>
            </li>
          </ul>
        </div>
        <ul className="menu-list" role="menu" aria-label="Main categories">
          <li><a href="/recipe" className="menu-items">Category</a></li>
        </ul>
      </nav>
      <div className="main-content">
        <Outlet /> 
      </div>
      <footer className="footer-container">
        <div className="footer-layer1">
          <div>
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/terms">Terms of Use</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/support">Customer Service</a>
          </div>
        </div>
        <div className="footer-layer2">
          <div className="footer-layer2-area">
            <h2 className="footer-title-area">
              <img src={Logo} alt="Footer Logo" className="footer-logo" />
              <div className="footer-title">RecipeNest</div>
            </h2>
            <div>
              <p>CEO: Minjung Je</p>
              <p>Address: 555 Food Avenue, Hwaseong-si, Gyeonggi-do</p>
              <p>Business Registration No: 00-00-5555</p>
            </div>
            <div>
              <p>Tell: 5555-7777</p>
              <p>Email: jeminjeong123@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-layer3">
          <p>&copy; 2024 RecipeNest FOOD Inc. ALL RIGHTS RESERVED</p>
          <ul className="footer-icons">
            <li>
              <a href="https://naver.com" target="_blank" rel="noopener noreferrer">
                <svg className="naver-icon" role="img" viewBox="0 0 24 24">
                  <title>Naver</title>
                  <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <svg className="github-icon" role="img" viewBox="0 0 24 24">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
