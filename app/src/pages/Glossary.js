import React from 'react'

export function Glossary() {
    return(
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h1>GLOSSARY</h1>
                </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
          <h5>Definitions from space</h5>
            </div>
          </div>
        </div>
        <div className="p-2"></div>
        <div className="container-fluid px-lg-5" id="about">
          <div className="row mx-md-5 mx-3 py-5 align-items-center">
            <div className="col-md-3 py-3 px-md-4 px-5 text-center">
              <p>Placeholder term</p>
            </div>
            <div className="col">
              <p>Scamper meow to be let out, kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
                attack your ankles chase the red dot, hairball run catnip eat the grass sniff cat mojo so purrrrrr but
                steal mom's crouton while she is in the bathroom chase the pig around the house. </p>
            </div>
          </div>
        </div>
      </>
    )
  }