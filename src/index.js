import React from "react"
import ReactDOM from "react-dom"
import Puppies from "./components/Puppies"
import Counter from "./components/Counter"
import People from "./components/People"

const App = ()=>{


    return (
        <div className="app">
            <Puppies />
            <Counter />
            <People />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));