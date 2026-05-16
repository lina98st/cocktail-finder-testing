import UserLoginForm from './UserLoginForm';

const Header = () => {
  return (
    <header
      className="d-flex flex-column align-items-center py-3 px-4 mb-3 rounded"
      style={{
        background: 'rgba(15, 26, 20, 0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(46, 125, 87, 0.3)',
      }}
    >
      <h1 className="display-4 text-white mb-2">CocktailFinder</h1>
      <UserLoginForm />
    </header>
  );
};

export default Header;