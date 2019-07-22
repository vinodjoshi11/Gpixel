import React  from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import 'react-animated-slider/build/horizontal.css';
import './index.css';
import PropTypes from 'prop-types';

class carousel extends React.Component {
  render() {
    return (  
      <section id="intro" style={divStyle}  > 
        
		<Slider className="slider-wrapper" autoplay={3000}>
			{this.props.content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button onClick={this.props.handleRead}>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
    </section>
    );
  }
}
carousel.propTypes={
	handleRead:PropTypes.func,
    currentUserData: PropTypes.object.isRequired,
}
const divStyle = {
  fontSize: '15px',
  textAlign: 'center',
  background:'../images/slide1.png'
};
export default carousel;