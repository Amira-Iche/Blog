
import useFetch from "../useFetch";
import BookList from "./BookList";


const Home = () => {
  const { data : books,isLoading,error} = useFetch('http://localhost:3001/posts');
    return (
    
        <div className="home">
            <div>{error} </div>
           {isLoading && <div> Loading ....... </div>}
            <BookList  books = {books} title = "All Articles"  />
            <h1> </h1>
        </div>
      );
}
 
export default Home;