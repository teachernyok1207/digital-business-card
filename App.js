// Importing React
import React from "react"

// Importing Components
import Profile from "./Components/Profile"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

// Creating function for entire app
export default function App(){
    return (
        <div>
            <Profile />
            <Main />
            <Footer />
        </div>
    )
}