import './AboutSection.scss';

export const AboutSection = () => {
    return (
        <section className="about-section">
            <h2 className="about-section__title">Embark on a space journey</h2>

            <input type="checkbox" id="toggle-text" className="about-section__toggle" />

            <p className="about-section__text">
                Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed
                of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow
                you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible
                impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your
                adventure in space. We offer various options for space excursions.
            </p>

            <label htmlFor="toggle-text" className="about-section__button">
                Read more
            </label>
        </section>
    );
};
