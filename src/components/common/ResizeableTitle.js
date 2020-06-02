/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Resizable } from 'react-resizable';
import React from 'react';
import PropTypes from 'prop-types';

const ResizeableTitle = ({ onResize, width, ...restProps }) => {
  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle=<span
        className="react-resizable-handle"
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

ResizeableTitle.propTypes = {
  onResize: PropTypes.func,
  width: PropTypes.number,
};

export default ResizeableTitle;
