import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexMovieTheators() {
  return (
    <>
    <h3>MovieTheators</h3>
    <Link className='btn btn-primary' to={"/MovieTheators/create"}> Create Genere</Link>
    </>
  )
}
