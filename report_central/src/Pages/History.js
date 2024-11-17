import React, { useState, useEffect } from 'react';
import { Space, Card, Table } from 'antd';
import axios from 'axios';

const { Meta } = Card;

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (val => {
      let formatted = Intl.DateTimeFormat('en-Us', {
        dateStyle: 'short',
        timeStyle: 'medium',
        timeZone: 'Asia/Bangkok'
      }).format(new Date(val))
      formatted = formatted.split(' ').slice(1, -1)
      return formatted
    })
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
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
  },
  {
    title: 'location',
    dataIndex: 'location',
    key: 'location',
  },
];

function History() {
  const [reportList, setReportList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReportList = async () => {
    const httpResponse = await axios.get("http://localhost:8000/report/");
    console.log(httpResponse)
    setReportList(httpResponse.data.report)
    setLoading(false);
  };

  useEffect(() => {
    fetchReportList();
  }, []);

  const deleteReportList = async (id) => {
    await axios.delete(`http://localhost:8000/report/${id}`);
    fetchReportList();
  }

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card>
          <Meta title="Report" description="History report" />
          <div>
            <Table dataSource={reportList} columns={columns} loading={loading} style={{ marginTop: '20px' }} />
          </div>
        </Card>
      </Space>
    </div>
  );
}

export default History;
