import React from 'react';
import PostsListOtherUsers from './PostsListOtherUsers';

const ColumnRight = () => {
  return (
    <div className="column-right col-6 pl-0 m-0">
      <div className="bg-right bg-white p-2">
        <h4>Hello from right</h4>
        <PostsListOtherUsers />
      </div>
    </div>
  );
};

export default ColumnRight;
