import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import AboutUs from '../About/About'
import Courses from '../Courses/Courses'
import ContactUs from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Services/>
      <AboutUs/>
      {/* <Courses/> */}
      <Testimonials/>
      <ContactUs/>
      <Footer/>


       
    </>
  )
}

export default Home