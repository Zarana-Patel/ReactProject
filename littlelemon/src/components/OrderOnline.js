import food4 from "../images/food4.webp";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img className="header-reserve" src={food4} alt="Little Lemon Ingredients" ></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
      </div>
    </header>
  );
}
