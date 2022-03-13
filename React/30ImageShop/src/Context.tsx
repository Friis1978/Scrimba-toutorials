import { createContext, useState, useEffect } from "react";

export type ImageProp = { id: string; isFavorite: boolean; url: string };

type ContextProps = {
  allPhotos: ImageProp[];
  cartItems: ImageProp[];
  toggleFavorite: (id: string) => void;
  addToCart: (image: ImageProp) => void;
  removeFromCart: (id: string) => void;
  emptyCart: () => void;
};

const defaultValues: ContextProps = {
  allPhotos: [],
  cartItems: [],
  toggleFavorite: () => null,
  addToCart: () => null,
  removeFromCart: () => null,
  emptyCart: () => null,
};

const Context = createContext(defaultValues);

function ContextProvider({ children }: any) {
  const [allPhotos, setAllPhotos] = useState<ImageProp[]>([]);
  const [cartItems, setCartItems] = useState<ImageProp[]>([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  useEffect(() => {
    console.log(allPhotos);
    console.log(cartItems);
  }, [allPhotos,cartItems]);

  function toggleFavorite(id: string) {
    const updatedArr = allPhotos?.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  function addToCart(image: ImageProp) {
    setCartItems((cartItems)=>[...cartItems, image]);
  }

  function removeFromCart(id: string) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }

  return (
    <Context.Provider
      value={{ allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
