import "./index.css";

export default function ContactInfo({ name, src, rate, time, info, phone }) {
  return (
    <div className="contact__info">
      <div className="contact__info__upper_area">
        <img src={src} alt={name} className="contact__photo" />

        <div>
          <h1 className="contact__info__title">Господар - {name}</h1>

          <div className="contact__info__sub-block">
            <span className="contact__info__sub-value">{phone}</span>

            <span className="contact__info__sub-value">{time}</span>

            <span className="contact__info__sub-value">
              {rate}% швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <p className="contact__info__sub-value">{info}</p>
    </div>
  );
}
