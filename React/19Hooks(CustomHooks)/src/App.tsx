import React, {useState} from "react"
import useCounter from "./useCounter"

function App() {   
    
    // If a object is exported from the custom hooks, you would have to follow the naming convention
    const {count, increment} = useCounter()
    
    // Using an array instead, you can call the variables whatever you like
    //const [number, add] = useCounter()
    
    // If not using the custom hook
    
    /*
    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    */
    
    return (
        <div className="m-10">
            <h1>The count is {count}</h1>
            <button className="bg-red-500 text-white px-7 py-2 rounded-md mt-10" onClick={increment}>Add 1</button>
        </div>
    )
}

export default App
