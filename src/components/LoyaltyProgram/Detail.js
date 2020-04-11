/* eslint-disable react/jsx-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Card, Button, Row, Col, Empty, Switch, Popconfirm } from 'antd';
import useRouter from 'hooks/useRouter';
import CardTitle from 'components/common/CardTitle';
// import { useSelector } from 'react-redux';
import TooltipIcon from 'components/common/TooltipIcon';
import { EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/utils/actions';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import MileStoneCard from './MileStoneCard';
import ApplyForCard from './ApplyForCard';

const Detail = () => {
  const { handlePushModal } = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.companies.data);
  const handleConfirm = (id) => {
    dispatch(
      actions.companies.editLoyaltyProgram({
        customResource: `company/loyalty-programs/${id}/status`,
      }),
    );
  };
  return (
    <Card
      title=<CardTitle title="Chương trình thành viên" />
      extra=<div className="flex items-center">
        {!data?.loyaltyProgram?.[PRIMARY_KEY] && (
          <Button
            type="primary"
            onClick={() => handlePushModal(`loyalty/create`)}
          >
            Tạo mới
          </Button>
        )}
        {data?.loyaltyProgram?.[PRIMARY_KEY] && (
          <TooltipIcon
            icon={EditOutlined}
            style={{ marginLeft: 20, fontSize: 30 }}
            title="Chỉnh sửa chương trình"
            onClick={() => handlePushModal(`loyalty/edit`)}
          />
        )}
      </div>
    >
      {data?.loyaltyProgram?.[PRIMARY_KEY] ? (
        <>
          <div className="flex justify-between">
            <h3 className="text-header-table"> 1. Nâng mức tích luỹ</h3>
            <div>
              <span className="text-600-16-19" style={{ marginRight: 10 }}>
                Trạng thái:
              </span>
              <Popconfirm
                title={`Bạn có muốn ${
                  data?.loyaltyProgram?.active ? 'đóng' : 'mở'
                } chương trình này?`}
                onConfirm={() =>
                  handleConfirm(data?.loyaltyProgram?.[PRIMARY_KEY])
                }
              >
                <Switch
                  checked={data?.loyaltyProgram?.active}
                  style={{ marginRight: 10 }}
                />
              </Popconfirm>
            </div>
          </div>
          <div>
            <Row style={{ marginTop: 10 }}>
              {data?.loyaltyProgram?.milestones?.map((mileStone, index) => (
                <Col span={12} style={{ padding: 10 }} key={String(index)}>
                  <MileStoneCard
                    id={mileStone?.[PRIMARY_KEY]}
                    title="Thành viên"
                    value={mileStone?.value}
                    cashback={mileStone?.cashback}
                  />
                </Col>
              ))}
            </Row>
            <div style={{ padding: 10, marginTop: 20 }}>
              <ApplyForCard applyFor={data?.loyaltyProgram?.applyFor} />
              <Card style={{ marginTop: 20 }}>
                <p className="text-18-22 text-title">
                  <span className="text-600-18-22">Mô tả: </span>
                  <span>{data?.loyaltyProgram?.desc?.vi}</span>
                </p>
              </Card>
            </div>
          </div>
        </>
      ) : (
        <Empty />
      )}
    </Card>
  );
};

Detail.propTypes = {};

Detail.defaultProps = {};

export default Detail;
