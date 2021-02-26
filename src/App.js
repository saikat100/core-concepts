import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Manna', 'shakib khan', 'riyaz', 'Saikat']  
  const products=[
    {name: 'Mobile', price: '$100'},
    {name: 'Tablet', price: '$150'},
    {name: 'Desktop', price: '$300'},
    {name: 'Game', price: '$20'}
  ]

  const productNames = products.map(product => product.name)
  console.log(productNames);
  return (
		<div className="App">
			<header className="App-header">
        <Product name ={products[0].name} price ={products[0].price}> </Product>
        <Product name ={products[1].name} price ={products[1].price}> </Product>
				<p>I love programming</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
         {
            products.map(pd => <product product={pd}></product>)
          }
          <product product={products[0]}></product>
          <product product={products[1]}></product>
				<Abc name="Rubel"> </Abc>
				<Abc> </Abc>
				<Abc> </Abc>
				<Abc> </Abc>
			</header>
		</div>
	);
}

function Users() {
  const[users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, []) 
  return (
    <div>
      <h3>Dinamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)
  const handleDecrease = () =>{
    if(count==0){
      alert("less then zero is not allowed");
    }
    else{
      const newCount = count - 1;
			setCount(newCount);
    }
  }
  const handleIncrease = () =>{
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
		<div>
			<h1> Count: {count} </h1>
			<button onClick={handleDecrease}>Decrease</button>
			<button onClick={handleIncrease}>Increase</button>
		</div>
	);
}

function Product(props) {
  const productStyles ={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'green',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return (
    <div style={productStyles}>
      <h2>Name:{props.name}</h2>
      <h3>Price:{props.price}</h3>
      <button>Buy Now</button>
    </div>
  )

}
function Abc(props) {
  const abcStyle = {
    border: '2px solid red',
    margin: '10px'
  }
	return (
    <div style={{border: '2px solid red', margin: '10px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Email: saikat@gmail.com</h3>
    </div>
	);
}


export default App;
