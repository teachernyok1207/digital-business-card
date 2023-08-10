// Importing React Library
import React from "react"

// Creating function for my Title
export default function MyTitle(){
    return (
        <div className="My-Title">
            <h2>Norman Galanza</h2>
            <p className="job-title">Front End Developer</p>
            <p className="website-link">normangalanza.website</p>
            
            <div className="button-div">
                <a id="email" href="mailto: galanza.norman2017@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i>&nbsp;Email</a> 
                <a id="linkedIn" href="https://www.linkedin.com/in/norman-galanza-493656257/" target="_blank"><i className="fa-brands fa-linkedin"></i>&nbsp;LinkedIn</a> 
            </div>
        </div>
    )
}