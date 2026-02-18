import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import './index.css'
import App from './App.jsx'
import Test from './test.jsx'
import ChangeColor from './ChangeColor.jsx'
import maptest from './Test2.jsx'
import Test2 from "./Test2.jsx"
import Todolist from "./Todolist.jsx"
import Hook from "./Hook.jsx"
import Api from "./Api.jsx"
import Lifecycle from "./Lifecycle.jsx"
import CssTest from "./CssTest.jsx"
import StyleComponent from "./StyleComponent.jsx"





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyleComponent/>
  </StrictMode>
)
