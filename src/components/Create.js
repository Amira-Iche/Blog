import { useState } from "react";
import { useHistory } from "react-router-dom";




const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory()
  

  const handeler  = (e) => {
      e.preventDefault()
      const blog = {title , body}

      fetch('http://localhost:3001/posts/', {
          method : 'POST',
          headers: { "Content-Type": 'application/json' },
          body: JSON.stringify(blog)
      }).then(() => {
          history.push('/')
      }
       )
      
      
    
  }

    return ( 
        <div className="create">
            <h3>Create Blog</h3>
            <form onSubmit= {handeler}  >
               <label>Blog Title</label> 
               <input 
               type="text" 
               required
               value= {title}
               onChange= {e => setTitle(e.target.value)}
               />

               <label> Blog Body</label>
               <textarea 
               required
               value = {body}
               onChange= { (e) => setBody(e.target.value)}
               ></textarea>

               <button >Add Blog</button>





            </form>
            
        </div>
     );
}
 
export default Create;