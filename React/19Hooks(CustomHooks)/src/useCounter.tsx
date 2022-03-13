/*
    Following the naming convention 'useName', custom hooks can be
    used to save functionality, which can be used all over the app.

*/
import {useState} from "react"

export default function useCounter() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    /* 
        return whatever we want another component to have access to (count, increment).
        if exporting as an array, makes it very flexible
    */
    return {count, increment}
    
    //return [count, increment]
}
