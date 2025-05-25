import React from 'react';
import {Outlet, Link} from "react-router-dom";


export default function Nav(){
    return(
        <section className = "TopNav">
            <a class="active" >Home</a>
            <a href="#news">Mosques</a>
            <a href="#contact">Restaurant</a>
        </section>
    )
}