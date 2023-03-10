import BookList from "../BookList/BookList";
import BookForm from "../BookForm/BookForm";
import { useDispatch } from "react-redux";
import "./App.css";
import Axios from "axios";
import { useEffect } from "react";


function App() {
  
  useEffect(() => {
    fetchBookList();
  }, []);

  const dispatch = useDispatch();

  // TODO - GET Book List from server
  const fetchBookList = () => {
    Axios.get("/books").then((response) => {
      console.log("response", response.data);
      dispatch({
        type: "SET_BOOK_LIST",
        payload: response.data
      })
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Books w/ Redux!</h1>
      </header>
      <main>
        <BookForm fetchBookList = {fetchBookList}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;
