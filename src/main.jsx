import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId="456983190235-e0fm6o3fqug14epmnb3ukith5uidtl3n.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</GoogleOAuthProvider>,
)