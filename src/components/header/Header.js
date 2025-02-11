import { Basket, Logo } from '../../assets/icons';

export const Header = () => {
    return (
        <header>
            <Logo />
            <ul>
                <li>Home</li>
                <li>Products</li>
            </ul>
            <Basket />
        </header>
    );
};
