import useToggler from "./useToggler";
// render the Toggler inside the Menu, and use the render prop to determine what will get displayed
// remember to bring in the "goodies" (state and methods) to that function so you can make this work

function Menu() {
    const { isToggledOn, toggle } = useToggler();

    return (
            <div>
                <button onClick={toggle}>{isToggledOn ? "Hide" : "Show"} Menu </button>
                <nav style={{display: isToggledOn ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <p><a href="/">Your Profile</a></p>
                    <p><a href="/">Your Repositories</a></p>
                    <p><a href="/">Your Stars</a></p>
                    <p><a href="/">Your Gists</a></p>
                </nav>
            </div>
    ) 
}

export default Menu