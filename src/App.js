import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { handleCategoryChange, fetchMovies } from './redux/moviesSlice';

function App() {
  const dispatch = useDispatch();
  const { category, cards = [], status, error, errorMessage } = useSelector((state) => state.movies);

  useEffect(() => {
      dispatch(fetchMovies(category));
  }, [category, dispatch]);

  const handleSelectChange = (event) => {
    dispatch(handleCategoryChange(event.target.value));
    dispatch(fetchMovies(event.target.value));
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="title">
          <h1 className='poppins-semibold' style={{color:'#209bd8'}}>Hello, May I Help You?</h1>
        </div>
        <Form onCategoryChange={handleSelectChange} selectedCategory={category} /> 
        <div className='cards'>
          {errorMessage && <div className="text-white">Bu kategoriye ait film bulunamamıştır.</div>}
          {status === 'loading' && <p>Loading</p>}
          {status === 'failed' && <p>{error}</p>}
          {status === 'succeeded' && cards.length > 0 ? (
            cards.map((card) => (
              <Card key={card.id} card={card} />
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
