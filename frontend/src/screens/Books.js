import React, { useState } from 'react';
import ShowMoreText from "react-show-more-text";
import './style/style.css';
import logo from './images/logo-find-books.png';

function Books() {
  const [inputValue, setInputValue] = useState('');
  const [prompt, setPrompt] = useState('');
  const [responseok, setResponseok] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue) {
      setError('Please enter a prompt!');
      setPrompt('');
      return;
    }

    setLoading(true);
    const response = await fetch('/api/chatgpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputValue }),
    });

    try {
      if (response.ok) {
        setResponseok(true);
        const data = await response.json();
        console.log(data);
        setPrompt(inputValue);
        setBooks(data.nearestNeighbours || []);
        setInputValue('');
        setError('');
      } else {
        setResponseok(false);
        throw new Error('An error occurred');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row mt-3 mb-2 pb-2 border-bottom">
        <div className="col-3">
          <img src={logo} alt="Find Books" />
        </div>
        <div className="col-8 d-flex justify-content-center text-start flex-column p-2">
          <h5 className="fw-semibold fst-italic text-secondary">Get personalized book recommendations based on your input</h5>
          <form className="form-horizontal w-100" onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col-sm-10 mt-2">
                <div className="form-floating">
                  <textarea
                    className="form-control custom-input"
                    id="floatingInput"
                    placeholder="Enter a value"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />

                  <label htmlFor="floatingInput">Input</label>
                </div>
              </div>
              <div className="col-sm-2 mt-2">
                <button type="submit" className="btn btn-primary custom-button">
                  {loading ? (
                    <span className='spinner-border spinner-border-sm' role='status' aria-hidden="true"></span>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {prompt && <div><p className="mt-2 mb-5 fst-italic">Você buscou por: <span className="fw-bold">{prompt}</span></p></div>}
      {responseok && (<div className='row mt-2'>
        {books.map((book, index) => (
          <div key={index} className='col-md-6 mb-4 d-flex'>
            <div className="card flex-fill border border-0 border-bottom">
              <div className="row no-gutters pb-2">
                <div className="col-md-3 pt-4">
                  <img src={book.image} className="card-img" alt="Book cover" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className='card-title'>{book.title}</h5>
                    <ShowMoreText
                      /* Default options */
                      lines={5}
                      more="Show more"
                      less="Show less"
                      className="content-css mb-3"
                      anchorClass="show-more-less-clickable"
                      expanded={false}
                      width={280}
                      truncatedEndingComponent={"... "}
                      >{book.text}</ShowMoreText>
                    <p className='card-text'>Author(s): {book.authors}</p>
                    <p className='card-text'>Publisher: {book.publisher}</p>
                    <a href={book.infoLink} className='btn btn-primary'>More info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>)}
    </div>
  );
}

export default Books;
