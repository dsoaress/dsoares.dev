import React from 'react'
import { Link } from 'gatsby'

import logo from '@assets/logo.svg'

const Header = () => (
  <header className="border-t-8 border-highLight">
    <div className="container">
      <div className="flex justify-between items-center">
        <Link to="/" alt="Home" className="font-black text-2xl border-none">
          <img src={logo} alt="Daniel Soares" className="w-40" />
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
