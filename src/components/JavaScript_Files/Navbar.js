import React from "react"
import { Component } from "react"
import '../Css_Files/Navbar.css'
class Navbar extends Component
{
    username = "amit";
    constructor()
    {
        super();
        this.username= localStorage.getItem("username");
    }
    render()
    {
        return (
            <>
            <div id='app'>
                <header className='navbar'>
                    <div className='navbar__title navbar__item'>Welcome {this.username}</div>
                    <div className='navbar__item'><a href="/AddTask" id="col">Add Task</a></div>
                    <div className='navbar__item'><a href="/TaskList"id="col" >Task's List</a></div>
                    <div className='navbar__item'><a href="/login"id="col">Log Out</a></div>         
                </header>
            </div>
            
            </>
          )
    }
}
export default Navbar