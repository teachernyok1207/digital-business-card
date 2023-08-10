// Importing React Library
import React from "react"

// Importing Components
import MyTitle from "./Title"
import About from "./About"
import Interests from "./Interests"

// Creating function for Main
export default function Main(){
    return (
        <main className="main-div">
            <MyTitle />
            <About />
            <Interests />
        </main>
    )
}