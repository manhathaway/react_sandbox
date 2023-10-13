import './main.css'
import './src.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import Calculator from './Calculator/Calculator'
import CityList from './CityList/CityList'
import DropDown from './DropDown/DropDown'
import MenuButton from './MenuButton/MenuButton'
import ToggleBox from './ToggleBox/ToggleBox'
import IncDec from './IncDec/IncDec'
import ToDoList from './ToDoList/ToDoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityList />
    <Calculator />
    <DropDown />
    <MenuButton />
    <IncDec />
    <ToDoList />
    <ToggleBox />
  </React.StrictMode>,
)
