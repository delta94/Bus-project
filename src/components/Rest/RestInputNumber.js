/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Form, InputNumber, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { validateRegex } from 'utils/validateUtils';
import { QuestionCircleOutlined } from '@ant-design/icons';
import numberToVietnamese from 'utils/numberToVietnamese';

const RestInputNumber = ({
  fieldName,
  label,
  required,
  messageRequire,
  messageValidate,
  className,
  placeholder,
  onChange,
  min,
  max,
  validateTrigger,
  pattern,
  help,
  formatter,
  parser,
  labelCol,
  wrapperCol,
  width,
  desc,
  step,
  style,
  hasText,
}) => {
  const [number, setNumber] = useState('');
  const handleChane = (e) => {
    hasText && setNumber(e);
    onChange && onChange(e);
  };
  return (
    <div>
      <Form.Item
        validateTrigger={validateTrigger}
        label={
          label ? (
            <span>
              {label}
              {desc && (
                <>
                  &nbsp;
                  <Tooltip title={desc}>
                    <QuestionCircleOutlined />
                  </Tooltip>
                </>
              )}
            </span>
          ) : (
            label
          )
        }
        name={fieldName}
        help={help}
        required={false}
        style={style}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        rules={[
          {
            required,
            message: messageRequire,
          },
          {
            pattern,
            message: messageValidate,
          },
        ]}
      >
        <InputNumber
          min={min}
          style={{ width, ...style }}
          parser={parser}
          formatter={formatter}
          step={step}
          max={max}
          onChange={handleChane}
          placeholder={placeholder}
          className={className}
        />
      </Form.Item>
      {hasText && number !== '' && (
        <p className="text-12px-22px">
          {`Bằng chữ: ${numberToVietnamese(number)} đồng`}
        </p>
      )}
    </div>
  );
};

RestInputNumber.propTypes = {
  fieldName: PropTypes.any,
  formatter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  label: PropTypes.string,
  desc: PropTypes.string,
  required: PropTypes.bool,
  messageRequire: PropTypes.string,
  messageValidate: PropTypes.string,
  parser: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.any,
  min: PropTypes.number,
  max: PropTypes.number,
  help: PropTypes.string,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  validateTrigger: PropTypes.array,
  hasText: PropTypes.bool,
  style: PropTypes.object,
  width: PropTypes.number,
  step: PropTypes.number,
};

RestInputNumber.defaultProps = {
  required: true,
  hasText: false,
  pattern: validateRegex.number,
  messageRequire: 'Không được trống',
  messageValidate: 'Không hợp lệ',
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

export default RestInputNumber;
