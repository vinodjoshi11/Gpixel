import React  from 'react';

class About extends React.Component {
  render() {
    return (  
  <section id="featured"> 
    <div id="sequence-theme">
      <img className="prev" src="img/bt-prev.png" alt="Previous"/>
      <img className="next" src="img/bt-next.png" alt="Next"/>
      <div className="container">
        <div className="row">
          <div className="span12">
            <div id="sequence">
              <ul>
                <li className="animate-in">
                  <div className="info letter-container">
                    <h2 className="fade">Hiya I am selecao</h2>
                  </div>
                  <h4 className="subtitle">Mei ea persius alienum errem audiam eum id impetus bonorum</h4>
                  <div className="bottomup">
                    <img src="img/slider/parallax/img-1.png" alt=""/>
                  </div>
                </li>
                <li className="animate-in">
                  <div className="info letter-container">
                    <h2 className="fade">We creates unique website</h2>
                  </div>
                  <h4 className="subtitle">Lorem ipsum dolor sit amet viris torquatos ad vis invidunt singulis</h4>
                  <div className="lefttop">
                    <img src="img/slider/parallax/img-2.png" alt=""/>
                  </div>
                </li>
                <li className="animate-in">
                  <div className="info letter-container">
                    <h2 className="fade">With latest technology</h2>
                  </div>
                  <h4 className="subtitle">His at quod impedit eu zril quando perfecto mel sed eu eros debet.</h4>
                  <div className="righttop">
                    <img src="img/slider/parallax/img-3.png" alt=""/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </section> 
    );
  }
}

export default About;