import { useState } from 'react';
import './BurgerMenu.scss';
import { Basket } from '../../../assets/icons';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            {/* Бургер-кнопка */}
            <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Выпадающее меню */}
            <nav className={`menu ${isOpen ? 'menu--open' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>
                        <Basket />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;
