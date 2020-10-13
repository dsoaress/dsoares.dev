import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="border-t-8 border-teal-500">
    <div className="container">
      <div className="flex justify-between items-center">
        <Link to="/" alt="Home" className="font-black text-2xl border-none">
          D<span className="text-teal-500">Soares</span>
        </Link>

        <Link
          to="/sobre-mim"
          alt="Sobre mim"
          activeClassName="active"
          className="border-none"
        >
          Sobre mim
        </Link>
      </div>
    </div>
  </header>
)

export default Header
