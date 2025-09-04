import "./ServiceHeader.css"


const ServiceHeader = () => {
  return (
    <>
      <header className="header-area header-sticky background-header2">  
        <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
                  <img className="image_logo" src="/images/logo.png" />
              {/* Menu */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#courses">Courses</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#events">Blogs</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>

              {/* Mobile Menu Trigger */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
 
      </header> 
    </>
  )
}

export default ServiceHeader