import React from 'react';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUser';
import CodeForInterview from './components/codeForInterview';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<CodeForInterview />} />
        <Route exact path='/all' element={<AllUsers />} />
        <Route exact path='/add' element={<AddUser />} />
        <Route exact path='/edit/:id' element={<EditUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
