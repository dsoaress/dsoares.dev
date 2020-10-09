import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({
  isFirst,
  prevPage,
  currentPage,
  numPages,
  nextPage,
  isLast
}) => (
  <div>
    {!isFirst && (
      <Link to={prevPage} rel="prev">
        ← Página Anterior
      </Link>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Link to={nextPage} rel="next">
        Próxima Página →
      </Link>
    )}
  </div>
)

export default Pagination
