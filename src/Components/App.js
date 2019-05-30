import React from "react";
import MainVideo from "./MainVideo";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <MainVideo />
      </div>
    );
  }
}

export default App;
