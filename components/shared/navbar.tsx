import Link from "next/link"
import React from "react"
import Image from "next/image"

const Navbar = () =>{
    const navstyles = {
        backgroundImage:`url('${"/assets/home.jpg"}')`,
        width: "100%",
        height: "100vh",
    }

   
    return(
        <nav className="nav" style={navstyles}>  
                <div className="container nav-bar flex">
                    <Link href={"/"} className="company-logo flex">
                        <img
                            src={"/assets/logo.jpg"}
                            width={75}
                            height={75}
                            alt="logo"
                        />
                        <span className="logo-text">IRA</span>
                    </Link>

                    <div className="nav-links">
                        <ul className="flex">
                            <li><Link className="hover-link " href={"/"}>Home</Link></li>
                            <li><Link className="hover-link" href={"/"}>Services</Link></li>
                            <li><Link className="hover-link" href={"/"}>Contact Us</Link></li>
                            <li><Link className="hover-link" href={"/"}>Why Us</Link></li>
                            <li><Link className="hover-link" href={"/"}>Portfolio</Link></li>
                            <li><Link className="hover-link" href={"/"}>Faq's</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="text-box flex">
                    <h1>Welcome to IRA</h1>
                    <p>Where Design Meets Destiny which speaks of you !...</p>
                </div>
        </nav> 
    )
}

export default Navbar;