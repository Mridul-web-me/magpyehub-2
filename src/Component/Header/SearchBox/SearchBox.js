import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SearchBox = () => {
  const [products, setProducts] = useState([]);
  // const { searchText } = useParams();

  const [searchProducts, setSearchProducts] = useState('');
  useEffect(() => {
    axios
      .get(`https://magpyehub-server.onrender.com/search?search=${searchProducts}`)
      // .then(res => res.json())
      .then(data => setProducts(data.data));
  }, [searchProducts]);

  const handleSearchField = e => {
    e.preventDefault();
    const searchText = e.target.value;
    const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
    return matchedProducts;
  };
  return (
    <>
      <div>
        <form className="d-flex searchBox" onSubmit={handleSearchField} required>
          <input className="form-control" placeholder="Search for Product & Brand..." aria-label="Search" onChange={e => setSearchProducts(e.target.value)} />
          <Link to={`/${searchProducts}`}>
            <button
              type="submit"
              style={{
                border: 'none',
                position: 'relative',
                right: '105%',
                height: '38px',
                margin: '2px 0'
              }}
            >
              {' '}
              <i className="fas fa-search" />
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
