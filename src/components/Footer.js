import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{backgroundColor:'#182737 !important'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src="https://media.licdn.com/dms/image/D4D35AQFr3SX1BLkseA/profile-framedphoto-shrink_400_400/0/1704919610807?e=1705755600&v=beta&t=zTxd179UYt8kVNSBa-JTMKxGQ2UpRZAoYNDQ9dGz9WQ" 
              className="img-fluid rounded-circle mb-2"
              style={{ height: '45px' }}
              alt='not available'
            />
            <h5 className="mb-0">Sushobhan Dastidar</h5>
            <p className="small">sushobhandastidar1@gmail.com</p>
          </div>
          <div className="col-md-8 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <h5 className="mb-3">Connect with Me</h5>
              
              <a href="https://www.linkedin.com/in/sushobhan-dastidar-327590271/" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
              <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Sushobhan-max" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
              <i className="fa-brands fa-github"></i>
              </a>
              <a href="sushobhandastidar1@gmail.com" target="_blank" rel="noopener noreferrer" className="text-light mx-3">
              <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
