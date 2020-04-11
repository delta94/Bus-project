/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Card, Switch, Button } from 'antd';
import PropTypes from 'prop-types';
import { formatNumberToMoney, formatNumber } from 'utils/textUtils';
import useRouter from 'hooks/useRouter';
import Icon from '@ant-design/icons';
import { isNull } from 'utils/validateUtils';
import { useSelector } from 'react-redux';
import { MILESTONE_LIST, CASHBACK_TYPE } from './utils';

const MileStoneCard = ({ id, backgroundColor, value, cashback }) => {
  const { handlePushModal } = useRouter();
  const data = useSelector((state) => state.companies.data);

  return (
    <Card style={{ background: backgroundColor }}>
      <div className="flex justify-between items-center">
        <h2 className="text-600-30-36">
          <Icon
            component={MILESTONE_LIST?.[id]?.icon}
            style={{ marginRight: 10, fontSize: 40 }}
          />
          {MILESTONE_LIST?.[id]?.title}
        </h2>
        <Switch
          checked={
            data?.loyaltyProgram?.active &&
            !isNull(value) &&
            !!cashback?.value &&
            !!cashback?.type
          }
        />
      </div>
      <p className="text-500-14-16" style={{ marginTop: 20 }}>
        {!isNull(value)
          ? `Tích luỹ ${formatNumberToMoney(value)}`
          : 'Chưa cập nhật'}
      </p>
      <div
        className="flex justify-between items-center"
        style={{ marginTop: 30 }}
      >
        <Button onClick={() => handlePushModal('loyalty/update', { id })}>
          Cập nhật
        </Button>

        {!isNull(cashback?.value) ? (
          <span>
            {formatNumber(
              cashback?.value,
              0,
              3,
              CASHBACK_TYPE?.[cashback?.type],
            )}
          </span>
        ) : (
          'Chưa cập nhật'
        )}
      </div>
    </Card>
  );
};

MileStoneCard.propTypes = {
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  value: PropTypes.number,
  cashback: PropTypes.object,
};

export default MileStoneCard;
