import React from 'react';
import { Space, theme, Card, Col, Row, Table } from 'antd';

function Home() {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      date: 'xx/xx/xxxx',
      time: 'xx:xx',
      topic: 'Project A',
      link: 'link',
    },
    {
      key: '2',
      name: 'John',
      date: 'xx/xx/xxxx',
      time: 'xx:xx',
      topic: 'Project B',
      link: 'link',
    },
    {
      key: '3',
      name: 'Tony',
      date: 'xx/xx/xxxx',
      time: 'xx:xx',
      topic: 'Project C',
      link: 'link',
    },
  ];

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      key: 'topic',
    },
    {
      title: 'Detail',
      dataIndex: 'link',
      key: 'link',
    },
  ];

  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="All report" size="medium">
              x,xxx
            </Card>
          </Col>
          <Col span={8}>
            <Card title="All MoM" size="medium">
              x,xxx
            </Card>
          </Col>
          <Col span={8}>
            <Card title="All general report" size="medium">
              x,xxx
            </Card>
          </Col>
        </Row>
      </div>

      <Space direction="vertical" size="middle" style={{ display: 'flex', paddingTop: '20px' }}>
        <Card title="MoM – Minute of meeting" size="medium">
          <Table dataSource={dataSource} columns={columns} />
        </Card>
        <Card title="General report" size="medium">
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </Space>

    </div >
  );
}

export default Home;
