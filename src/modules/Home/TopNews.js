/* eslint-disable react/prop-types */
import React from 'react';

const TopNews = ({ src }) => {
  return (
    <div>
      <h1
        style={{
          marginBottom: 10,
          fontSize: 20,
          textTransform: 'uppercase',
          color: '#303030',
        }}
      >
        Có thể bạn quan tâm
      </h1>
      {src.slice(0, 6).map((e, index) => (
        <div className="flex" key={String(index)} style={{ marginTop: 20 }}>
          <img
            src={e.thumbnail}
            alt=""
            style={{ width: '50%', marginRight: 10, height: 200 }}
          />
          <h3>{e.title}</h3>
        </div>
      ))}
    </div>
  );
};

TopNews.propTypes = {};

export default TopNews;
