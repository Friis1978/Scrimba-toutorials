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

3. React.memo()

- Higher-order component build by React (released in v16.6)
- Pretty much the same as PureComponent, but for functional components
- It only compares prevProps & nextProps (no state checking)
- You can optionally implement your own checking function to determine if it shuld use the memoized result
    - This function is kind of like shouldComponentUpdate(), except it should return true if the props are
      equal and false if they arent't. This is effectively the opposite approach of shouldComponentUpdate(),
      which returns true if the component should re-render(i.e. props are different)    

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
                <GrandParent />
                <GrandParent />
            </div>
        )    
    }
}

export default App
