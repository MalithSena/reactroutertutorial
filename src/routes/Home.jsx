import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Offcanvas, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';

const Home = () => {
  return (
    <>

 
{[false].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
       
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}

    

    {/* <!-- pageloader --> */}
    {/* <div id="loader">
      <div className="loader">
        <div className="sk-child sk-dot1"></div>
        <div className="sk-child sk-dot2"></div>
      </div>
    </div> */}
    {/* <!-- / #pageloader --> */}

    <nav id="contact-menu" className="navigation navigation-hidden navigation-portrait">
      <div className="nav-menus-wrapper">
        <div className="header-info-item clearfix">
          <p className="header-info-title">Contact Us</p>
          <ul>
            <li><span className="ti-map-alt"></span> 610 Broadway New York, NY 10012</li>
            <li><span className="ti-headphone-alt"></span> <a href="tel:1800-2345-5677">1800-2345-5677</a></li>
            <li><span className="ti-mobile"></span> <a href="tel:1800-2345-5678">1800-2345-5678</a></li>
            <li><span className="ti-email"></span> <a href="mailto:info@voyagetime.com">info@voyagetime.com</a></li>
          </ul>
        </div>
        <div className="header-info-item clearfix">
          <p className="header-info-title">Work Time</p>
          <ul>
            <li><span className="ti-alarm-clock"></span> Working Days  9AM - 9PM</li>
            <li><span className="ti-alarm-clock"></span> Saturday  10AM - 8PM</li>
            <li><span className="ti-alarm-clock"></span> Sunday  Closed</li>
          </ul>
        </div>
        <div className="header-info-item clearfix">
          <p className="header-info-title">Follow Us</p>
          <ul className="header-social">
            <li><a href="#"><span className="ti-facebook"></span></a></li>
            <li><a href="#"><span className="ti-instagram"></span></a></li>
            <li><a href="#"><span className="ti-twitter"></span></a></li>
            <li><a href="#"><span className="ti-youtube"></span></a></li>
            <li><a href="#"><span className="ti-pinterest"></span></a></li>
          </ul>
        </div>
      </div>
    </nav>

        <header>
      
      <div className="main-header header-bg-0">
        <div className="header-width container-fluid">
          <div className="row">
            <div className="col-md-4 col-4">
              <div className="main-header-logo">
                <a href="index.html"><img width="130" src="img/logo-white.png" alt="Site logo" /></a>
              </div>
            </div>
            <div className="col-md-8 col-8">
              <div className="right-header">
                <div className="clearfix float-right contact-head">
                <a href="tel:1800-2345-5677">1800-2345-5677</a>
                <button className="btn-show navbar-toggler float-right btn-contact"><span className="ti-menu"></span></button>
              </div>
              <nav id="navigation" className="navigation mt-10">
                <div className="nav-toggle">Menu</div>
                  <div className="nav-search">
                    <div className="nav-search-button">
                     <span className="ti-search"></span>
                    </div>
                    <form>
                      <div className="nav-search-inner">
                        <input type="search" name="search" placeholder="Type and hit ENTER"/>
                      </div>
                    </form>
                  </div>

                  <div className="nav-menus-wrapper">

                    <ul className="nav-menu align-to-right">
                      <li><a className="active" href="#">Home</a>
                        <ul className="nav-dropdown">
                          <li><a href="index.html">Home Style 1</a></li>
                          <li><a href="home-style-2.html">Home Style 2</a></li>
                          <li><a href="home-style-3.html">Home Style 3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Tours</a>
                        <ul className="nav-dropdown">
                          <li><a href="#">Tour List</a>
                            <ul className="nav-dropdown">
                              <li><a href="tour-list-1.html">Tour List 1</a></li>
                              <li><a href="tour-list-2.html">Tour List 2</a></li>
                              <li><a href="tour-list-3.html">Tour List 3</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Tour Single</a>
                            <ul className="nav-dropdown">
                              <li><a href="tour-single-1.html">Tour Single 1</a></li>
                              <li><a href="tour-single-2.html">Tour Single 2</a></li>
                              <li><a href="tour-single-3.html">Tour Single 3</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Destinations</a>
                        <ul className="nav-dropdown">
                          <li><a href="destination-list-1.html">Destination List 1</a></li>
                          <li><a href="destination-list-2.html">Destination List 2</a></li>
                          <li><a href="destination-list-3.html">Destination List 3</a></li>
                          <li><a href="destination-list-4.html">Destination List 4</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Pages</a>
                        <ul className="nav-dropdown">
                          <li><a href="special-page-about-us.html">About Us</a></li>
                          <li><a href="slider-page.html">Slider Page</a></li>
                          <li><a href="simple-page.html">Simple Page</a></li>
                          <li><a href="coming-soon.html">Coming Soon</a></li>
                          <li><a href="special-page-404.html">404 Page</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog</a>
                        <ul className="nav-dropdown">
                          <li><a href="blog-page-1.html">Blog List 1</a></li>
                          <li><a href="blog-page-2.html">Blog List 2</a></li>
                          <li><a href="blog-single-page-1.html">Blog Single</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Elements</a>
                        <div className="megamenu-panel">
                          <div className="megamenu-lists">
                            <ul className="megamenu-list list-col-4">
                              <li><a href="elements-heading.html">Animated Headings</a></li>
                              <li><a href="elements-blockquotes.html">Blockquotes</a></li>
                              <li><a href="elements-dropcaps.html">Dropcaps</a></li>
                              <li><a href="elements-seporators.html">Seporators</a></li>
                            </ul>
                            <ul className="megamenu-list list-col-4">
                              <li><a href="elements-icons.html">Icons</a></li>
                              <li><a href="elements-buttons.html">Buttons</a></li>
                              <li><a href="elements-infography.html">Infography</a></li>
                              <li><a href="elements-call-to-action.html">Call-to-action</a></li>
                            </ul>
                            <ul className="megamenu-list list-col-4">
                              <li><a href="elements-testimonials.html">Testimonials</a></li>
                              <li><a href="elements-tabs.html">Tabs</a></li>
                              <li><a href="elements-team.html">Team</a></li>
                              <li><a href="elements-section-title.html">Section Title</a></li>
                            </ul>
                            <ul className="megamenu-list list-col-4">
                              <li><a href="elements-slider.html">Slider</a></li>
                              <li><a href="elements-accordions.html">Accordions</a></li>
                              <li><a href="elements-teasers.html">Image teasers</a></li>
                              <li><a href="elements-notification.html">Notification</a></li>
                            </ul>
                        
                          </div>
                        </div>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              
            </div>
          </div>
        </div> 
      </div>
    </header>
{/* 
    <!-- / header --> */}

    <div className="search-relative">
{/*       
      <!-- slider --> */}
       <div className="owl-carousel" id="fullscreen-slider">
        <div className="item height80vh" style={{"backgroundImage": "url('https://via.placeholder.com/1920x1280;)"}}>
          <div className="page-head-wrap">
            <div className="page-head-inner">
              <div className="page-head-caption container text-left">
                <div className="row justify-content-center">
                  <div className="col-8">
                    <h2 className="big-title mb-10 animate" data-animation="fadeInRight" data-timeout="800">Balangan Beach</h2>
                    <p className="animate mb-20" data-animation="fadeInLeft" data-timeout="800">VoyageTime is powerful Responsive Multipurpose HTML5 Template that helps you create Travel Agency / Portfolio / Blog / Gallery/ Whatever site best way.</p>
                    <a href="#" className="btn btn-1 animate" data-animation="fadeInUp" data-timeout="900">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item height80vh" style={{"backgroundImage": "url('https://via.placeholder.com/1920x1280;)"}}>
          <div className="page-head-wrap">
            <div className="page-head-inner">
              <div className="page-head-caption container text-right">
                <div className="row justify-content-center">
                  <div className="col-8">
                    <h2 className="big-title mb-10 animate" data-animation="fadeInDown" data-timeout="800">Maldives</h2>
                    <p className="animate mb-20" data-animation="fadeInLeft" data-timeout="800">VoyageTime is powerful Responsive Multipurpose HTML5 Template that helps you create Travel Agency / Portfolio / Blog / Gallery/ Whatever site best way.</p>
                    <a href="#" className="btn btn-1 animate" data-animation="fadeInUp" data-timeout="900">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item height80vh" style={{"backgroundImage": "url('https://via.placeholder.com/1920x1280;)"}}>
          <div className="page-head-wrap">
            <div className="page-head-inner">
              <div className="page-head-caption container text-left">
                <div className="row justify-content-center">
                  <div className="col-8">
                    <h2 className="big-title mb-10 animate" data-animation="fadeInUp" data-timeout="800">Cuba</h2>
                    <p className="animate mb-20" data-animation="fadeInLeft" data-timeout="800">VoyageTime is powerful Responsive Multipurpose HTML5 Template that helps you create Travel Agency / Portfolio / Blog / Gallery/ Whatever site best way.</p>
                    <a href="#" className="btn btn-1 animate" data-animation="fadeInUp" data-timeout="1200">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- / slider -->

      <!-- order form --> */}

      <div className="block-light-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- order form --> */}
              <div className="order-form p-relative animate" data-animation="fadeIn" data-timeout="1000">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-12">
                      {/* <!-- filter horizontal form --> */}
                      <form className="filter-form .filter-form-slider-h" method="POST">
                        <div className="form-row">
                          
                          <div className="form-group col-md-2">
                            <select className="form-control custom-select">
                              <option>I want to</option>
                              <option>UAE</option>
                              <option>Germany</option>
                              <option>USA</option>
                              <option>Spain</option>
                              <option>France</option>
                            </select>
                          </div>
                          <div className="form-group col-md-2 p-relative">
                             <input type="text" className="form-control" id="daterangepicker" name="date" value="" placeholder="Departure Date" />
                          </div>
                          <div className="form-group col-md-2">
                              <select className="form-control custom-select">
                              <option selected>Guest(s)</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                            </select>
                          </div>

                          <div className="form-group col-md-2 slider-margin">
                              <div className="slider-text">
                                <span className="text-left">Duration (days)</span>
                                <span className="float-right slider-date" id="duration-2">30</span>
                                <span className="float-right separator">-</span>
                                <span className="slider-date float-right" id="duration-1">1</span>
                              </div>
                              <input id="duration-input" type="text" name="duration" data-slider-min="1" data-slider-max="30" data-slider-step="1" data-slider-value="[1,30]"/>
                          </div>

                          <div className="form-group col-md-2 slider-margin">
                            <div className="slider-text">
                              <span className="slider-title">Price $</span>
                              <span className="float-right slider-date" id="budget-2">5000</span>
                              <span className="float-right separator">-</span>
                              <span id="budget-1" className="slider-date float-right">200</span>
                            </div>
                            <input id="budget-input" type="text" name="price" data-slider-min="200" data-slider-max="5000" data-slider-step="100" data-slider-value="[200,5000]"/>                    
                          </div>

                          <div className="form-group col-md-2">
                            <button type="submit" name="search_btn" className="btn btn-1 width100">Find</button>
                          </div>
                          
                        </div>
                      </form>
                      {/* <!-- / filter horizontal form --> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- / order form --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- / order form --> */}

    </div> 
    {/* <!-- / search-relative -->

    <!-- BLOCK popular --> */}

    <div className="main-block">
      <div className="container container-sm">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center block width100 mb-50 block-title">
              <h2>Popular Destinations</h2>
              <div className="separator"><span>Сhoose the the most popular destinations</span></div>
            </div>
          </div>
        </div>
        <div className="row">

          <div className="col-md-6 col-lg-6">
            <div className="category-item effect-2">
              <img src="https://via.placeholder.com/800x600" alt="img12" />
              <div className="caption">
                <div>
                  <p className="title">Australia</p>
                  <p className="description">Plan your adventures in Australia with our tours</p>
                </div>
                <a href="#">View more</a>
              </div>     
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="category-item effect-2">
              <img src="https://via.placeholder.com/800x600" alt="img12" />
              <div className="caption">
                <div>
                  <p className="title">Czech Republic</p>
                  <p className="description">Plan your adventures in Czech Republic with our tours</p>
                </div>
                <a href="#">View more</a>
              </div>     
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="category-item effect-2">
              <img src="https://via.placeholder.com/800x600" alt="img12" />
              <div className="caption">
                <div>
                  <p className="title">Norway</p>
                  <p className="description">Plan your adventures in Norway with our tours</p>
                </div>
                <a href="#">View more</a>
              </div>     
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="category-item effect-2">
              <img src="https://via.placeholder.com/800x600" alt="img12" />
              <div className="caption">
                <div>
                  <p className="title">UAE</p>
                  <p className="description">Sunrise shot of Downtown Dubai and Burj Khalifa</p>
                </div>
                <a href="#">View more</a>
              </div>     
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="category-item effect-2">
              <img src="https://via.placeholder.com/800x600" alt="img12" />
              <div className="caption">
                <div>
                  <p className="title">Poland</p>
                  <p className="description">Plan your adventures in Poland with our tours</p>
                </div>
                <a href="#">View more</a>
              </div>     
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="category-item effect-2">
              <img src="https://via.placeholder.com/800x600" alt="img12" />
              <div className="caption">
                <div>
                  <p className="title">France</p>
                  <p className="description">Plan your adventures in France with our tours</p>
                </div>
                <a href="#">View more</a>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- BLOCK / popular -->


    <!-- BLOCK advantage --> */}

    <div className="main-block bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center block width100 mb-30 block-title">
              <h2>How we work?</h2>
            </div>
          </div>
        </div>
        <div className="row">

          {/* <!-- Infography item style 1 --> */}
                <div className="col-md-4">
                  <div className="infography infography-1">
                    <div className="infography-icon">
                      <i className="ti-medall"></i>
                    </div>
                    <div className="infography-text">
                      <h4>Easy Fly</h4>
                      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure?</p>
                    </div>
                  </div>
                </div>
                {/* <!-- / Infography item style 1 -->

                <!-- Infography item style 1 --> */}
                <div className="col-md-4">
                  <div className="infography infography-1">
                    <div className="infography-icon">
                      <i className="ti-world"></i>
                    </div>
                    <div className="infography-text">
                      <h4>Any country</h4>
                      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- / Infography item style 1 -->

                <!-- Infography item style 1 --> */}
                <div className="col-md-4">
                  <div className="infography infography-1">
                    <div className="infography-icon">
                      <i className="ti-face-smile"></i>
                    </div>
                    <div className="infography-text">
                      <h4>Happy customres</h4>
                      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- / Infography item style 1 --> */}

        </div>
      </div>
    </div>

    {/* <!-- BLOCK / advantage -->


    <!-- BLOCK popular --> */}

    <div className="main-block">
      <div className="container container-sm">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center block width100 mb-50 block-title">
              <h2>Featured Tours</h2>
              <div className="separator"><span>Сhoose the tour yourself and get a 5% discount!</span></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="tour-item">
              <a href="#">
                <div className="img-wrap">
                  <img src="https://via.placeholder.com/800x600" alt="" />
                  <p className="price">1450 $</p>
                </div>
              </a>
              <div className="caption">
                <a href="#"><p className="title">Maldives Adventure Tour</p></a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="time"><span className="ti-time"></span>10 days</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="tour-item">
              <a href="#">
                <div className="img-wrap">
                  <img src="https://via.placeholder.com/800x600" alt="" />
                  <p className="price"><span>1500 $</span><br />1250 $</p>
                </div>
              </a>
              <div className="caption">
                <a href="#"><p className="title">Maldives Adventure Tour</p></a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="time"><span className="ti-time"></span>15 days</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="tour-item">
              <a href="#">
                <div className="img-wrap">
                  <img src="https://via.placeholder.com/800x600" alt="" />
                  <p className="price">1450 $</p>
                </div>
              </a>
              <div className="caption">
                <a href="#"><p className="title">Maldives Adventure Tour</p></a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="time"><span className="ti-time"></span>7 days</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="tour-item">
              <a href="#">
                <div className="img-wrap">
                  <img src="https://via.placeholder.com/800x600" alt="" />
                  <p className="price">1450 $</p>
                </div>
              </a>
              <div className="caption">
                <a href="#"><p className="title">Maldives Adventure Tour</p></a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="time"><span className="ti-time"></span>10 days</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="tour-item">
              <a href="#">
                <div className="img-wrap">
                  <img src="https://via.placeholder.com/800x600" alt="" />
                  <p className="price"><span>1500 $</span><br />1250 $</p>
                </div>
              </a>
              <div className="caption">
                <a href="#"><p className="title">Maldives Adventure Tour</p></a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="time"><span className="ti-time"></span>15 days</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="tour-item">
              <a href="#">
                <div className="img-wrap">
                  <img src="https://via.placeholder.com/800x600" alt="" />
                  <p className="price">1450 $</p>
                </div>
              </a>
              <div className="caption">
                <a href="#"><p className="title">Maldives Adventure Tour</p></a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="time"><span className="ti-time"></span>7 days</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    {/* <!-- BLOCK / popular --> */}

    <div className="ctoa text-center parallax-container color-white" style={{"backgroundImage": "url('https://via.placeholder.com/1920x1280')"}}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-20">Do you have any questions ?</h2>
          <p className="mb-30">Necessitatibus enim corrupti ullam voluptatum provident deserunt natus reprehenderit, inventore, tempore aut neque cupiditate, aspernatur! Quibusdam aliquid dolor a culpa, officiis quisquam.</p>
          <a className="btn btn-1" href="#">Contact Us</a>
        </div>
      </div>
    </div>
{/* 
    <!-- BLOCK news --> */}

    <div className="main-block">
      <div className="container container-sm">

        <div className="row">
          <div className="col-md-12">
            <div className="text-center block width100 mb-50 block-title">
              <h2>Our Blog</h2>
              <div className="separator"><span>Checkout latest news from our blog</span></div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-md-6 col-lg-4">
            <div className="blog-item effect-1">
              <a className="block" href="#">
                <img src="https://via.placeholder.com/800x600" alt="img12" />
              </a>
              <div className="caption clearfix">
                <a href="#">
                  <p className="title">The Best Travel Blog Ever</p>
                </a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="author"><span className="ti-user"></span>By TravelUser</p>
                <ul className="tags">
                  <li><a href="#">Photos</a></li>
                  <li><a href="#">Trip</a></li>
                  <li><a href="#">Happy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="blog-item effect-1">
              <a className="block" href="#">
                <img src="https://via.placeholder.com/800x600" alt="img12" />
              </a>
              <div className="caption clearfix">
                <a href="#">
                  <p className="title">The Best Travel Blog Ever</p>
                </a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="author"><span className="ti-user"></span>By TravelUser</p>
                <ul className="tags">
                  <li><a href="#">Photos</a></li>
                  <li><a href="#">Trip</a></li>
                  <li><a href="#">Happy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="blog-item effect-1">
              <a className="block" href="#">
                <img src="https://via.placeholder.com/800x600" alt="img12" />
              </a>
              <div className="caption clearfix">
                <a href="#">
                  <p className="title">The Best Travel Blog Ever</p>
                </a>
                <p className="date"><span className="ti-calendar"></span>August 20, 2019</p>
                <p className="author"><span className="ti-user"></span>By TravelUser</p>
                <ul className="tags">
                  <li><a href="#">Photos</a></li>
                  <li><a href="#">Trip</a></li>
                  <li><a href="#">Happy</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* <!-- BLOCK / news --> */}

    <footer className="dark-footer"  style={{"backgroundImage": "url('https://via.placeholder.com/1920x1280')"}}>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-item">
                <img width="110" src="img/logo-white.png" alt="Logo" />
                <div className="mt-20 mb-20">
                  <button type="button" className="btn btn-1 btn-sm" data-toggle="modal" data-target="#newsletterModal">
                    Newsletter signup
                  </button>
                  {/* <!-- Modal --> */}
                  <div className="modal fade bd-example-modal-sm" id="newsletterModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="exampleModalLabel">Newsletter Signup</h4>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form id="subscribe-form" className="form-block">
                            <div className="form-group mt-20 subscribe-form">
                              <small id="emailHelp" className="form-text text-muted">Subscribe now and recieve a 50% discount on your next tour booking</small>
                              <label>Email address</label>
                              <input type="email" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="mt-10 mb-10 float-right">
                              <button type="button" className="btn btn-2 btn-sm" data-dismiss="modal">Close</button>
                              <button type="submit" className="btn btn-1 btn-sm">Sign Up</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-item">
                <ul className="footer-menu">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Catalog</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <p className="mt-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, aperiam consequuntur excepturi ab maiores reiciendis quo corporis maxime hic pariatur rerum deleniti deserunt aliquid modi, aliquam delectus veniam debitis molestiae.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-item">
                <ul className="mb-20">
                  <li>1800-2345-5677</li>
                  <li className="mt-10"><a href="mailto:">info@voyagetime.com</a></li>
                  <li className="mt-10">610 Broadway New York, NY 10012</li>
                </ul>
                
              </div>

              <div className="footer-item">
                <ul className="footer-social mt-20">
                  <li><a target="_blank" href="#"><i className="fab fa-pinterest"></i></a></li>
                  <li><a target="_blank" href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a target="_blank" href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a target="_blank" href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a target="_blank" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a target="_blank" href="#"><i className="fab fa-tumblr"></i></a></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>@ 2019 VoyageTime</p>
            </div>
            <div className="col-md-6 text-r mobile-left">
              <p><img width="200" src="img/visa-mastercard-paypal.png" alt="Visa Mastercard Paypal" /></p>
            </div>
          </div>
        </div>
      </div>
    </footer>

   

  

    </>
  )
}

export default Home