import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' ;


class App extends Component {

state = {
  persons : [
    {id:45454, name: "Allen" , age:"25"},
    {id:454,name:"Eren", age:"20"},
    {id:145,name: "Levi" , age:"22"}
  ],
  showPerson: false
}
switchChangedHundler = (event , id) => {

  const personsTest = [...this.state.persons];
   personsTest.filter(x => x.id === id).map(x => 
    x.name = event.target.value
  )
  this.setState ({ persons: personsTest

   }) ;
 }

 deletePersonHundle = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons}) ;
 }

   togglePersonsHundle = () => {
     const DoesShow = this.state.showPerson;
     this.setState({showPerson : !DoesShow});
   };
   
  
  

  render() {

    const style ={ background : 'white' , font:'inherit' , border: "1px solid blue" , padding: "8px" , cursor:"pointer"}
    
     let persons = null;
     if(this.state.showPerson) {
         persons = this.state.persons.map( (person , index) => {
           return <Person name ={person.name} age = {person.age}  key={person.id} click = {() => this.deletePersonHundle(index)} changed={(event) => this.switchChangedHundler(event ,person.id)} >
           </Person>
         }
         ) }

      //  persons =( 
      //  <div> 
      //  <Person 
      //  name= {this.state.persons[0].name} age= {this.state.persons[0].age}
      //  changed= {this.switchChangedHundler}  > And i like Skateboard</Person>   
      //  <Person
      //   click={() => this.switchNameHundler("i dunno")} name= {this.state.persons[1].name} age= {this.state.persons[1].age} > And i like going to the sea</Person> 
      //  <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}> And i like Killing titans</Person>      
      // </div>);

     

    return (
      <div className="App">
        <h1> Hey im react</h1> 
        <button onClick={this.togglePersonsHundle} style = {style}>Show persons</button>
       { persons }
      </div>
    );
  }
}




export default App;

