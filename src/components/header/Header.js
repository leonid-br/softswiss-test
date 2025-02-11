import { Basket, Logo } from '../../assets/icons';
import BurgerMenu from '../common/burgerMenu/BurgerMenu';
import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <Logo />

            <ul className="hide-on-mobile">
                <li>Home</li>
                <li>Products</li>
            </ul>
            <Basket className="hide-on-mobile" />
            <BurgerMenu />
        </header>
    );
};
