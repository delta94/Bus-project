import React from 'react';
import { Row, Col, Card } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';

const ApplyForCard = ({ applyFor }) => {
  const branches = useSelector((state) => state.branches.allData);
  return (
    <Row gutter={40}>
      {applyFor?.type === 'all' ? (
        <Col span={12}>
          <Card>
            <h2> Áp dụng: </h2>
            <ul style={{ padding: 20 }}>
              <span className="text-18-22 text-title">- Tất cả cửa hàng</span>
            </ul>
          </Card>
        </Col>
      ) : (
        <Col span={12}>
          <Card>
            <h2> Áp dụng: </h2>
            <ul style={{ padding: 20 }}>
              {applyFor?.branches?.map((branch, index) => {
                return (
                  <Link to={`/branches/${branch}`} key={String(index)}>
                    <li key={String(index)}>
                      <span className="text-18-22 text-title hover:text-primary">
                        {`- ${
                          branches.find((e) => e?.[PRIMARY_KEY] === branch)
                            ?.name
                        }`}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </Card>
        </Col>
      )}
      <Col span={12}>
        <Card>
          <h2> Không áp dụng: </h2>
          <ul style={{ padding: 20 }}>
            {applyFor?.except?.map((branch, index) => (
              <Link to={`/branches/${branch}`} key={String(index)}>
                <li key={String(index)}>
                  <span className="text-18-22 text-title hover:text-primary">
                    {`- ${
                      branches.find((e) => e?.[PRIMARY_KEY] === branch)?.name
                    }`}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </Card>
      </Col>
    </Row>
  );
};

ApplyForCard.propTypes = {
  applyFor: PropTypes.object,
};

ApplyForCard.defaultProps = {};

export default ApplyForCard;
