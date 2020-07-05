import React from 'react';
import { Tooltip } from 'antd';
import styled from 'styled-components';
import { CheckOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import useSetting from '../../hooks/useSetting';

const Tag = React.forwardRef(({ color, check, ...rest }, ref) => (
  <div {...rest} style={{ backgroundColor: color }} ref={ref}>
    {check ? <CheckOutlined /> : ''}
  </div>
));

Tag.propTypes = {
  color: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
};

export const ThemeColorBlock = styled(Tag)`
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
`;

const ThemeColor = () => {
  const { setting, changeSetting } = useSetting();
  const colorList = [
    {
      name: 'Blue',
      color: '#1890ff',
    },
    {
      name: 'Red',
      color: '#f5222d',
    },
  ];

  const selectColor = (color) => () => {
    changeSetting({
      primaryColor: color,
    });
  };

  return (
    <div>
      <h3>Theme Color</h3>
      <div style={{ marginTop: 20 }}>
        {colorList.map(({ color, name }, index) => {
          return (
            <Tooltip key={String(index)} title={name}>
              <ThemeColorBlock
                color={color}
                check={color === setting.primaryColor}
                onClick={selectColor(color)}
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

ThemeColor.propTypes = {};

export default ThemeColor;
