import { Button } from '../common/button/Button';
import earthImage from '../../assets/images/earth.png';

import './MainSection.scss';

export const MainSection = () => {
    return (
        <section className="main-section">
            <div className="main-section__content">
                <img src={earthImage} alt="earth" className="main-section__image" />

                <div className="main-section__text-container">
                    <h1 className="main-section__title">
                        Discover the vast expanses of <span>space</span>
                    </h1>

                    <p className="main-section__text">
                        Where the possibilities are <span>endless!</span>
                    </p>

                    <div className="main-section__button">
                        <Button className={'btn--yellow'}>Learn more</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
