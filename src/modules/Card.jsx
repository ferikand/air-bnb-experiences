export default function Card() {
  return (
    <div className="card">
      <div className="card--image">
        <div className="card--image-status">
          <p>SOLD OUT</p>
        </div>
      </div>
      <div className="card--description">
        <div className="rating">
          <div className="star-icon"> </div>
          <p className="rate">
            5.0
            <span className="place"> (6)</span>
          </p>
          <div className="dot"></div>
          <p className="country">USA</p>
        </div>
        <p className="description--text">Life lessons with Katie Zaferes</p>
        <p className="description--price">
          From $136 / <span className="persons">person</span>
        </p>
      </div>
    </div>
  );
}
