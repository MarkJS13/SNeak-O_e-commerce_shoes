import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './media-queries/header.css'
import './media-queries/hero.css'
import './media-queries/brands.css'
import './media-queries/featured.css'
import './media-queries/newsletter.css'
import './media-queries/footer.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
