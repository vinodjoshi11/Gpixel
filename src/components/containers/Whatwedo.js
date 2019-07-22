import React  from 'react';
import Slider from "react-slick";

class mywork extends React.Component {
  handleClick = () =>  {
     console.log('ssss')
  } 
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (  
      <section id="speakers" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>We build eLearning programs to improve employee performance, increase revenue,  and reduce training expenditure, to help you maximize your return on training investment. Regardless of the tools and technologies used, our eLearning solutions include a mix of dynamic content, rich media, and opportunities for learners to apply knowledge in a virtual environment.</p>
        </div> 
        <div className="row">
        <div className="col-md-12">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
           </Slider>
        </div>
        </div>
      </div> 
    </section>
    );
  }
}

export default mywork;