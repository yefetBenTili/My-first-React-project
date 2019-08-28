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

    const style ={background: 'green',
    color:'white',
    font:'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor:'pointer',
    } ;
    
     let persons = null;
     if(this.state.showPerson) {
         persons = this.state.persons.map( (person , index) => {
           return <Person name ={person.name} age = {person.age}  key={person.id}
            click = {() => this.deletePersonHundle(index)}
             changed={(event) => this.switchChangedHundler(event ,person.id)}>
           </Person>
         }
          ) ;
         style.background = "red" ;
         }
          
         const classes = [] ;
         if(this.state.persons.length <= 2){
           classes.push('red') ; // classes =['red']
         }
         if(this.state.persons.length <= 1){
           classes.push('bold') ; //classes =['red' , 'bold']
         }

    return (
      <div className="App">
        <h1> Hey im react</h1> 
    <p className={classes.join(' ') /* joining the 2 classes above */}>This is rly working</p>
        <button style ={style} className="toggleButton" onClick={this.togglePersonsHundle}
         >Show persons</button>
       {persons}
      </div>
    );
  }
}




export default (App);

