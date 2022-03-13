// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// This is a declarative way
function ReactComponent(name) {
  return (
    <div>
      <h1 className="header">This is jsx</h1>
      <ul>
        <li>hej</li>
        <li>med</li>
        <li>dig</li>
        <li>{name}</li>
      </ul>
    </div>
  );
}

const navbar = (
    <nav>
        <h1>Rasmus Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"));
