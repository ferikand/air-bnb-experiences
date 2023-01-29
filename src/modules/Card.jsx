export default function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <div className="card--image">
        <img src={props.img} alt="" />
        {/* <div className="card--image-status">
          <p>SOLD OUT</p>
        </div> */}
      </div>
      <div className="card--description">
        <div className="rating">
          <div className="star-icon"> </div>
          <p className="rate">
            {props.rating}
            <span className="place"> ({props.reviewCount})</span>
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
