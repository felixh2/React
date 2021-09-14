import {useState} from 'react'

const Home = () => {
    const handleClick = (e)=>{
        setName('averbuh');
        console.log("clicked",e.target)
    };
    const handleClickAgain = (name)=>{
      
        console.log(name + " clicked")
    };    

    const [name ,setName] = useState('mario');

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} clicked</p>
            <button onClick={handleClick}>click me</button>
            <button onClick={()=>handleClickAgain(name)}>Click me again</button>
        </div>
      );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>