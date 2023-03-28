import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="Featured" subTitle="Tours" />

        <div className="section-center featured-center">
          {tours.map((tours) => {
            const { id, image, date, title, info, location, duration, cost } =
              tours;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt={title} />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{duration} days</p>
                    <p>${cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Tours;
