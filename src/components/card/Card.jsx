import './Card.scss';

import React from 'react';

export default (props) => {
  console.log(props);
  return (
    <div className="card" style={props['style']}>
      <div className="header">
        <h1>{props['header']}</h1>
      </div>
      {/* chilcfren => subtags passadas via parametro */}
      <div className="content">{props['children']}</div>
    </div>
  );
};
