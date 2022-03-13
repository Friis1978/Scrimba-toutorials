import useToggler from "./useToggler";

function Favorite() {
  const { isToggledOn, toggle } = useToggler();

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{isToggledOn ? "❤️" : "♡"}</span>
      </h1>
    </div>
  );
}

export default Favorite;
