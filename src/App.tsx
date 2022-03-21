import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Events from './components/Events';
import TodosPage from './components/TodosPage';
import UserPage from './components/UserPage';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div>
        <div style={{margin: 10}}>
          <div style={{marginRight: 15, display: 'inline'}}>
            <NavLink to='/users'>Пользователи</NavLink>
          </div>
          <div style={{marginRight: 15, display: 'inline'}}>
            <NavLink to='/todos'>Список Дел</NavLink>
          </div>
          <div style={{display: 'inline'}}>
            <NavLink to='/events'>Ивенты</NavLink>
          </div>
        </div>
        <Routes>
          <Route element= {<UserPage/>} path={'/users'}/>
          <Route element= {<TodosPage/>} path={'/todos'}/>
          <Route element= {<Events/>} path={'/events'}/>
          <Route path="*" element={<Navigate to="/users"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App