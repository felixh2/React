import { useState, useEffect } from 'react'

import BlogList from './bloglist';

/*
install json fake server :
npx json-server --watch react-tutorial/data/db.json --port 8000
*/

const Home = () => {

    const [blogs, setBlogs] = useState(null);
       /*  ([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]) */

    const [name,setName] = useState('mario');

  /*   const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    } */
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(response=>response.json())
        .then(data=>{            
            setBlogs(data)
        });
    },[]);
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs"  />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
            <button onClick={()=>setName('luigi')}>Click</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;
