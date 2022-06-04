import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";




const Details = () => {
  const { id } = useParams();
  const { data : post , isLoading,error} = useFetch(`http://localhost:3001/posts/${id} ` );
  const history =  useHistory();


    const deletePost = () => {
        fetch('http://localhost:3001/posts/' + id,{
            method : 'DELETE'
        }).then( () => history.push('/') )
    }

  
   
    
    return ( 
        <div className="detail">
            {isLoading && <div> LOADING ..... </div>}
            {error && <div>{error} </div> }
            {
                <div className="detail-post">
                 <h3>{post.title} </h3>
                 <p>{post.body} </p>
                 <button onClick={deletePost} >Delete post</button>
                 <Link to={`/edit/${id}`}> Edit</Link>

                </div>                

            }
             
            
        </div>
     );
}
 
export default Details;