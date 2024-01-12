import React from 'react';

const VideoCard = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  };

  const horizontalContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
  };

  const cardStyle = {
    width: '300px',
    height: '300px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '10px',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const textStyle = {
    marginTop: '10px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={horizontalContainerStyle}>
        {/* VideoCard 1 */}
        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <video style={videoStyle} controls>
              <source src="your_video_url1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div style={textStyle}>
            <h3>Video Title 1</h3>
            <p>Description for Video 1.</p>
          </div>
        </div>


        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <video style={videoStyle} controls>
              <source src="your_video_url1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div style={textStyle}>
            <h3>Video Title 1</h3>
            <p>Description for Video 1.</p>
          </div>
        </div>


        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <video style={videoStyle} controls>
              <source src="your_video_url1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div style={textStyle}>
            <h3>Video Title 1</h3>
            <p>Description for Video 1.</p>
          </div>
        </div>

        {/* VideoCard 2 */}
        <div style={cardContainerStyle}>
          <div style={cardStyle}>
            <video style={videoStyle} controls>
              <source src="your_video_url2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div style={textStyle}>
            <h3>Video Title 2</h3>
            <p>Description for Video 2.</p>
          </div>
        </div>
      </div>

      
      
      

      {/* Additional VideoCard components can be added similarly */}
    </div>
  );
};

export default VideoCard;
