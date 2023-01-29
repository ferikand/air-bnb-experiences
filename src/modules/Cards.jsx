import Card from "./Card";
import data from "./data";
export default function Cards() {
  const expData = data.map((el) => {
    return <Card key={el.id} {...el} />;
  });
  // console.log(expData);
  return <div className="cards">{expData}</div>;
}
