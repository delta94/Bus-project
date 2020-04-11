/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Card, Tag, Switch, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import FieldItem from 'components/common/FieldItem';
import useRouter from 'hooks/useRouter';
import GoogleMap from 'components/common/GoogleMap';
import UploadImage from 'components/common/UploadImage';
import { getCity } from 'utils/city';
import { useDispatch } from 'react-redux';
import actions from 'redux/utils/actions';
import TooltipIcon from 'components/common/TooltipIcon';
import { EditOutlined } from '@ant-design/icons';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import ReadMoreText from 'components/common/ReadMoreText';
import WorkingHourTable from './WorkingHourTable';

const Detail = ({ data }) => {
  const { handlePushModal } = useRouter();
  const dispatch = useDispatch();
  const handleUpload = (response) => {
    dispatch(
      actions.branches.editData({
        id: data?.[PRIMARY_KEY],
        customResource: `company/branches`,
        data: {
          ...data,
          logo: {
            _id: response._id,
            sizes: {
              sm: {
                width: response?.data?.dimensions?.small?.width,
                height: response?.data?.dimensions?.small?.height,
                url: response?.data?.url,
              },
              md: {
                width: response?.data?.dimensions?.medium?.width,
                height: response?.data?.dimensions?.medium?.height,
                url: response?.data?.urlMd,
              },
            },
          },
        },
      }),
    );
  };

  const handleConfirm = (id) => {
    dispatch(
      actions.branches.editData({
        customResource: `company/branches/${id}/status`,
      }),
    );
  };

  return (
    <Card
      title={data?.name}
      extra=<div className="flex items-center">
        <span className="text-600-16-19" style={{ marginRight: 10 }}>
          Trạng thái:
        </span>
        <Popconfirm
          title={`Bạn có muốn ${data?.active ? 'đóng' : 'mở'} chi nhánh này?`}
          onConfirm={() => handleConfirm(data?.[PRIMARY_KEY])}
        >
          <Switch checked={data?.active} style={{ marginRight: 10 }} />
        </Popconfirm>

        <TooltipIcon
          title="Chỉnh sửa chi nhánh"
          icon={EditOutlined}
          style={{ fontSize: 21 }}
          onClick={() => handlePushModal('branches/edit')}
        />
      </div>
    >
      <div>
        <UploadImage
          onOk={handleUpload}
          defaultImage={data?.logo?.sizes.sm.url}
        />
        <h4>Thông tin liên hệ</h4>
        <div style={{ marginTop: '20px' }}>
          <div style={{ marginLeft: 20 }}>
            <FieldItem name="Thành Phố" value={getCity(data?.city)} />
            <FieldItem name="SĐT Liên hệ" value={data?.contact?.phone} />
            <FieldItem
              name="Danh mục"
              value=<div display="flex">
                {data?.categories?.map((e, index) => (
                  <Tag color="blue" key={String(index)}>
                    {e?.name?.vi}
                  </Tag>
                ))}
              </div>
            />
            <FieldItem name="Địa chỉ" value={data?.address?.display} />
            <FieldItem
              name="Mô tả"
              value=<ReadMoreText text={data?.desc?.vi} />
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <GoogleMap
              lat={data?.location?.coordinates?.[0]}
              lng={data?.location?.coordinates?.[1]}
              zoom={17}
              height={350}
              width="100%"
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <WorkingHourTable data={data?.workingHours} />
      </div>
    </Card>
  );
};

Detail.propTypes = {
  data: PropTypes.object,
};

export default Detail;
