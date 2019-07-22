import React, { Component } from 'react';
//import Map from "./Map"
class Footer extends Component {
  render() {
    return (
        <footer id="footer">
          <div className="container">
            <div className="row content mbr-white">
                <div className="col-12 col-md-3 mbr-fonts-style display-7">
                    <p className="mbr-text">
                        <strong>Address</strong>
                        <br/>
                        <br/>C265 Pandav Nagar
                        <br/>City, delhi 110092
                        <br/>
                        <br/>
                        <br/><strong>Contacts</strong>
                        <br/>
                        <br/>Email: vinodjoshi804@gmail.com
                        <br/>Phone: +9818966287
                    </p>
                </div>
                <div className="col-12 col-md-3 mbr-fonts-style display-7">
                    <p className="mbr-text">
                        <strong>Links</strong>
                        <br/>
                        <br/><a className="text-white" href="https://mobirise.com/">Website builder</a>
                        <br/><a className="text-white" href="https://mobirise.com/mobirise-free-win.zip">Download for Windows</a>
                        <br/><a className="text-white" href="https://mobirise.com/mobirise-free-mac.zip">Download for Mac</a>
                        <br/>
                        <br/><strong>Feedback</strong>
                        <br/>
                        <br/>Please send us your ideas, bug reports, suggestions! Any feedback would be appreciated.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="google-map">
                    </div>
                </div>
            </div>
            <div className="footer-lower">
                <div className="media-container-row">
                    <div className="col-sm-12">
                        <hr/>
                    </div>
                </div>
                <div className="media-container-row mbr-white">
                    <div className="col-sm-6 copyright">
                        <p className="mbr-text mbr-fonts-style display-7">
                            © Copyright 2019 Footer - All Rights Reserved
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="social-list align-right">
                            <div className="soc-item">
                                <a href="https://twitter.com/mobirise" target="_blank">
                                    <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social" media-simple="true"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank">
                                    <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social" media-simple="true"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://www.youtube.com/c/mobirise" target="_blank">
                                    <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social" media-simple="true"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://instagram.com/mobirise" target="_blank">
                                    <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social" media-simple="true"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://plus.google.com/u/0/+Mobirise" target="_blank">
                                    <span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social" media-simple="true"></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="https://www.behance.net/Mobirise" target="_blank">
                                    <span className="socicon-behance socicon mbr-iconfont mbr-iconfont-social" media-simple="true"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </footer>
    );
  }
}

export default Footer;