import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <section className="TopNav">
          <div className="LogoContainer">
            <img src="./logo.png" alt="logo"/>
          </div>
          <div className = "Links">
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/Mosques">Mosques</Link>
          </a>
          <a>
            <Link to="/Restaurant">Restaurants</Link>
          </a>
          <a>
            <Link to="/Stores">Stores</Link>
          </a>
          <a>
            <Link to="/Register">Register</Link>
          </a>

          <a>
            <Link to="/Events">Events</Link>
          </a>
          <a>
            <Link to="/Login">Login</Link>
          </a>
          <a>
            <Link to="/Addblog">Add Blog</Link>
          </a>
          <a>
            <Link to="/blog">Blog</Link>
          </a>

          </div>

        
      </section>

      <Outlet />
    
    </>
  )
};

export default Layout;