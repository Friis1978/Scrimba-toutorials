import {PureComponent} from "react"
import GrandChild from "./GrandChild"

class Child extends PureComponent {
    render() {
        console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
        return (
            <div>
                <p>I'm a Child Component</p>
                <GrandChild />
                <GrandChild />
            </div>
        )
    }
}

export default Child