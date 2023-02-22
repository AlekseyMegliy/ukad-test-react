import "./productCard.css";

function ProductCard(props) {
  return (
    <div
      style={props.max <= props.dogy.id ? { display: "none" } : undefined}
      className="product container-fluid"
    >
      <div className="img-cut">
        <img alt={`>>>>>>>>> ${props.dogy.name}`} src={props.dogy.image.url} />
      </div>

      <p className="type">{props.dogy.life_span}</p>
      <p className="name">{props.dogy.name}</p>
    </div>
  );
}
export default ProductCard;
