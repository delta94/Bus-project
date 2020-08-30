import React, { useEffect } from 'react';
import MaterialBreadcrumb from '@/components/common/MaterialBreadcrumb';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card, Skeleton, Avatar } from 'antd';
import useRouter from '@/hooks/useRouter';
import { useDispatch, useSelector } from 'react-redux';
import FadeIn from 'react-fade-in';
import { EditOutlined } from '@ant-design/icons';
import actions from '../actions';
import Field from '../../components/common/Field';
import TooltipIcon from '../../components/common/TooltipIcon';
import TransactionDetail from './components/TransactionDetail';

const Detail = () => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { item: user, loading } = useSelector((state) => state.users);
  useEffect(() => {
    const promise = dispatch(
      actions.users.getById({
        id: query.id,
      }),
    );
    return () => {
      promise.abort();
    };
  }, [dispatch, query.id]);
  return (
    <>
      <MaterialBreadcrumb
        data={[{ path: '#', title: t(`users.breadCrumb`) }]}
      />
      <Row style={{ marginBottom: 115, marginTop: 19 }} gutter={30}>
        <Col xs={24} md={8} style={{ marginBottom: 20 }}>
          <Card
            title="Thông tin cá nhân"
            extra=<TooltipIcon
              icon={EditOutlined}
              title="Chỉnh sửa"
              style={{ fontSize: 20 }}
            />
          >
            {loading === 'getById' ? (
              <Skeleton />
            ) : (
              <FadeIn>
                <Avatar src={user.avatar} size={100} />
                <div style={{ marginTop: 20 }}>
                  <Field title="Tên" value={user.username} />
                  <Field title="Giới tính" value={user.gender} />
                  <Field title="Email" value={user.email} />
                  <Field title="Số điện thoại" value={user.phoneNumber} />
                  <Field title="Ví tiền" value={`${user.amount}đ`} />
                  <Field title="Lượt đi" value={user.totalTransaction} />
                </div>
              </FadeIn>
            )}
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <TransactionDetail
            transactions={user.transactions}
            loading={loading === 'getById'}
          />
        </Col>
      </Row>
    </>
  );
};

Detail.propTypes = {};

export default Detail;
