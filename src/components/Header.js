import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CountContext } from '../context/CountContext'

export default function Header() {
const {count} = useContext(CountContext);

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
    <div className="container">
      <Link to="/" className="navbar-brand">Desing Bootstrap {count}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" >Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to = "/faq" className="nav-link" >Faq</Link>
          </li>
          
        <li className='nav-item'>
          <Link to= ""></Link>
        </li>
          
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blog
            </Link>
            <ul className="dropdown-menu">
              <li><Link to= "blog/blog-page" className="dropdown-item" href="#">Blog page</Link></li>
              <li><Link className="dropdown-item" href="#">Blog post</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              protfolio
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" href="#">Action</Link></li>
              <li><Link className="dropdown-item" href="#">Another action</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Hooks
            </Link>
            <ul className="dropdown-menu">
              <li><Link to= "hooks/usestate" className="dropdown-item" href="#">Usestate</Link></li>
              <li><Link to="hooks/usestate2" className="dropdown-item">Usestate2</Link></li>
              <li><Link to="hooks/usecontext" className="dropdown-item">Use context</Link></li>
              <li><Link className="dropdown-item" href="#">Another action</Link></li>
            </ul>
          </li>
        <Link to ="/auth/singup"><button type="button" className="btn btn-success">Sing up</button></Link>   
        </ul>
      </div>
    </div>
  </nav>
  )
}