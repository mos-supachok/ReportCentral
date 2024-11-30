import React from 'react';
import { Space, Card, Col, Row, Table } from 'antd';

const { Meta } = Card;

function Profile() {

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card>
          <Meta title="Profile" description="User profile" />
          <div>
          </div>
        </Card>
      </Space>
    </div>
  );
}

export default Profile;
