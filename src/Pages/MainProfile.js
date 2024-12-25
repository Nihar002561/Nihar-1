import React from 'react'
import { Link } from 'react-router-dom'

function MainProfile() {
  return (
    <div className='Profilepage'>
    <div className="container1 rounded-3 ">
      <div className="box w-100 d-inline-block p-3 bg-secondary">
        <div className="mainbox rounded-circle mt-5 mx-3 pt-3">
          <img src="https://st2.depositphotos.com/1537427/5859/v/950/depositphotos_58597599-stock-illustration-male-user-icon.jpg" alt="" />
        </div>
        <div className="name ps-4">
          <h4 className="pt-5 mt-5 ">Nainesh Gevariya</h4>
          <h6 className="professon pe-1 ">
            full stack developer and software developer{" "}
          </h6>
          <p>Surat,gujarat,india</p>
        </div>
      </div>
      <div className="buttons mt-3 ms-4">
            <button type="button" className="btn btn-primary btn-rounded me-3 border-black">Open to</button>
            <button type="button" className="btn btn-outline-primary border-primary me-3">Add Profile Section</button>
            <button type="button" className="btn btn-outline-primary  me-3">Enhance Profile</button>
            <button type="button" className="btn btn-outline-secondary border-black">Resource</button>
      </div>

      <div className="box2 d-flex mt-5">
        <div className="box3 border-blac ms-4 me-5">
          <h6 className="b2 my-0 mt-2 pt-2 px-4">
          Show recruiters you're open to work --- you
          </h6>
          <p className="b3 my-0 px-4">control who sees this</p>
          <h6 className="b4 py-0 px-4 text-primary"><a class="link-opacity-100" href="#">Get started</a></h6>
        </div>
        <div className="box4 border-blac ms-5 ">
          <h6 className="b2 my-0 mt-2 pt-2 px-4">
          Share that you're hiring and attract qualified
          </h6>
          <p className="b3 my-0 px-4">candidates</p>
          <h6 className="b4 pt-1 px-4 text-primary"><a class="link-opacity-100" href="#">Get started</a></h6>
        </div>
      </div>
    </div>

                              {/*-------------------- Box 2 --------------------*/}

    <div className="box5 mt-2 rounded-3 ">
        <h4 className="ms-5 mt-3">Analytics</h4>
            <p className="views ms-4">
                <i class="fa-solid fa-eye mx-2 ms-4"></i>private to you
            </p>
          <div className="main box2 d-flex">
                <div className="viewsprofile">
                    <h6 className="ms-5">
                        <i class="fa-solid fa-users"></i> <a class="link-opacity-100" href="#">259 profile views</a>
                    </h6>
                    <p className="p1 ms-5">
                       Discover who's viewed your <br /> profile.
                    </p>
                  </div>
            
            <div className="viewsprofile">
                  <h6 className="ms-5">
                      <i class="fa-solid fa-chart-simple pe-2"></i><a class="link-opacity-100" href="#">9,127 postimpressions</a>
                      </h6>
                      <p className="p2 ms-5">
                        check out who's engaging with <br /> your posts.
                      </p>
              </div>
            </div>
            <button className="my-4 justify-content-center w-100 rounded-2 ">
            <a class="link-opacity-100 text-black" href="#">show all 5 resources</a> <i class="fa-solid fa-arrow-right"></i>
              </button>
          </div>
       

                              {/* // -------------------- Box 3 ------------------- */}

         <div className="box6 mt-5 rounded-3">
                <div className='icon1 '>
                    <Link className='nav=link-active' to = "/experience-plus">
                        <i class="fa-solid fa-plus pe-4"></i>
                    </Link>
                    <Link className='nav=link-active' to = "/experience-edit">
                        <i class="fa-solid fa-pen"></i> 
                    </Link>
                </div>
          </div>

    </div>
  )
}

export default MainProfile
