import { Link } from "react-router-dom";

const BookList = ({books , title }) => {
    return ( 
        <div className="blog-list" >
            {/* <h2>{title}</h2> */}
                {books.map(book => (
                    <div className="blog-preview" key= {book.id}>
                        <Link to= {`/posts/${book.id}`} >
                            <h2>{book.title} </h2>
                            <h5>Body : {book.body} </h5>
                        </Link>
                        
                    </div>
                    
                ))}
           

        </div>
     );
}
 
export default BookList;