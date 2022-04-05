
import {Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Friends from './Component/Freinds/Friends';
import FriendDetail from './Component/FriendDetail/FriendDetail';
import Home from './Component/Home/Home';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
