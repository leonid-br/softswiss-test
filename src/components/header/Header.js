import { Basket, Logo, BasketHover } from '../../assets/icons';
import { BurgerMenu } from '../common/burgerMenu/BurgerMenu';

import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <Logo className="header__logo" />

            <div className="header__nav">
                <ul className="hide-on-mobile header__nav-list">
                    <li>
                        <button type="button" className="header__nav-button">
                            Home
                        </button>
                    </li>

                    <li>
                        <button type="button" className="header__nav-button">
                            Products
                        </button>
                    </li>
                </ul>

                <button className="hide-on-mobile header__basket-button">
                    <Basket className="hide-on-mobile header__basket" />
                    <BasketHover className="hide-on-mobile header__basket hover-icon" />
                </button>

                <BurgerMenu />
            </div>
        </header>
    );
};
