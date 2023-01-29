export default function Card(props) {
  // console.log(props);
  let bageText;
  if (props.openSpots === 0) {
    bageText = "SOLD OUT";
  } else if (props.location === "Online") {
    bageText = "ONLINE";
  } else {
    bageText = "Open spots: " + props.openSpots;
  }

  return (
    <div className="card">
      <div className="card--image">
        <img src={`./imagess/${props.coverImg}`} alt="" />
        {bageText && (
          <div className="card--image-status">
            <p>{bageText}</p>
          </div>
        )}
      </div>
      <div className="card--description">
        <div className="rating">
          <div className="star-icon"> </div>
          <p className="rate">
            {props.stats.rating}
            <span className="place"> ({props.stats.reviewCount})</span>
          </p>
          <div className="dot"></div>
          <p className="country">{props.country}</p>
        </div>
        <p className="description--text">{props.title}</p>
        <p className="description--price">
          From ${props.price} / <span className="persons">person</span>
        </p>
      </div>
    </div>
  );
}
