import React, { Component } from 'react'
import RenderMovies from './RenderTask'
import Navbar from './Navbar';
import '../Css_Files/TaskList.css'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import SearchBarr from './SearchBarr';
import Selectors from './Selectors';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


export default class TaskList extends Component {
  Hide = false;
  constructor()
  {
    super();
    this.Hide = false;
    this.state ={
      search: "",
    };  
    this.hidefunctionality = this.hidefunctionality.bind(this);
  }
  handleCallback = (Data) => {
    this.setState({ name: Data });
    window.location.reload(false);
  }
  hidefunctionality(message)
  {
      alert("clicked");
      this.Hide = true
  }
  render() {
      return (
        <div>
          <Navbar />
          <div id="flexbox">
            <div id="searchbarr">
              <SearchBarr />
            </div>
            <div id="selectors">
              <Selectors></Selectors>
            </div>
          </div>
          <div id="boxx">
            <RenderMovies parent={this.Hide} />
          </div>
        </div>
      );
    
  }
}
