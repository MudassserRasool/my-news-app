import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PostFullView.module.css';
import { Link } from 'react-router-dom';
const PostFullView = () => {
  const location = useLocation();
  const { postData } = location.state;

  return (
    <div>
      <div className="conatiner">
        <div className="card mb-3  border-0">
          <h2 className="card-title m-2 py-2">{postData.title}</h2>
          <img
            src={postData.urlToImage}
            className={styles.image}
            alt="unable to display full view"
          />
          <div className="card-body">
            <p className="card-text">{postData.content}</p>
            <Link to="/" className="btn btn-primary">
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFullView;
