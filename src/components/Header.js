import UserLoginForm from './UserLoginForm';

const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center px-4 py-3">
            <h1>CocktailFinder</h1>
            <UserLoginForm />
        </header>
    );
}

export default Header;