/* eslint-disable react/jsx-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
// import RestTextArea from 'components/common/RestTextArea';
import RestTextArea from 'components/common/RestTextArea';
import RestSelect from 'components/common/RestSelect';
import { Form as AntForm, Select, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import RestInputNumber from 'components/common/RestInputNumber';
import { ReactComponent as MemberCup } from 'assets/svg/member_cup.svg';
import { ReactComponent as SilverCup } from 'assets/svg/silver_cup.svg';
import { ReactComponent as GoldCup } from 'assets/svg/gold_cup.svg';
import { ReactComponent as PlatinumCup } from 'assets/svg/platinum_cup.svg';
import { useSelector } from 'react-redux';
import { numberFomatter, moneyFomatter } from 'utils/formatter';
import { validateRegex } from 'utils/validateUtils';
import RestSelectBranches from './RestSelectBranches';

const Form = () => {
  const company = useSelector((state) => state.companies.data);
  const [type, setType] = useState('all');
  useEffect(() => {
    company?.loyaltyProgram?.applyFor?.type &&
      setType(company?.loyaltyProgram?.applyFor?.type);
  }, [company]);

  const [exceptBranch, setExceptBranch] = useState([]);
  const handleChangeType = (e, form) => {
    setType(e);
    form.resetFields([['applyFor', 'except']]);
  };

  return (
    <Row gutter={50}>
      <Col span={12}>
        <RestSelect
          label="Kiểu"
          style={{ width: 200 }}
          fieldName="type"
          showSearch={false}
          component=<Select>
            <Select.Option key="cashbackPerBill">
              Trả tiền mỗi đơn
            </Select.Option>
          </Select>
        />
        <RestTextArea label="Mô tả ( Tiếng Việt )" fieldName={['desc', 'vi']} />
        <RestTextArea label="Mô tả ( English )" fieldName={['desc', 'en']} />
        <div className="flex">
          <AntForm.Item label="Áp dụng cho" />
          <RestSelect
            style={{ width: 200 }}
            fieldName={['applyFor', 'type']}
            defaultValue="all"
            onChange={handleChangeType}
            component=<Select>
              <Select.Option key="all"> Tất cả chi nhánh </Select.Option>
              <Select.Option key="branches"> Theo chi nhánh </Select.Option>
            </Select>
          />
        </div>
        <div style={{ padding: '0 20px' }}>
          {type !== 'all' && (
            <RestSelectBranches
              label="Chi nhánh"
              fieldName={['applyFor', 'branches']}
              mode="multiple"
              onChange={(e) => setExceptBranch(e)}
            />
          )}
          <RestSelectBranches
            label="Ngoại trừ"
            mode="multiple"
            fieldName={['applyFor', 'except']}
            except={exceptBranch}
            required={false}
          />
        </div>
      </Col>
      <Col span={12}>
        <AntForm.Item label="Cột mốc" />
        <AntForm.Item
          label=<span>
            <Icon
              component={MemberCup}
              style={{ fontSize: 20, marginRight: 5 }}
            />
            (Thành viên)
          </span>
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
        >
          <RestInputNumber
            label="Số tiền đạt mốc"
            fieldName={['milestones', 0, 'value']}
            placeholder="Nhập số tiền"
            required
            step={1000}
            pattern={validateRegex.numberUnsigned}
            formatter={moneyFomatter}
            defaultValue={null}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            width={200}
          />
          <Row style={{ marginTop: 10 }}>
            <Col span={16}>
              <RestInputNumber
                label="Hoàn tiền"
                fieldName={['milestones', 0, 'cashback', 'value']}
                placeholder="Nhập số"
                required
                step={1}
                pattern={validateRegex.numberUnsigned}
                formatter={numberFomatter}
                defaultValue={null}
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                width={140}
              />
            </Col>
            <Col span={8}>
              <RestSelect
                fieldName={['milestones', 0, 'cashback', 'type']}
                width={100}
                required={false}
                component=<Select>
                  <Select.Option key="percent">%</Select.Option>
                  <Select.Option key="fixedCash">đ</Select.Option>
                </Select>
              />
            </Col>
          </Row>
        </AntForm.Item>
        <AntForm.Item
          label=<span>
            <Icon
              component={SilverCup}
              style={{ fontSize: 20, marginRight: 5 }}
            />
            (Bạc)
          </span>
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
        >
          <RestInputNumber
            label="Số tiền đạt mốc"
            fieldName={['milestones', 1, 'value']}
            placeholder="Nhập số tiền"
            required={false}
            formatter={moneyFomatter}
            step={1000}
            pattern={validateRegex.numberUnsigned}
            defaultValue={null}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            width={200}
          />
          <Row style={{ marginTop: 10 }}>
            <Col span={16}>
              <RestInputNumber
                label="Hoàn tiền"
                fieldName={['milestones', 1, 'cashback', 'value']}
                placeholder="Nhập số"
                required={false}
                pattern={validateRegex.numberUnsigned}
                step={1}
                formatter={numberFomatter}
                defaultValue={null}
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                width={140}
              />
            </Col>
            <Col span={8}>
              <RestSelect
                fieldName={['milestones', 1, 'cashback', 'type']}
                width={100}
                required={false}
                component=<Select>
                  <Select.Option key="percent">%</Select.Option>
                  <Select.Option key="fixedCash">đ</Select.Option>
                </Select>
              />
            </Col>
          </Row>
        </AntForm.Item>
        <AntForm.Item
          label=<span>
            <Icon
              component={GoldCup}
              style={{ fontSize: 20, marginRight: 5 }}
            />
            (Vàng)
          </span>
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
        >
          <RestInputNumber
            label="Số tiền đạt mốc"
            fieldName={['milestones', 2, 'value']}
            placeholder="Nhập số tiền"
            labelCol={{ span: 8 }}
            defaultValue={null}
            pattern={validateRegex.numberUnsigned}
            formatter={moneyFomatter}
            step={1000}
            required={false}
            wrapperCol={{ span: 8 }}
            width={200}
          />
          <Row style={{ marginTop: 10 }}>
            <Col span={16}>
              <RestInputNumber
                label="Hoàn tiền"
                fieldName={['milestones', 2, 'cashback', 'value']}
                placeholder="Nhập số"
                labelCol={{ span: 12 }}
                step={1}
                formatter={numberFomatter}
                pattern={validateRegex.numberUnsigned}
                required={false}
                defaultValue={null}
                wrapperCol={{ span: 12 }}
                width={140}
              />
            </Col>
            <Col span={8}>
              <RestSelect
                fieldName={['milestones', 2, 'cashback', 'type']}
                width={100}
                required={false}
                component=<Select>
                  <Select.Option key="percent">%</Select.Option>
                  <Select.Option key="fixedCash">đ</Select.Option>
                </Select>
              />
            </Col>
          </Row>
        </AntForm.Item>
        <AntForm.Item
          label=<span>
            <Icon
              component={PlatinumCup}
              style={{ fontSize: 20, marginRight: 5 }}
            />
            (Bạch Kim)
          </span>
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 24 }}
        >
          <RestInputNumber
            label="Số tiền đạt mốc"
            fieldName={['milestones', 3, 'value']}
            placeholder="Nhập số tiền"
            required={false}
            pattern={validateRegex.numberUnsigned}
            formatter={moneyFomatter}
            step={1000}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            defaultValue={null}
            width={200}
          />
          <Row style={{ marginTop: 10 }}>
            <Col span={16}>
              <RestInputNumber
                label="Hoàn tiền"
                fieldName={['milestones', 3, 'cashback', 'value']}
                placeholder="Nhập số"
                required={false}
                defaultValue={null}
                step={1}
                pattern={validateRegex.numberUnsigned}
                formatter={numberFomatter}
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                width={140}
              />
            </Col>
            <Col span={8}>
              <RestSelect
                fieldName={['milestones', 3, 'cashback', 'type']}
                width={100}
                required={false}
                component=<Select>
                  <Select.Option key="percent">%</Select.Option>
                  <Select.Option key="fixedCash">đ</Select.Option>
                </Select>
              />
            </Col>
          </Row>
        </AntForm.Item>
      </Col>
    </Row>
  );
};

Form.propTypes = {};

export default Form;
