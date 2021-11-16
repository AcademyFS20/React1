import React from 'react';
import {dataBook} from "./data/data";
import Table from './Components/Books/Table';

function App() {
  return (
    <div className="App">
     {
           dataBook.map((item) =>{
           return <Table  title={item.title} author={item.author} category={item.category} nbpages={item.nbpages}/>;
           })
          }
    </div>
  )
  
}

export default App;
