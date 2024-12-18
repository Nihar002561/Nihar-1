import React, { useState } from 'react'

function Profile() {

    const [user,setuser] = useState({
        Firstname: "",
        Lastname: "",
        Username: "",
        Emailaddress: "",
        Gender: "",
        City: "",
    })
    function handleSubmit(){
        console.log(user);
    }

    function handlechange(e){
        const {name, value} = e.target
        setuser({...user, [name]: value})
    }

    console.log(user);

  return (
    <form className="container col-md-6 border border-black p-5" noValidate>
        <h2 className='container col-md-6'>Profile Page</h2>
        <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">First name</label>

            <input type="text" name="Firstname"
            value={user.Firstname}
            onChange={(e) => handlechange(e)}
             className="form-control" id="validationCustom01"  required />
            {/* <div className="valid-feedback">Looks good!</div> */}
        </div>

        <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">Last name</label>
            <input type="text" name="Lastname"
            value={user.Lastname}
            onChange={(e) => handlechange(e)}
             className="form-control" id="validationCustom02"  required />
            {/* <div className="valid-feedback">Looks good!</div> */}
        </div>

        <div className="col-md-4">
            <label htmlFor="validationCustomUsername" className="form-label">Username</label>
            <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" name="Username"
                value={user.Username}
                onChange={(e) => handlechange(e)}
                 className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                {/* <div className="invalid-feedback">Please choose a username.</div> */}
            </div>
        </div>

        <div className="col-md-4 mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="Emailaddress"
            value={user.Emailaddress}
            onChange={(e) => handlechange(e)}
             className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div>
            <p>Gender</p>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="Gender"
                onChange={(e) => handlechange(e)}
                 id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="Gender"
                onChange={(e) => handlechange(e)}
                 id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
            </div>
        </div>


        <div className="col-md-4">
            <label htmlFor="validationCustom03" className="form-label">City</label>
            <input type="text" name="City"
            value={user.City}
            onChange={(e) => handlechange(e)}
             className="form-control" id="validationCustom03" required />
            {/* <div className="invalid-feedback">Please provide a valid city.</div> */}
        </div>

        
        <div className="col-12 m-3">
            <button className="btn btn-primary" onClick={handleSubmit}>Submit form</button>
        </div>
    </form>

  )
}

export default Profile
