/*const Home = () => {

const handleClick = (e) => {
    console.log('Sharvari More',e);
}

const handleClickAgain = (name) => {
    console.log('Hello ' + name);
}

    return ( 
        <div className="Home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>handleClickAgain('Blogger')}>Click Me Again</button>
        </div>
     );
}
 
export default Home;*/

import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'sara', id: 1 },
    { title: 'Welcome kids!', body: 'lorem ipsum...', author: 'yuvika', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'jonita', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;