import React from 'react'

const Contact = () => {
  return (
    <div className='container' style={{height:'100vh'}}>
        <div className="row justify-content-center ">
          <div className="col-lg-8">

            <div className="country-info">
            </div>

            <div className="personal-info">
            </div>

            <div className="contact-info d-flex flex-column align-items-center justify-content-center">
              <h2 className="text-center mb-4">Contact Information</h2>

              <div className="row">
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <h4>Email:</h4>
                  <p>sushobhandastidar1@gmail.com</p>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <h4>Phone:</h4>
                  <p>+91 6296169601</p>
                </div>
              </div>

              <h4>Address:</h4>
              <p>
                Nadia Dist<br />
              </p>

              <h4>Social Media:</h4>
              <p>
                <a href="https://twitter.com/yourhandle" rel="noreferrer" target="_blank">Github</a><br />
                <a href="https://github.com/Sushobhan-max" rel="noreferrer" target="_blank">LinkedIn</a>
              </p>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Contact