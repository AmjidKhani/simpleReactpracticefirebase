import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Register from './Components/Register';
import { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';

import { getDatabase, ref, set } from "firebase/database";


import { v4 as uuidv4 } from 'uuid';
const firebaseConfig = {
  apiKey: "AIzaSyBnDwB7hXOoy22bF2gXg36Xn4d3vtn9d60",
  authDomain: "jdhjd-ff6e6.firebaseapp.com",
  projectId: "jdhjd-ff6e6",
  storageBucket: "jdhjd-ff6e6.appspot.com",
  messagingSenderId: "999397414919",
  appId: "1:999397414919:web:512faaf1dc27ccb8bb32a2",
  measurementId: "G-0QEFCZ7K6R"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
class  App extends Component {
constructor(props) {
    super(props);
   this.state = {
     id: uuidv4(),
       formfilled:true,
       name:null,
       email:null,
       questionaryt:{
        q1:"",
        other:"",
        q2:"",
        q3:""
       }
       }
  };
  
  formsubmiting=(event)=>{

    console.log("before");
    console.log(this.state);
const name=event.target.name.value;
    const email = event.target.email.value;
    this.setState({
name,email
},()=>{
      console.log("After");
  console.log(this.state);
});
    event.preventDefault();

  };

  questionarhandler=(event)=>{
   
    console.log(this.state.questionaryt);
    const questionaryt={};
      questionaryt.q1=event.target.q1.value;
    questionaryt.other = event.target.other.value;
    
    questionaryt.q2 = event.target.q2.value;
    questionaryt.q3 = event.target.q3.value;
this.setState({
  questionaryt
},()=>{
  console.log(this.state.questionaryt);
});
    

    event.preventDefault();

    const db = getDatabase();
    set(ref(db, 'survey/' + this.state.id), {
      username: this.state.name,
      email: this.state.email,
      questionare:this.state.questionaryt 
    });



// database.ref("survey/"+this.state.id).set({
//   username: this.state.name,
//   email: this.state.email,
//   question: this.state.questionaryt
// });

  };
  render(){
  return (
    <div className='container card p-3 mt-5="true" '>
   { 
  
   this.state.name===null&&this.state.email===null?
      (<Register submitform={this.formsubmiting}>
      </Register>)
     :
     ( <Greet submitquestion={this.questionarhandler}></Greet>
     )
    }
   </div>
  );
}
}
export default App;
