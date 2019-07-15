import React from 'react';
import ColumnLeft from './ColumnLeft';
import ColumnRight from './ColumnRight';

const HomePage = () => {
  return (
    <div className="row py-3 px-0 m-0">
      <ColumnLeft />
      <ColumnRight />
    </div>
  );
};

export default HomePage;
