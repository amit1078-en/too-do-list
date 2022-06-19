import React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Css_Files/RenderTask.css'
import { Delete, TripOriginSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import Navbar from './Navbar';


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



class RenderTask extends React.Component {
  SeachResult = ""
  statee = {
    movies: []
  }
  MID;
  MRAT;
  MD;
  newarr = [];
  constructor(props) {
    super(props);
    this.MID = 0;
    this.state = {
      Hide: true
    };
    this.MRAT = 0;
    this.MD = "";
  }
  PresentAsSubstring(str, searchId) {
    const array1 = str.split(" ");
    const array2 = searchId.split(" ");
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          return true;
        }
      }
    }
    return false;
  }
  ResetSearchResult() {
    localStorage.setItem('search', '');
    window.location.reload(false);
  }
  DeleteTask(movieno) {
    this.newarr = [];
    let str = [];
    let arr = [];
    const key = localStorage.getItem("keyword")
    str = localStorage.getItem(key)
    arr = JSON.parse(str);
    this.newarr = [];
    localStorage.setItem(key, JSON.stringify(this.newarr))
    arr.map((obj) => {
      console.log(obj[0] + " " + movieno.stringify);
      if (obj[0] != movieno) {
        this.newarr.push([obj[0], obj[1], obj[2]]);
      }
    });
    localStorage.setItem(key, JSON.stringify(this.newarr))
    window.location.reload(false);
  }
  EditTask(movieno) {

    let str = [];
    let arr = [];
    this.MID = movieno;
    const key = localStorage.getItem("keyword")
    str = localStorage.getItem(key)
    arr = JSON.parse(str);
    arr.map((details) => {
      if (details[0] == movieno) {
        this.MD = details[2];
        this.MRAT = details[1];
      }
    });
    this.setState({
      Hide: false
    });

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let ID = 0;
    let obj = {
      rating: data.get('rating'),
      moviedesc: data.get('moviedesc')
    };
    if (data.get('rating') == "" || data.get('moviedesc') == "") {
      // applying validation
      alert("please dont leave any field empty");
    }
    else {
      const key = localStorage.getItem("keyword")
      const name = localStorage.getItem(key);
      let str = [];
      let arr = [];
      str = localStorage.getItem(key)
      arr = JSON.parse(str);
      arr.map((details) => {
        if (details[0] == this.MID) {
          details[2] = obj.moviedesc;
          details[1] = obj.rating;
        }
      });
      localStorage.setItem(key, JSON.stringify(arr));
      alert("Task Updated Successfully");
      window.location.reload(false);
    }
  };

  render() {
    if (!this.state.Hide) {
      return (
        <>
          <div >
            <div><h2>Update Task Detail's For Task Id : {this.MID}</h2>
              <form onSubmit={this.handleSubmit}>
                <input name="rating" type="number" className="feedback-input" placeholder={this.MRAT} id="rating" />
                <textarea name="moviedesc" id="moviedesc" className="feedback-input" placeholder={this.MD}></textarea>
                <input type="submit" value="SUBMIT" />
              </form>
            </div>
          </div>
        </>
      );

    }
    else {
      let str = [];
      let arr = [];
      const key = localStorage.getItem("keyword");
      if(!localStorage.getItem(key)){
        return (
          <>
            <div >
              No Result Founded
            </div>
          </>
        );
      }
      else {
        let currnumber=[];
        let sort = "sort";
        if(localStorage.getItem("sorting"))
        {
          sort = localStorage.getItem("sorting");
        }
        let searchId = "";
        if (localStorage.getItem("search")) {
          searchId = localStorage.getItem('search')
        }
        str = localStorage.getItem(key)
        arr = JSON.parse(str);
        var len = 0;
        var tot = 0;
        arr.map((obj) => {
          tot += 1;
          if (searchId==="") {
            len += 1;
            this.statee.movies.push(obj);
          }
          else {
            let val = String(obj[2]);
            if (this.PresentAsSubstring(val, searchId)) {
              len += 1;
              this.statee.movies.push(obj);
            }
          }
        });
       
        if (sort == "usort") {
          //sort by high rating's
          for (var i = 0; i < this.statee.movies.length; i++) {
            for (var j = 0; j < this.statee.movies.length; j++) {
              let f1 = this.statee.movies[i][1] * 1;
              let f2 = this.statee.movies[j][1] * 1;
              if (f1 > f2) {
                let k = this.statee.movies[i][0];
                this.statee.movies[i][0] = this.statee.movies[j][0];
                this.statee.movies[j][0] = k;


                let m = this.statee.movies[i][1];
                this.statee.movies[i][1] = this.statee.movies[j][1];
                this.statee.movies[j][1] = m;


                let f = this.statee.movies[i][2];
                this.statee.movies[i][2] = this.statee.movies[j][2];
                this.statee.movies[j][2] = f;
              }
            }
          }
        }
        else {
          //sort by low rating's
          for (var i = 0; i < this.statee.movies.length; i++) {
            for (var j = 0; j < this.statee.movies.length; j++) {
              let f1 = this.statee.movies[i][1] * 1;
              let f2 = this.statee.movies[j][1] * 1;
              if (f1 < f2) {
                let k = this.statee.movies[i][0];
                this.statee.movies[i][0] = this.statee.movies[j][0];
                this.statee.movies[j][0] = k;


                let m = this.statee.movies[i][1];
                this.statee.movies[i][1] = this.statee.movies[j][1];
                this.statee.movies[j][1] = m;


                let f = this.statee.movies[i][2];
                this.statee.movies[i][2] = this.statee.movies[j][2];
                this.statee.movies[j][2] = f;
              }
            }
          }
        }
        currnumber=[];
        this.statee.movies.map((currobj)=>{
          currnumber.push(currobj[0]);
        });
        if (len == 0 && searchId != "") {
          return (
            <div>
              <div>No Result Found</div>
              <p>Search By Task Desciption</p>
              <button id="colorbutton" onClick={() => this.ResetSearchResult()}>click here to see all result again</button>
            </div>
          );
        }
        else {
          if (tot == 0) {
            return (
              <div>No Task Added</div>
            );
          }
          else {
            return (
              <>
                <div>
                  <h3>List Of Task Added </h3>
                  <div id="box">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead >
                          <TableRow>
                            <TableCell align="right" id="boxx">Id</TableCell>
                            <TableCell align="right" id="boxx">Task Priority</TableCell>
                            <TableCell align="right" id="boxx">Task Desciption</TableCell>
                            <TableCell align="right" id="boxx">Delete Task</TableCell>
                            <TableCell align="right" id="boxx">Edit Task Information</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.statee.movies.map(( movie , index  ) => (
                            <TableRow
                              key={movie[0]}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row" id="boxx" >
                                {movie[0]}
                              </TableCell>
                              <TableCell align="right" id="boxx" >{movie[1]}</TableCell>
                              <TableCell align="right" id="boxx" >{movie[2]}</TableCell>
                              <TableCell align="right" id="boxx" ><button id="colorbutton" onClick={() => this.DeleteTask(currnumber[index])}>Delete</button></TableCell>
                              <TableCell align="right" id="boxx" ><button id="clrbtn" onClick={() => this.EditTask(currnumber[index])}>Edit</button></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </>
            );
          }
        }
      }
    }
  }
}
export default RenderTask;