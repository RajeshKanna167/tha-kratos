import React, {  } from 'react';

// import React from 'react';
import { Chart } from 'react-google-charts';
import './App.css';

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";


 const data = [
  ["Total ratio","rk"],
  ["Male",6.8],
  ["Female",3.2],
  
  
  
];

const options = {
  
  pieSliceText: "label",
  title: "Total Student Ratio Male & Female",
  sliceVisibilityThreshold: 0.3, // 20%

};



function App() {
  

  return (
     
      <div className="container">
     <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />






            <InputTodo />
            <ListTodos />
            
            

        </div>
    
  );
}

export default App;
