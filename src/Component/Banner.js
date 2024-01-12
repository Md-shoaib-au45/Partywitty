import React from 'react';

function Banner() {
  return (
    <div className='LandingPage-fifthBox' data-aos-duration="1500">
      <h1 style={{ marginTop: "70px", color: "black" }}>Powered By Bringmark</h1>
      <div style={{ width: "80%" }}>
        {/* Replace GradientBackgroundTypography with your actual styling */}
        <div style={{ background: "linear-gradient(to right, #ff8a00, #e52e71)", padding: "10px", borderRadius: "8px", marginBottom: "20px" }}>
          {/* Replace IconWrapper with your actual icon component or styling */}
          <span style={{ fontSize: "24px", marginRight: "10px" }}>Your Icon</span>
          <br />
          {/* Replace ContentTypography with your actual styling */}
          <p style={{ color: "white" }}>
            Bringmark is one of the leading software development & AR/VR companies based in India.
            With 4+ years of experience in the industry, Bringmark served more than 2,145 clients worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
