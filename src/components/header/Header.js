import { Basket, Logo } from '../../assets/icons';
import BurgerMenu from '../common/burgerMenu/BurgerMenu';

export const Header = () => {
    return (
        <header>
            <Logo />
            <BurgerMenu />

            <ul>
                <li>Home</li>
                <li>Products</li>
            </ul>
            <Basket />
        </header>
    );
};
