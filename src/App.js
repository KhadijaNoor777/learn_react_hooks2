import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [resourceType, setResourceType] = useState('posts');
  // const [items, setItems] = useState([]);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // }

  //this useEffect will be called whenver the resource type changes
  //this return executes first, it can be used to clean up any previous effects before running useEffect 
  useEffect(() => {
    console.log('render');

    return () => {
      console.log('return from resource change')
    }

    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(response => response.json())
    //   .then(json => setItems(json))

    
  }, [resourceType])

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)
  // })

  return (
    <div>
      {/* <div>{windowWidth}</div> */}
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>

      <h2> {resourceType} </h2>

      {/* {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}

    </div>
  );
}

export default App;
