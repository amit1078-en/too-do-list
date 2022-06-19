import React, { Component } from 'react';
import '../Css_Files/AddTask.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';
import Navbar from './Navbar';




class AddTask extends Component
{
     stat = {};
     theme = createTheme();
     current=0;
     arrays = [];
     arr = [];
     state = { current: 0 }


     
     handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let ID = 0;
        let obj = {
                rating: data.get('rating'),
                moviedesc: data.get('moviedesc')
        };
        if(data.get('rating')=="" || data.get('moviedesc')=="")
        {   
            // applying validation
            alert("please dont leave any field empty");
        }
        else
        {
            const key = localStorage.getItem("keyword")
            const name =  localStorage.getItem(key);
           
            if(localStorage.getItem(key)==null)
            {
                ID = 1;
                this.arr = [];
            }
            else
            {
              let str=[];
                this.arr = [];
                 this.arrays = [];
                str = localStorage.getItem(key);         
                this.arr = JSON.parse(str);
                this.arrays = JSON.parse(str);
            }   
                var ind = 1;
                let founded = false;
                while(!founded)
                {

                    let present = false;
                    this.arr.map((objectt)=>{
                        let temp = objectt[0];
                        if(ind==temp)
                        {
                            present = true;
                        }
                    });
                    if(!present)
                    {
                        founded = true;
                        ID = ind;
                    }
                    ind+=1;
                }
                this.arr.push([ ID ,obj.rating,obj.moviedesc]);
                localStorage.setItem(key,JSON.stringify(this.arr));
                alert("Movie Added Please Check Task List");
        }
    };
    
        

   render()
   {
    return (
        <>
        <Navbar/>
         <div id="Border-box">
                <div><h2>Add Task </h2>
                    <form onSubmit={this.handleSubmit}>

                        <input name="rating" type="text" className="feedback-input" placeholder="Task Priority" id="rating" />
                        <textarea name="moviedesc" id="moviedesc" className="feedback-input" placeholder="Task Description"></textarea>
                        <input type="submit" value="SUBMIT"  />
                    </form>
                </div>
            </div>
        </>
    );
   }
}

export default  AddTask;