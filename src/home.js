import { useState } from 'react'

const Home = () => {

/*     const handleClick = (e) => {
        setName('averbuh');
        console.log("clicked", e.target)
    };
    const handleClickAgain = (name) => {

        console.log(name + " clicked")
    };

    const [name, setName] = useState('mario'); */

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])





    return (
        <div className="home">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>

            ))}
            
          {/*   <h2>Homepage</h2>
            <p>{name} clicked</p>
            <button onClick={handleClick}>click me</button>
            <button onClick={() => handleClickAgain(name)}>Click me again</button>
              */}
        </div>
    );
}

export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>