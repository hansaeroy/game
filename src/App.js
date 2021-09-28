import React from "react";
import Show from "./Show.js";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <header id="header" className="alt">
            <div className="inner">
              <p>data center</p>
              <div className="box">
                <div className="loader3"></div>
              </div>
            </div>
          </header>
        ) : (
          <Show />
        )}
      </div>
    );
  }
}

export default App;
