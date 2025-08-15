import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { GrDocumentDownload } from "react-icons/gr";
import {Link} from "react-router-dom"

function ResumeGenerator() {
  return (
    <section className="resume">
      <h1 className='text-center'>Create a job-winning Resume in minutes</h1>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-3 shadow box border py-5  my-5 text-center  ">
          <IoDocumentText className='fs-2 mb-3' style={{ color: "blue" }} />
          <h4>Add your information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3 shadow box border py-5  my-5 text-center  ">
          <GrDocumentDownload className='fs-2 mb-3' style={{ color: "red" }} />
          <h4>Download youe Resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className='d-flex justify-content-center align-items-center pb-5'>
        <Link to={'/form'}>
        <button className='btn btn-primary' style={{ backgroundColor: "purple" }}>LET'S START</button>
        </Link>
      </div>
    </section>

  )
}

export default ResumeGenerator