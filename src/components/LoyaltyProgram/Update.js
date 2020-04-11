/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Row, Col, Select } from 'antd';
import RestEdit from 'components/common/RestEdit';
import RestInputNumber from 'components/common/RestInputNumber';
import RestSelect from 'components/common/RestSelect';
import useRouter from 'hooks/useRouter';
import Icon from '@ant-design/icons';
import actions from 'redux/utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import { moneyFomatter, numberFomatter } from 'utils/formatter';
import { validateRegex } from 'utils/validateUtils';
import { MILESTONE_LIST } from './utils';

const Update = () => {
  const dispatch = useDispatch();
  const { routerState } = useRouter();
  const company = useSelector((state) => state.companies.data);
  const handleSubmit = async (values) => {
    const newMilestones = company?.loyaltyProgram?.milestones?.map((e) => {
      if (e?.[PRIMARY_KEY] === routerState?.id) {
        return {
          id: routerState?.id,
          ...values,
        };
      }
      return e;
    });

    dispatch(
      actions.companies.editMileStonesLoyalty({
        customResource: `company/loyalty-programs/${company?.loyaltyProgram?.[PRIMARY_KEY]}`,
        data: {
          milestones: newMilestones,
        },
      }),
    );
  };
  return (
    <RestEdit
      resource="companies"
      customSubmit={handleSubmit}
      initialValues={company?.loyaltyProgram?.milestones.find(
        (e) => e?.[PRIMARY_KEY] === routerState?.id,
      )}
    >
      <div>
        <div className="flex items-center">
          <Icon
            component={MILESTONE_LIST?.[routerState?.id]?.icon}
            style={{ fontSize: 30, marginRight: 5 }}
          />
          {MILESTONE_LIST?.[routerState?.id]?.title}
        </div>
        <RestInputNumber
          label="Số tiền đạt mốc"
          fieldName="value"
          placeholder="Nhập số tiền"
          required={false}
          formatter={moneyFomatter}
          pattern={validateRegex.numberUnsigned}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          width={200}
          step={1000}
        />
        <Row style={{ marginTop: 10 }}>
          <Col span={16}>
            <RestInputNumber
              label="Hoàn tiền"
              fieldName={['cashback', 'value']}
              placeholder="Nhập số"
              required={false}
              pattern={validateRegex.numberUnsigned}
              formatter={numberFomatter}
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 12 }}
              width={140}
            />
          </Col>
          <Col span={8}>
            <RestSelect
              defaultValue="percent"
              fieldName={['cashback', 'type']}
              width={100}
              required={false}
              record="milestones[3].cashback.type"
              component=<Select>
                <Select.Option key="percent">%</Select.Option>
                <Select.Option key="fixedCash">đ</Select.Option>
              </Select>
            />
          </Col>
        </Row>
      </div>
    </RestEdit>
  );
};

export default Update;
