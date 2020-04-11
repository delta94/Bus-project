/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import { Button, List, Form, Divider, Avatar, notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import actions from 'redux/utils/actions';
import useRouter from 'hooks/useRouter';
import { get } from 'api/utils';

const CreateExisItem = () => {
  const branch = useSelector((state) => state.branches.data);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { routerState } = useRouter();
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    get(
      `/offline/admin/company/companies/${branch.companyID}/guides/children?excludeGuideParentID=${routerState.guide.id}`,
    ).then((response) => {
      setListItems(
        response.data.items?.map((guide) => {
          return {
            ...guide,
            selected: false,
          };
        }),
      );
    });
  }, [branch.companyID, branch[PRIMARY_KEY]]);

  const handleClick = (id) => () => {
    const newListData = listItems.map((guide) => {
      if (guide?.[PRIMARY_KEY] === id) {
        return {
          ...guide,
          selected: !guide.selected,
        };
      }
      return guide;
    });
    setListItems(newListData);
  };
  const handleSubmit = () => {
    const selectedItems = listItems.filter((item) => item.selected === true);
    if (selectedItems.length > 0) {
      dispatch(
        actions.guides.customData({
          method: 'POST',
          customResource: `company/guides/multiple`,
          hasActionAfterSucess: false,
          data: {
            parentId: routerState?.guide?.id,
            branchId: branch?.[PRIMARY_KEY],
            companyId: branch?.companyID,
            items: [...selectedItems],
          },
        }),
      ).then(() => {
        dispatch(
          actions.guides.getAllData({
            customResource: `company/branches/${branch?.[PRIMARY_KEY]}/guides`,
          }),
        );
      });
    } else {
      notification.error({
        message: 'Bạn phải lựa chọn ít nhất một hướng dẫn',
      });
    }
  };
  return (
    <Form form={form} onFinish={handleSubmit}>
      <Divider>CHỌN TỪ DANH SÁCH ĐÃ CÓ</Divider>
      <div style={{ height: 400 }} className="overflow-y-scroll">
        <List
          bordered
          dataSource={listItems}
          renderItem={(item) => (
            <List.Item
              onClick={handleClick(item?.[PRIMARY_KEY])}
              className={{
                'cursor-pointer': true,
                'cursor-not-allowed': item.blocked,
                'bg-primary-1': item.selected,
              }}
            >
              <List.Item.Meta
                className="items-center"
                avatar={
                  <Avatar shape="square" src={item?.icon?.sizes?.sm?.url} />
                }
                title={item?.desc?.vi}
              />
            </List.Item>
          )}
        />
      </div>
      <div
        className="flex justify-end absolute bottom-0"
        style={{ marginTop: '20px', right: 15 }}
      >
        <Form.Item>
          <Button
            icon={<CheckCircleOutlined />}
            type="primary"
            htmlType="submit"
          >
            {i18next.t('update')}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

CreateExisItem.propTypes = {};

export default CreateExisItem;
