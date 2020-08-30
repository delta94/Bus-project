/* eslint-disable max-lines */
import React from 'react';
import MaterialBreadcrumb from '@/components/common/MaterialBreadcrumb';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';
import News from './News';
import TopNews from './TopNews';

const data = [
  {
    thumbnail:
      'https://www.danangbus.vn/UploadImages/2d3018a3be64453a1c75(2).jpg',
    title: 'TRIỂN KHAI THÍ ĐIỂM LẮP ĐẶT QR CODE TẠI TRẠM DỪNG XE BUÝT',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 100,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.03%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 101,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.01%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/06.26%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 103,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/thong%20bao%20tan%20xua%20chay%20xe.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/doi%20tra%20tem%20ve%20thang.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.16%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.03%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.01%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/06.26%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/thong%20bao%20tan%20xua%20chay%20xe.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/doi%20tra%20tem%20ve%20thang.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.16%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 100,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.03%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 101,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.01%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/06.26%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 103,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/thong%20bao%20tan%20xua%20chay%20xe.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/doi%20tra%20tem%20ve%20thang.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/07.16%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/926760d8dd9826c67f89.png',
    title:
      'Thông báo mở thêm điểm bán vé xe buýt trợ giá tại Trung tâm Thông tin dịch vụ công Đà Nẵng',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/926760d8dd9826c67f89.png',
    title: 'TRIỂN KHAI THÍ ĐIỂM LẮP ĐẶT QR CODE TẠI TRẠM DỪNG XE BUÝT',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
  {
    thumbnail:
      'https://www.danangbus.vn/Thumb.ashx?s=500&file=/UploadImages/news/06.26%20thumb.jpg',
    title: 'VI PHẠM ĐẬU ĐỖ TRÊN VẠCH DỪNG XE BUÝT - Từ 03/7 đến 10/7/2020',
    createdAt: '2020-07-18 07:08:13.75481',
    totalView: 102,
  },
];

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div>
      <MaterialBreadcrumb
        data={[{ path: '#', title: t(`dashboard.breadCrumb`) }]}
      />
      <Row gutter={40} style={{ marginTop: 20, marginBottom: 100 }}>
        <Col md={16}>
          <News src={data} />
        </Col>
        <Col md={8}>
          <TopNews src={data} />
        </Col>
      </Row>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
