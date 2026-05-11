import UserLoginForm from './UserLoginForm';

const Header = () => {
    return (
        <header className="d-flex flex-column align-items-center py-3 px-4">
            <h1>CocktailFinder</h1>
            <UserLoginForm />
        </header>
    );
}

export default Header;