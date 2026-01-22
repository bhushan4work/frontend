import React from "react"
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import App from '/src/App.jsx'

//renders App which have other components( entry, header )
createRoot(document.getElementById('root')).render( 
  <App />
)
