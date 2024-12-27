import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Experienceplus() {

    const[title,setTitle] = useState("");
    const[employmenttype,setEmploymenttype] = useState("");
    const[companyororganization,setCompanyororganization] = useState("");
    const[startdate,setStartdate] = useState("");
    const[enddate,setEnddate] = useState("");

  return (
    <form className="container2 col-md-6">
      <div className="exadd">
        <h3 className="ax mb-5">Add Experience</h3>
        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title*
          </label>
          <input
            type="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder='Ex:Retail Sales Manager'
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
            Employment type
          </label>
          <select className="form-select" 
          value={employmenttype}
          onChange={(e) => setEmploymenttype(e.target.value)}
          aria-label="Default select example">
            <option selected>Please Select</option>
            <option value={1}>Please Select</option>
            <option value={2}>Full-time</option>
            <option value={3}>Part-time</option>
            <option value={4}>Self-employed</option>
            <option value={5}>Freelance</option>
            <option value={6}>Internship</option>
            <option value={7}>Trainee</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Company or organization*
          </label>
          <input
            type="title"
            value={companyororganization}
           onChange={(e) => setCompanyororganization(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder='Ex:Microsoft'
            aria-describedby="emailHelp"
          />
        </div>

        <div className='maidate d-flex'>
            <div className="mb-4 col-md-6">
        <label htmlFor="exampleInputEmail1" className="form-label">
            Start date*
          </label>
          <select className="form-select " 
          value={startdate}
          onChange={(e) => setStartdate(e.target.value)}
          aria-label="Default select example">
            <option selected>Month</option>
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>           
          </select>
          </div>
          
            <div className='mb-4 col-md-6 ps-3 mt-2'>
            <label htmlFor="exampleInputEmail1" className="form-label">
            
          </label>
            <select className="form-select" 
            value={startdate}
            onChange={(e) => setStartdate(e.target.value)}
            aria-label="Default select example">
            <option selected>Year</option>
            <option value={1}>2000</option>
            <option value={2}>2001</option>
            <option value={3}>2002</option>
            <option value={4}>2003</option>
            <option value={5}>2004</option>
            <option value={6}>2005</option>
            <option value={7}>2006</option>
            <option value={8}>2007</option>
            <option value={9}>2008</option>
            <option value={10}>2009</option>
            <option value={11}>2010</option>
            <option value={12}>2011</option>
            <option value={13}>2012</option>
            <option value={14}>2013</option>
            <option value={15}>2014</option>
            <option value={16}>2015</option>
            <option value={17}>2016</option>
            <option value={18}>2017</option>
            <option value={19}>2018</option>
            <option value={20}>2019</option>
            <option value={21}>2020</option>
            <option value={22}>2021</option>
            <option value={23}>2022</option>
            <option value={24}>2023</option>
            <option value={25}>2024</option>               
          </select>
        </div>
      </div>

      <div className='maidate1 d-flex'>
            <div className="mb-4 col-md-6">
        <label htmlFor="exampleInputEmail1" className="form-label">
            End date*
          </label>
          <select className="form-select " 
          value={enddate}
          onChange={(e) => setEnddate(e.target.value)}
          aria-label="Default select example">
            <option selected>Month</option>
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>           
          </select>
          </div>
          
            <div className='mb-4 col-md-6 ps-3 mt-2'>
            <label htmlFor="exampleInputEmail1" className="form-label">
            
          </label>
            <select className="form-select" 
            value={enddate}
            onChange={(e) => setEnddate(e.target.value)}
            aria-label="Default select example">
            <option selected>Year</option>
            <option value={1}>2000</option>
            <option value={2}>2001</option>
            <option value={3}>2002</option>
            <option value={4}>2003</option>
            <option value={5}>2004</option>
            <option value={6}>2005</option>
            <option value={7}>2006</option>
            <option value={8}>2007</option>
            <option value={9}>2008</option>
            <option value={10}>2009</option>
            <option value={11}>2010</option>
            <option value={12}>2011</option>
            <option value={13}>2012</option>
            <option value={14}>2013</option>
            <option value={15}>2014</option>
            <option value={16}>2015</option>
            <option value={17}>2016</option>
            <option value={18}>2017</option>
            <option value={19}>2018</option>
            <option value={20}>2019</option>
            <option value={21}>2020</option>
            <option value={22}>2021</option>
            <option value={23}>2022</option>
            <option value={24}>2023</option>
            <option value={25}>2024</option>               
          </select>
        </div>
      </div>

        <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
            Where did youfind this job?
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Please Select</option>
            <option value={1}>Linkedin</option>
            <option value={2}>Company Website</option>
            <option value={3}>Indeed</option>
            <option value={4}>Other job sites</option>
            <option value={5}>Referral</option>
            <option value={6}>Contacted by recruiter</option>
            <option value={7}>Staffing agency</option>
            <option value={8}>Other</option>
          </select>
        </div>
      </div>
      <Link className='nav=link-active' to = "/MainProfile">
            <button className="butn1 btn btn-primary" >Save</button>
      </Link>
    </form>
  );
}

export default Experienceplus




