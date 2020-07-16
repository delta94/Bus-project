import React from 'react';
import { Tooltip, Row } from 'antd';
import styled from 'styled-components';
import { CheckOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import useSetting, { THEME_LIST } from '../../hooks/useSetting';

const Tag = React.forwardRef(({ check, ...rest }, ref) => (
  <div {...rest} ref={ref}>
    {check ? <CheckOutlined style={{ color: 'green', fontSize: 20 }} /> : ''}
  </div>
));

Tag.propTypes = {
  check: PropTypes.bool.isRequired,
};

export const ThemeBlock = styled(Tag)`
  width: 40px;
  height: 40px;
  background-image: ${({ image }) => `url(${image})`};
  margin-right: 8px;
  font-weight: bold;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PageStyleSetting = () => {
  const { setting, changeSetting } = useSetting();

  const selectTheme = (theme) => () => {
    changeSetting({
      themeStyle: theme,
    });
  };
  return (
    <div>
      <h3> Page Style Setting</h3>
      <Row style={{ marginTop: 20 }}>
        {THEME_LIST.map(({ image, name, key }, index) => {
          return (
            <Tooltip key={String(index)} title={name}>
              <ThemeBlock
                image={image}
                check={key === setting.themeStyle}
                onClick={selectTheme(key)}
              />
            </Tooltip>
          );
        })}
      </Row>
    </div>
  );
};

PageStyleSetting.propTypes = {};

export default PageStyleSetting;
