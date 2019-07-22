import React  from 'react';
import ourwork from '../../../public/images/06.png'
class Whoweare extends React.Component {
  render() {
    var style = {
      width: "100%",
      height: "400px",
      backgroundImage: "url(" + { ourwork } + ")"
    };
    return (  
      <section id="Whoweare" className="Whoweare" style={{ background: "url("+ourwork+")100% 100% / cover"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center section-header">
              <h1 className="text-center">Who we are</h1>
              <p>We're Gpixel - Partner with Us to Transform Your Learning</p> 
            </div> 
            <div className="col-lg-8 offset-md-2 text-center">
               <p>We're a Learning and Performance Support solutions provider with a 
                focus on transforming learning for you - keeping it alive, relevant and impactful!</p>
            </div> 
          </div>
        </div>
      </section>
    );
  }
}

export default Whoweare;