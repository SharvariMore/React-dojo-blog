import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Sania');
    const history = useHistory('');

    const handleSubmit= (e) =>
    {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
        history.push('/');
    }
    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title: </label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <label>Blog Body: </label>
            <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            <label>Blog Author: </label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="Sania">Sania</option>
                <option value="Deepika">Deepika</option>
            </select>
            <button>Add Blog</button>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </form>
      </div>
    );
  }
   
  export default Create;
