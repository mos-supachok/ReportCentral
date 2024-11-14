import React from 'react';
import { Space, Card, Col, Row, Table } from 'antd';

const { Meta } = Card;

const dataSource = [
  {
    key: '1',
    name: 'Mike Wazowski',
    usercode: '00000',
    username: 'mike',
    password: 'mike00',
    permission: 'User',
    department: 'Engineering',
  },
];

const columns = [
  {
    title: 'User code',
    dataIndex: 'usercode',
    key: 'usercode',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '40%'
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Permission',
    dataIndex: 'permission',
    key: 'permission',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
];

function Users() {

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card>
          <Meta title="Users" description="User management" />
          <div>
            <Table dataSource={dataSource} columns={columns} style={{ marginTop: '20px' }} />
          </div>
        </Card>
      </Space>
    </div>
  );
}

export default Users;
