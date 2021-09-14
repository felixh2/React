import Clock from "./clock";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Navbar</h1>
            <Clock/>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;