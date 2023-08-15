import { Link } from 'react-router-dom';
import settings from '../settings';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {settings.navLinks.map((link, index) => {
          const { text, url, isAnchor } = link;
          if (isAnchor) {
            return (
              <li className="nav__item" key={index}>
                <a className="nav__link" href={url}>
                  {text}
                </a>
              </li>
            );
          } else {
            return (
              <li className="nav__item" key={index}>
                <Link className="nav__link" to={url}>
                  {text}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
