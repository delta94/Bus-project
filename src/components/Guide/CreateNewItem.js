import React from 'react';
import RestCreate from 'components/common/RestCreate';
import { Form as AntForm, Button } from 'antd';
import i18next from 'i18next';
import { CheckCircleOutlined } from '@ant-design/icons';
import { omit } from 'lodash';
import useRouter from 'hooks/useRouter';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import FormItems from './FormItems';

const CreateNewItem = () => {
  const { routerState } = useRouter();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.branches.data);
  const handleSubmit = (values) => {
    dispatch(
      actions.guides.customData({
        method: 'POST',
        customResource: 'company/guides',
        hasActionAfterSucess: false,
        data: {
          ...omit(values, 'tempIcon'),
          parentId: routerState?.guide?.id,
          ...(values.tempIcon && {
            icon: {
              // eslint-disable-next-line no-underscore-dangle
              _id: values.tempIcon._id,
              sizes: {
                sm: {
                  width:
                    values.tempIcon.file.response.data?.dimensions?.small
                      ?.width,
                  height:
                    values.tempIcon.file.response.data?.dimensions?.small
                      ?.height,
                  url: values.tempIcon.file.response?.data?.url,
                },
                md: {
                  width:
                    values.tempIcon.file.response?.data?.dimensions?.medium
                      ?.width,
                  height:
                    values.tempIcon.file.response?.data?.dimensions?.medium
                      ?.height,
                  url: values.tempIcon.file.response?.data?.urlMd,
                },
              },
            },
          }),
        },
      }),
    ).then(() => {
      dispatch(
        actions.guides.getAllData({
          customResource: `company/branches/${data?.[PRIMARY_KEY]}/guides`,
        }),
      );
    });
  };

  return (
    <RestCreate resource="guides" footer={false} customSubmit={handleSubmit}>
      <FormItems />
      <div className="flex justify-end" style={{ marginTop: '20px' }}>
        <AntForm.Item>
          <Button
            icon={<CheckCircleOutlined />}
            type="primary"
            htmlType="submit"
          >
            {i18next.t('createNew')}
          </Button>
        </AntForm.Item>
      </div>
    </RestCreate>
  );
};

export default CreateNewItem;
