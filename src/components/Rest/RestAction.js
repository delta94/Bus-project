import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { useDispatch } from 'react-redux';
import actions from 'redux/utils/actions';
import { Link } from 'react-router-dom';

const RestAction = ({ id, resource, customEditLink }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      actions[resource].deleteDataById({
        id,
      }),
    );
  };
  return (
    <>
      <Link to={customEditLink || `/${resource}/${id}`}>
        <Icon
          type="edit"
          className="cursor-pointer"
          style={{ fontSize: 20, color: 'green', marginRight: '8px' }}
        />
      </Link>
      <Icon
        type="delete"
        onClick={handleDelete}
        className="cursor-pointer"
        style={{ fontSize: 20, color: 'red' }}
      />
    </>
  );
};

RestAction.propTypes = {
  id: PropTypes.string,
  customEditLink: PropTypes.string,
  resource: PropTypes.string,
};

export default RestAction;
