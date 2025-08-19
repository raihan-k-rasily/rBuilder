import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div style={{height:"80vh"}} className='d-flex flex-column justify-content-center align-items-center'>
      <img src="https://static.myqnapcloud.com/portal/static/v3/img/illustration/illustration-page-not-found.png" width={'300px'} alt="" />
      <h1>Page Not Found</h1>
      <h5>Sorry we couldn't find the page.</h5>
      <Link to={'/'} className='btn btn-primary'>Back to Home</Link>
    </div>
  )
}

export default PageNotFound