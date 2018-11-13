import React, { Component } from 'react';
import InnerCard from './InnerCard';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
//import { Grid,Row,Col } from 'react-bootstrap';
import  '../css/main.css';


class SubCard extends Component {
  constructor(props) {
    super(props);
    this.createTable=this.createTable.bind(this);
  }

   createTable() {
    let table = []
      this.props.personDetails.forEach((personDetail)=>{
              var personNameSplit=personDetail.name.split(" ");
              var firstName=personNameSplit[0].charAt(0).toUpperCase();
              var lastName=personNameSplit[0].charAt(1).toUpperCase();
             // table.push(<li>{firstName+""+lastName} </li>);
              table.push(<InnerCard name={firstName+""+lastName} ></InnerCard>)
            })
    return table;
  }

  render() {
    
    return(   
        <Card style={{width:"25%"}}>
        <CardHeader style={{color:"red",backgroundColor:"black",textAlign:"right",fontSize:"15px"}}>
            <h1>{this.props.dayValue}</h1>
        </CardHeader>
        <CardBody style={{color:"black",backgroundColor:"yellow"}} >
          <div className = "row">
             {this.createTable()}
         </div>
        </CardBody>
        <CardFooter style={{color:"red",backgroundColor:"black",height:"50%"}}>
             <h1 style={{fontSize: '15px'}}> {this.props.personDetails.length} {this.props.personDetails.length===0?"birthday":"birthdays"}</h1>
             </CardFooter>
        </Card>
    )
  }
}

export default SubCard;
