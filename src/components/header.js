import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="border-t-8 border-highLight">
    <div className="container">
      <div className="flex justify-between items-center">
        <Link to="/" alt="Home" className="font-black text-2xl border-none">
          D<span className="text-highLight">Soares</span>
        </Link>

        <Link
          to="/sobre-mim"
          alt="Sobre mim"
          activeClassName="active"
          className="text-default hover:text-highLight border-none"
        >
          Sobre mim
        </Link>
      </div>
    </div>
  </header>
)

export default Header
