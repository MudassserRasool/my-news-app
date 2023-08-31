import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Posts from '../../components/Posts/Posts';
import { SpinnerLoading } from '../../assets';

const usaUrl =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=f14c5ace765249bfaf51985af365c1f9';
const ukUrl =
  'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f14c5ace765249bfaf51985af365c1f9';

const Home = () => {
  // for fetching data
  const [url, seturl] = useState(ukUrl);
  const [countery, setcountery] = useState({});

  // hooks for handling serch input field
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchInputValue, setsearchInputValue] = useState('');

  // hooks to set the search results
  const [originalPosts, setOriginalPosts] = useState([]);
  const [posts, setposts] = useState([]);

  // loading
  const [loading, setLoading] = useState(true); // New loading state

  // fetching data
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const userResponse = await fetch(url);
        const userJsonData = await userResponse.json();
        const fetchedPosts = userJsonData.articles;
        setOriginalPosts(fetchedPosts);
        setposts(fetchedPosts);
        setcountery(fetchedPosts.map((article) => article.source));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  // handel search filter
  const handleInput = (e) => {
    const inputValue = e.target.value;
    setsearchInputValue(inputValue);

    if (inputValue === '') {
      setposts(originalPosts);
    } else {
      // Filter the posts based on the input value
      const filteredPosts = originalPosts.filter((article) =>
        article.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setposts(filteredPosts);
    }
  };

  return (
    <div>
      <Navbar
        showSearchInput={showSearchInput}
        setShowSearchInput={setShowSearchInput}
        usaUrl={usaUrl}
        ukUrl={ukUrl}
        searchInputValue={searchInputValue}
        handleInput={handleInput}
        seturl={seturl}
      />
      {loading ? (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: '60vh' }}
        >
          <h1 className="text-center mb-3">Loading...</h1>
          <img
            src={SpinnerLoading}
            alt="Loading Spinner"
            className="align-center"
          />
        </div>
      ) : (
        <Posts countery={countery} posts={posts} />
      )}
    </div>
  );
};

export default Home;
