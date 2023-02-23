import "./productCard.scss";

function ProductCard(props) {
  return (
    <div
      style={props.max <= props.dogy.id ? { display: "none" } : undefined}
      className="productCard container-fluid"
    >
      <div className="productCard__img-cuter">
        <img alt={`>>>>>>>>> ${props.dogy.name}`} src={props.dogy.image.url} />
      </div>

      <p className="productCard__type">{props.dogy.life_span}</p>
      <p className="productCard__name">{props.dogy.name}</p>
    </div>
  );
}
export default ProductCard;
