import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
  return (
    <div>
      <SearchOutlined style={{ fontSize: 20 }} className="cursor-pointer" />
    </div>
  );
};

Search.propTypes = {};

export default Search;
