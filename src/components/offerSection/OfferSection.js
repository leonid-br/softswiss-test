import { Button } from '../common/button/Button';
import './OfferSection.scss';

export const OfferSection = () => {
    return (
        <section className="offer-section">
            <h2 className="offer-section__title">Offers</h2>
            <ul className="offer-section__list">
                <li className="offer-section__item">
                    <div className="offer-section__item-content">
                        <h3 className="offer-section__item-title">Move the borders of reality!</h3>
                        <p className="offer-section__item-text">Go on a space adventure</p>
                        <Button className={'btn btn--outline'}>Learn more</Button>
                    </div>
                </li>
                <li>
                    <div className="offer-section__item-content">
                        <h3 className="offer-section__item-title">Space is not just stars and planets</h3>
                        <p className="offer-section__item-text">Go on a space adventure </p>
                        <Button className={'btn btn--outline'}>Learn more</Button>
                    </div>
                </li>
                <li>
                    <div className="offer-section__item-content">
                        <h3 className="offer-section__item-title">For those who dream of stars </h3>
                        <p className="offer-section__item-text">Our offer: make your dream come true</p>
                        <Button className={'btn btn--outline'}>Learn more</Button>
                    </div>
                </li>
                <li>
                    <div className="offer-section__item-content">
                        <h3 className="offer-section__item-title">Fulfill your fantastic dreams</h3>
                        <p className="offer-section__item-text">Space has never been so close</p>
                        <Button className={'btn btn--outline'}>Learn more</Button>
                    </div>
                </li>
            </ul>
        </section>
    );
};
