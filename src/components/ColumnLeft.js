import React from 'react';
import PostsListCurrentUser from './PostsListCurrentUser';

const ColumnLeft = () => {
  return (
    <div className="column-left col-6 pr-3 m-0">
      <div className="bg-left bg-white p-2">
        <h4>Hello from left</h4>
        <PostsListCurrentUser />
      </div>
    </div>
  );
};

export default ColumnLeft;
