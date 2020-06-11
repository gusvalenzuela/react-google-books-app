import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>
                  <span style={{ color: "#4285f4" }}>S</span>
                  <span style={{ color: "#ea4335" }}>a</span>
                  <span style={{ color: "#fbbc05" }}>v</span>
                  <span style={{ color: "#4285f4" }}>e</span>
                  <span style={{ color: "#34a853" }}>d</span>
                  <span style={{ color: "#000000" }}> Books</span>
                </strong>
              </h1>
              <h5 className="text-center">
                Your saved books from search.
              </h5>
            </Jumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Saved;
