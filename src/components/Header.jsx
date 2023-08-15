import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container | site-header__inner">
        {/* Your logo or other header content goes here */}
        <h1 className="site-logo">Logo</h1>

        {/* Navigation component */}
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
