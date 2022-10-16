import React, {useState,useEffect} from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

export default function Header() {
    const [show, setShow] = useState(true);
    const controlNavbar = () => {
        if(window.scrollY > 100){
            setShow(false)
        }
        else{
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',controlNavbar)
        return () => {
            window.removeEventListener('scroll',controlNavbar)
        };
    }, []);
    
  return (
    <nav className={`${show && 'navbar'}`}>
        <img className='site-logo' src="./logo.webp" alt="splatoon-logo"></img>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/aboutus">About Us</Link>
    </nav>
  )
}
