
import './App.css';
import Mosques from './Mosques.js'
import Restaurant from './Restaurant.js'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout2.js'
import RestaurantComponent from './RestaurantComponent.js'
import DetailPage from './DetailPage';
import RestaurantPage from './RestaurantPage';
import Stores from './Stores';
import Store from './Store';
import Events from './Events';
import Register from './Register';
import Login from './Login';
import Addblog from './addBlog';
import Blog from './Blog';
import Blogpage from './Blogpage';


import Home from './home.js'
function App() {
 
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Mosques" element = {<Mosques />} />
        <Route path ="/detail/:id" element = {<DetailPage/>} />
        <Route path="/restaurant/:id" element = {<RestaurantPage/>} />
        <Route path="Restaurant" element = {<Restaurant />} />
        <Route path="RestaurantC" element = {<RestaurantComponent/>} />
        <Route path="Stores" element = {<Stores />} /> 
        <Route path="/store/:id" element = {<Store/>} />
        <Route path="Events" element = {<Events/>} />
        <Route path="Register" element = {<Register/>} />
        <Route path="Login" element = {<Login/>} />
        <Route path="addBlog" element = {<Addblog/>} />
        <Route path="blog" element = {<Blog/>} />
        <Route path="blog/:id" element = {<Blogpage/>} />
        
        </Route>
        

        </Routes>
        
     
     </BrowserRouter>
     
    </>
   
  );
}

export default App;
