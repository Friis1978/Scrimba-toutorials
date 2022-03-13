import { useContext } from "react";
import { ImageProp, Context } from "../Context";
import useHover from "../hooks/useHover";

type ImageProps = {
  className?: string;
  img: ImageProp;
};

function Image({ className, img }: ImageProps) {
  const {ref, hovered} = useHover()
  const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context);
  const { isFavorite, url, id } = img;

  const heartIcon = (isFavorite || hovered) && (
    <i
      ref={ref}
      onClick={() => toggleFavorite(id)}
      className={`favorite ${isFavorite ? "ri-heart-fill" : "ri-heart-line"}`}
    />
  );

  const alreadyInCart = cartItems.some((val) => val.id === id);
  const cartIcon = (alreadyInCart || hovered) && (
    <i
      ref={ref}
      onClick={() => alreadyInCart ? removeFromCart(id): addToCart(img)}
      className={`cart ${
        alreadyInCart ? "ri-shopping-cart-fill" : "ri-add-circle-line"
      }`}
    ></i>
  );

  return (
    <div
      className={`${className} image-container`}
    >
      <img alt="" src={url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

export default Image;
