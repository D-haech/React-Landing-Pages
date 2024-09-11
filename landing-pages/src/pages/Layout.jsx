import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav className="d-flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Page2">Pages</Link>
          </li>
          <li>
            <Link to="/first">First Page</Link>
          </li>
        </ul>
        <div>
        <Outlet></Outlet>
      </div>
      </nav>
      
    </>
  );
}
