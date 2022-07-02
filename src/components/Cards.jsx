import { data } from "../helper/data";

const cards = () => {
  console.log(data);
  return (
    <div className="cards-container">
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div className="cards" key={id}>
            <div className="title">
              <h1>{title}</h1>
            </div>
            <img src={image} alt="" />
            <div className="card-over">
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default cards;
