import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' ;


class App extends Component {

state = {
  persons : [
    { name: "Allen" , age:"25"},
    {name:"Eren", age:"20"},
    {name: "Levi" , age:"22"}
  ],
  showPerson: false
}

  switchNameHundler = (NewValue) => { 
    // console.log("was clicked") 
   this.setState ({
    persons : [
      { name: NewValue, age:"25"},
      {name:"Eren", age:"20"},
      {name: "Levi" , age:"22"}
    ]

   }) ; }


   switchChangedHundler = (event) => {
    this.setState ({
      persons : [
        {name: event.target.value , age:"25"},
        {name: "Eren" , age:"20"},
        {name: "Levi" , age:"22"}
      ]
  
     }) ;
   }


   togglePersonsHundle = () => {
     const DoesShow = this.state.showPerson;
     this.setState({showPerson : !DoesShow});
   };
   
  

  render() {

    const style ={ background : 'white' , font:'inherit' , border: "1px solid blue" , padding: "8px" , cursor:"pointer"}
    
     let persons = null;
     if(this.state.showPerson) {
       persons =( 
       <div> 
       <Person 
       name= {this.state.persons[0].name} age= {this.state.persons[0].age}
       changed= {this.switchChangedHundler}  > And i like Skateboard</Person>   
       <Person
        click={() => this.switchNameHundler("i dunno")} name= {this.state.persons[1].name} age= {this.state.persons[1].age} > And i like going to the sea</Person> 
       <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}> And i like Killing titans</Person>      
      </div>);

     }

    return (
      <div className="App">
        <h1> Hey im react</h1> 
        <button onClick={this.togglePersonsHundle} style = {style}>Switch name</button>
       { persons }
      </div>
    );
  }
}




export default App;

