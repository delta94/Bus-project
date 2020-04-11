import React from 'react';
import { Modal } from 'antd';
import useRouter from 'hooks/useRouter';
import PropTypes from 'prop-types';

const ModalRoute = ({ component, path, width, title, ...rest }) => {
  const { location, replace } = useRouter();
  const visible = !!(location.hash && location.hash === path);
  const handleCancle = () => {
    replace({
      pathname: location.pathname,
      search: location.search,
      state: location.state,
    });
  };
  return (
    <Modal
      {...rest}
      title={title?.toUpperCase()}
      visible={visible}
      onCancel={handleCancle}
      destroyOnClose
      width={width}
      footer={null}
    >
      {React.createElement(component)}
    </Modal>
  );
};

ModalRoute.propTypes = {
  title: PropTypes.string,
  component: PropTypes.func,
  path: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ModalRoute.defaltProps = {
  title: 'Tạo mới',
};

export default ModalRoute;
