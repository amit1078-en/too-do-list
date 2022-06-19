import React, { Component } from 'react';
import "../Css_Files/SearchBarr.css";
import '../Css_Files/TaskList.css'
import SearchBar from "material-ui-search-bar";



class SearchBarr extends Component
{
  
  constructor() 
  {
    super();
  
    this.state={
      value:''
    };
    if(localStorage.getItem('search'))
    {
      this.state.value = localStorage.getItem('search');
    }
    else
    {
      localStorage.setItem('search',"");
    }
    // this.doSomethingWith.bind(this);
  }
  doSomethingWith(search)
  {
    localStorage.setItem('search',search);
    window.location.reload(false);
  }

  render()
  {
    return (
      <>
        <SearchBar
            placeholder={localStorage.getItem('search')}
            value={this.state.value}
            onChange={(newValue) => this.setState({ value: newValue })}
            onRequestSearch={() => this.doSomethingWith(this.state.value)}
          />  
        
      </>
    )
  }
}

export default SearchBarr;