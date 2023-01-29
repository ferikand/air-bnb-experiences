import Card from "./Card";
// import zafires from "../images/katie-zaferes.png";
import data from "./data";
export default function Cards() {
  const expData = data.map((el) => {
    return (
      <Card
        img={`./imagess/${el.coverImg}`}
        rating={el.stats.rating}
        country={el.location}
        title={el.title}
        price={el.price}
        reviewCount={el.stats.reviewCount}
        key={el.id}
      />
    );
  });
  console.log(expData);
  return <div className="cards">{expData}</div>;
}
