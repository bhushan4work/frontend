import React from "react"
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
    
    const entryElements = data.map((entry) => { //we mapped each element in data obj 
        return(
            <Entry
                key={entry.id}  //we need to have unique key for each child in obj
                {...entry}  //instead of adding props one by one we return full obj
            />
        )
    })
    
    return(
        <>
            <Header />
            <main className="container">
                {entryElements}  
            </main>
        </>
    )
}