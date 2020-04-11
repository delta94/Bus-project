/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useRouter from 'hooks/useRouter';
import { CameraOutlined } from '@ant-design/icons';

const StyledOverLay = styled.div`
  &:hover {
    .overlay {
      display: flex;
    }
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    position: absolute;
    display: none;
    cursor: pointer;
  }
`;

const UploadOverlay = ({ children, style }) => {
  const { handlePushModal } = useRouter();
  return (
    <StyledOverLay className="relative" style={style}>
      <div
        className="overlay flex flex-center flex-col
          w-full h-full top-0 left-0"
        onClick={() => handlePushModal('upload')}
      >
        <CameraOutlined />
        Upload
      </div>
      {children}
    </StyledOverLay>
  );
};

UploadOverlay.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default UploadOverlay;
