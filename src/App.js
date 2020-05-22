import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from  './components/Greet'
import Welcome from  './components/Welcome'
import Counter from  './components/Count'
import FunctionClick from  './components/FunctionClick'
import ClassClick from  './components/ClassClick'
import Eventbind from  './components/Eventbind'
import ParentComponent from  './components/ParentComponent'
import List from  './components/List'
import Stylesheet from  './components/Stylesheet'
import Form from  './components/Form'
import LifeCycleA from  './components/LifeCycleA'
import FragmentDemo from  './components/FragmentDemo'
import Table from  './components/Table'
function App() {
  return (
    <div className="App">
    <Table/>
    {/*<FragmentDemo/>
     <LifeCycleA/>
    <Form/>
     <Stylesheet check={true}/>
    <List/>
    <ParentComponent/>
      <Eventbind/>
    <ClassClick/>
     <FunctionClick/>
     <Welcome/>  
     <Greet/> 
     <Counter/>
        */}
    </div>
  );
 }

export default App;
