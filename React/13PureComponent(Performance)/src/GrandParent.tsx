import {PureComponent} from "react"
import Parent from "./Parent"

class GrandParent extends PureComponent<{count?:number}> {    
    /*
    shouldComponentUpdate(nextProps:any) {
        if (nextProps.count === this.props.count) {
            return false
        }
        return true
    }
    */
      
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent