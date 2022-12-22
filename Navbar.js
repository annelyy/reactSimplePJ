import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> {/* 不用a href是因为阻止发送request给服务器而让浏览器处理返回的信息.只是去检查match的url。速度更快 */}
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;