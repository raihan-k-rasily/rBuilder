import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (

    <>
      <section className='container-fluid' style={{ width: '100%', overflowX: 'hidden', height: '450px', backgroundImage: "url('https://tse2.mm.bing.net/th/id/OIP.1pGmL6nXQESbR5Uk6_t3swAAAA?cb=thfc1&pid=ImgDet&w=390&h=260&rs=1&o=7&rm=3')", backgroundAttachment: "fixed", backgroundPosition: "top", backgroundSize: "cover" }} id="part1">
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 shadow box border py-5 rounded my-5  text-center " style={{ backgroundColor: 'white' }}>
            <h3>Designed to get hired</h3>
            <h4>Your skills,your story ,your next job - all in one.</h4>
            <Link to={'/resume'}>
              <button className='btn btn-primary'>Make your Resume</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>
      {/* TOOLS */}
      <section className="tool p-5 w-100">
        <h1 className='text-center'>Tools</h1>
        <div className="row align-items-center">

          <div className="tool-content col-12 col-md-6">
            <h4>Resume</h4>
            <p>create your </p>

            <h4>Cover Letter</h4>
            <p>create your </p>

            <h4>Jobs</h4>
            <p>create your </p>

            <h4>Applications</h4>
            <p>create your </p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <img className="img-tool w-75 ms-5" style={{ height: "400px" }} src="https://tse1.mm.bing.net/th/id/OIP.ar0F7slF49qzhUSAtbMK7AHaNK?cb=thfc1&w=1020&h=1813&rs=1&pid=ImgDetMain&o=7&rm=3" alt="img-tool" />
          </div>
        </div>
      </section>


      <section className='Second' style={{ width: '100%', overflowX: 'hidden', height: '450px', backgroundImage: "url('https://bordalo.observador.pt/v2/q:84/rs:fill:2000:1122/c:2000:1122:nowe:0:44/plain/https://s3.observador.pt/wp-content/uploads/2022/08/23170008/fa2ul6xwiaeik-z.jpg", backgroundAttachment: "fixed", backgroundPosition: "top", backgroundSize: "cover" }} id="part1">
      </section>

      {/* TESTIMONY */}
      <section className="tool p-5 w-100">
        <h1 className='text-center'>Testimony</h1>
        <div className="row align-items-center">

          <div className="tool-content col-12 col-md-6">
            <h4>Resume</h4>
            <p>create your </p>

            <h4>Cover Letter</h4>
            <p>create your </p>

            <h4>Jobs</h4>
            <p>create your </p>

            <h4>Applications</h4>
            <p>create your </p>
          </div>
          <div className="tool-image col-12 col-md-6">
            <div className="row">
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://dailycoin.com/wp-content/uploads/2024/02/Andrew_Tate_web.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://tse2.mm.bing.net/th/id/OIP.DmsIswdRr3OLtfVkyM7qoQHaHZ?cb=thfc1&w=640&h=639&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://i.pinimg.com/736x/a0/71/70/a07170d56bf4a060b76050829b06542a.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://i.pinimg.com/originals/ea/a4/f8/eaa4f8ea08553c99d92c9c582918daeb.jpg" alt="" />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://dailycoin.com/wp-content/uploads/2024/02/Andrew_Tate_web.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://tse2.mm.bing.net/th/id/OIP.DmsIswdRr3OLtfVkyM7qoQHaHZ?cb=thfc1&w=640&h=639&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://i.pinimg.com/736x/a0/71/70/a07170d56bf4a060b76050829b06542a.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://i.pinimg.com/originals/ea/a4/f8/eaa4f8ea08553c99d92c9c582918daeb.jpg" alt="" />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://dailycoin.com/wp-content/uploads/2024/02/Andrew_Tate_web.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://tse2.mm.bing.net/th/id/OIP.DmsIswdRr3OLtfVkyM7qoQHaHZ?cb=thfc1&w=640&h=639&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://i.pinimg.com/736x/a0/71/70/a07170d56bf4a060b76050829b06542a.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://i.pinimg.com/originals/ea/a4/f8/eaa4f8ea08553c99d92c9c582918daeb.jpg" alt="" />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://dailycoin.com/wp-content/uploads/2024/02/Andrew_Tate_web.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://tse2.mm.bing.net/th/id/OIP.DmsIswdRr3OLtfVkyM7qoQHaHZ?cb=thfc1&w=640&h=639&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://i.pinimg.com/736x/a0/71/70/a07170d56bf4a060b76050829b06542a.jpg" alt="" />
              </div>
              <div className="col-md-3">
                <img className='w-75' style={{height:"100px"}} src="https://i.pinimg.com/originals/ea/a4/f8/eaa4f8ea08553c99d92c9c582918daeb.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landingpage