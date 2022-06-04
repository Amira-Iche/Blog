import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";



const Edit = () => {
    const [title, setTitle] = useState('' ); 
    const [body, setBody] = useState('');
    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
       fetch(`http://localhost:3001/posts/${id} `)
       .then(res => {
        if(!res.ok) {
            throw Error('could not fetch the data for that resources')
        }
        return res.json()
   })
    .then(data => {
        setTitle(data.title)
        setBody(data.body)
    })
    .catch(er => {
        
       console.log(er.message);
    })
    }, [])
   
    
   
   
  
    const handeler  = (e) => {
        e.preventDefault()
        const blog = {title , body}
        fetch('http://localhost:3000/posts/' + id, {
            method : 'PUT',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            history.push('/')
        }
         )}
        
  
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
  
                 <button >Update Blog</button>
  
  
              </form>
              
          </div>
       );
}
 
export default Edit;