import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";


export const Test = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="project" id="projects">
        <div className="container-projects">
            <div className="row">
                <div className="col-12" size={12} sm={6} md={4}>
                    <div className="skill-bx wow zoomIn">
                        <h2>Projects</h2>
                        <br></br>
                        <p>Here are a few past projects I've worked on. For more projects, I invite you to visit my Github account.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className='project-img '>
                                <img src={projImg3} className='source-img' alt="Image" />
                               <div className='img-overlay'>
        
                                <a   className='img-title' href='https://fondationtunisie.org/en/'> FONDATION TUNISIE</a>
                          
                               </div>
                               <div className='img-description'>
                                Gatsby, React
                                   </div>
                            </div>
                            <div className='project-img '>
                                <img src={projImg2} className='source-img' alt="Image" />
                                <div className='img-overlay'>
                                  <a href='https://preview.atelier.eyespot.agency/' className='img-title'>
                                      ATELIER
                                  </a>
                                
                               </div>
                               <div className='img-description'>
                                  Gatsby, React
                                  </div>
                            </div>
                            <div className='project-img '>
                                <img src={projImg1} className='source-img' alt="Image" />
                                 <div className='img-overlay'>
                                 <a href='https://preview.onyva.eyespot.agency/' className='img-title'>
                                      ONYVA
                                  </a>
                        
                               </div>
                               <div className='img-description'>
                                   Gatsby, React
                                   </div>
                            </div>
                          
                           
                          
                        </Carousel>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
