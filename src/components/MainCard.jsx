import React, { Component } from 'react';
import person from '../person';
import SubCard from './SubCard';


class MainCard extends Component {
    constructor(props) {
        super(props);
        this.getPersonDetails=this.getPersonDetails.bind(this);
        this.state={personDetails:person,
        sunday:[],monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[]};
    }

    componentWillMount() {
       this.getPersonDetails();
      }

      getPersonDetails()
      {
             //eslint-disabled
             let day;
             //eslint-disabled-next-line
             person.forEach(person=>{
             var dateofbirth=person.birthday.split("/");
             var year=dateofbirth[2];
             var month=dateofbirth[0];
             month=month-1;
             var dayDetails=dateofbirth[1];
             var dateformat=new Date();
             dateformat.setFullYear(year);
             dateformat.setMonth(month);
             dateformat.setDate(dayDetails);
             day=dateformat.getDay();
             console.log("dayDetails"+day);
            
             if(day===0)
             {
                 let sundayDetails=this.state.sunday;
                 let newpersonDetails=person;
                 newpersonDetails.bdayYear=year;
                 sundayDetails.push(newpersonDetails);
                 this.setState={
                     sunday:sundayDetails
                 };
             }else if(day===1)
             {
                 let details=this.state.monday;
                 let newpersonDetails=person;
                 newpersonDetails.bdayYear=year;
                 details.push(newpersonDetails);
                 this.setState={
                     monday:details
                 };
             }else if(day===2)
             {
                 let details=this.state.tuesday;
                 let newpersonDetails=person;
                 newpersonDetails.bdayYear=year;
                 details.push(newpersonDetails);
                 this.setState={
                    tuesday:details
                 };
             }else if(day===3)
             {
                 let details=this.state.wednesday;
                 let newpersonDetails=person;
                 newpersonDetails.bdayYear=year;
                 details.push(newpersonDetails);
                 this.setState={
                    wednesday:details
                 };
             }else if(day===4)
             {
                 let details=this.state.thursday;
                 let newpersonDetails=person;
                 newpersonDetails.bdayYear=year;
                 details.push(newpersonDetails);
                 this.setState={
                    thursday:details
                 };
             }else if(day===5)
             {
                 let details=this.state.friday;
                 let newpersonDetails=person;
                 newpersonDetails.bdayYear=year;
                 details.push(newpersonDetails);
                 this.setState={
                    friday:details
                 };
             }else
             {
                 let details=this.state.saturday;
                 let newpersonDetails=person;
                 newpersonDetails.bdayYear=year;
                 details.push(newpersonDetails);
                 this.setState={
                    saturday:details
                 };
             }
         });
         
      this.state.sunday.sort(function(a,b){
          return a.bdayYear-b.bdayYear;
      });
      this.state.monday.sort(function(a,b){
        return a.bdayYear-b.bdayYear;
      });
      this.state.tuesday.sort(function(a,b){
        return a.bdayYear-b.bdayYear;
    });
    this.state.wednesday.sort(function(a,b){
        return a.bdayYear-b.bdayYear;
    });
    this.state.thursday.sort(function(a,b){
        return a.bdayYear-b.bdayYear;
    });
    this.state.friday.sort(function(a,b){
        return a.bdayYear-b.bdayYear;
    });
    this.state.saturday.sort(function(a,b){
        return a.bdayYear-b.bdayYear;
    });
     
      }
     


  render() {
    

      let subdivStyle = {
        padding:'20px'
      };
    return (
     
        <div>
         
         <div style={subdivStyle}>
         <SubCard personDetails={this.state.monday} dayValue="MON"/>
         </div>
         
         <div style={subdivStyle}>
         <SubCard personDetails={this.state.tuesday} dayValue="TUE"/>
         </div>
         <div style={subdivStyle}>
         <SubCard personDetails={this.state.wednesday} dayValue="WED"/>
         </div>
         <div style={subdivStyle}>
         <SubCard personDetails={this.state.thursday} dayValue="THU"/>
         </div>
         <div style={subdivStyle}>
         <SubCard personDetails={this.state.friday} dayValue="FRI"/>
         </div>
         <div style={subdivStyle}>
         <SubCard personDetails={this.state.saturday} dayValue="SAT"/>
         </div>
        </div>
      
    );
  }
}

export default MainCard;
