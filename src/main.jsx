import { KindeProvider } from '@kinde-oss/kinde-auth-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KindeProvider
      clientId="ead0d5712749467992bbaa050f941d3d"
      domain="https://khojiakbar.kinde.com"
      redirectUri="http://localhost:5173/"
      logoutUri="http://localhost:5173/">
        <App />
    </KindeProvider>
  </React.StrictMode>,
)