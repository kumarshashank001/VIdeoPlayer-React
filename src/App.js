import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showVideo: false
    };
  }

  handleVideo = () => {
    this.setState({
      showVideo: !this.state.showVideo
    });
  };

  render() {
    return (
      <div>
        {this.state.showVideo == false && (
         <span> 
           <h1>Shashank Kumar</h1>
          <p>
            React Project <br />
            Date: 08-08-2021
          </p>
          <div
            onClick={this.handleVideo}
            style={{
              backgroundColor: "grey",
              display: "inline-block",
              color: "white",
              padding: 20,
              margin: 40,
              borderRadius: 10
            }}
          >
            Taarak Mehta Ka Ooltah Chashmah

          </div>
          
          </span>
        )}
        {this.state.showVideo == true && (
          <span>
            <iframe
              //width="560"
              // height="315"
              style={{
                width: "100%",
                height: "100vh"
              }}
              src="https://www.youtube.com/embed/kiBv0vYnQ7I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            
            <button
              onClick={this.handleVideo}
              style={{
                position: "absolute",
                left: 10,
                top: 100
              }}
            >
              back
            </button>
          </span>
        )}
      </div>
    );
  }
}
