import React from 'react';
import { Space, Card, Col, Row, Table } from 'antd';

const { Meta } = Card;

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    date: 'xx/xx/xxxx',
    time: 'xx:xx',
    topic: 'Project A',
    link: 'link',
  },
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: '20%',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    width: '15%',
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
    width: '15%'
  },
];

function History() {

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card>
          <Meta title="Report" description="History report" />
          <div>
            <Table dataSource={dataSource} columns={columns} style={{ marginTop: '20px' }} />
          </div>
        </Card>
      </Space>
    </div>
  );
}

export default History;
