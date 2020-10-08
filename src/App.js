import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function handleClick2() {
    console.log("Entering")
}

function handleClick3() {
    console.log("Leaving")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            <img 
                onMouseOver={() => console.log("Hovered!")} 
                onMouseEnter={handleClick2} 
                onMouseLeave={handleClick3} 
                src="https://www.fillmurray.com/200/100"
            />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
