import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
  articles.sort((a, b) => b.upvotes - a.upvotes);
  let [articleList, setArticleList] = useState(articles);  
  const sortOnVote = () => {
    let sortedArray = articleList.slice();
    sortedArray.sort((a, b) => b.upvotes - a.upvotes);
    setArticleList(sortedArray);
  }
  const sortOnDate = () => {
    let sortedArray = articleList.slice();
    sortedArray.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate === bDate) {
        return 0;
      }
      return aDate > bDate ? -1 : 1;
    });
    setArticleList(sortedArray);
  }
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
        <button data-testid="most-upvoted-link" className="small" onClick={sortOnVote}>Most Upvoted</button>
        <button data-testid="most-recent-link" className="small" onClick={sortOnDate}>Most Recent</button>
      </div>
      <Articles articles={articleList} />
    </div>
  );

}

export default App;
