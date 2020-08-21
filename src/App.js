import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var nayoks = ['Razzaq', 'Alomgir', 'Salman', 'Sakib', 'Shuvo']
  const Products = [
    {name: "Photoshop", price:"$90.99"},
    {name: "lllustatror", price:"$60.99"},
    {name: "PDF Reader", price: "$6.99"},
    {name: "premium el", price: "$249.5"}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            Products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          Products.map(pd =><Product product={pd}></Product>)
        }
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
    return (
      <div>
        <h3>Dynamic Users: {users.length}</h3>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </div>
    )
}
function Product(props){
  const productStyle={
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left"
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style={productStyle }>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return (
    <div style={{border:"2px solid gold", margin:"5px", width:"400px"}}>
      <h3>My name: {props.name}</h3>
      <p>My profession: {props.job}</p>
    </div>
  )
}

export default App;
