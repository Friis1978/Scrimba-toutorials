import {useEffect, useState} from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        function watchWidth() {
            console.log("get new width...",window.innerWidth)
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}