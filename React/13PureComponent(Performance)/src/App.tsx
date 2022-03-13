import {Component} from "react"
import GrandParent from "./GrandParent"

/*
1. ShouldComponentUpdate

- Lifecycle method on class conponents
- Allows you to determine if a component should update or not
- Receives the upcoming props and state so you can compare them against current props and state
- return true for "yes", false for "no"


2. React.PureComponent

- Alternative to React.Component
- Automatically implements shouldComponentUpdate() for shallow props & state comparison
- ships rendering all children in the tree automatically, so they must be "pure" as well
- Generally preferred over shouldComponentUpdate()


*/
class App extends Component {
    state = { count: 0 }
    
    increment = () => this.setState((prevState:{count:number}) => ({count: prevState.count + 1}))
    
    render() {
        console.log("[GP] [P] [C] [GC] APP just rendered")
        return (
            <div>
                <button onClick={this.increment}>+1</button>
                <h2>{this.state.count}</h2>
                <p>I'm the App component</p>
                <GrandParent count={this.state.count} />
                <GrandParent />
            </div>
        )    
    }
}

export default App
