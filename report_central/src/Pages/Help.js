import React from 'react';
import { Space, Card, Col, Row, Table } from 'antd';

const { Meta } = Card;

function Help() {

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card>
          <Meta title="Help" description="User guide" />
          <div>
          </div>
        </Card>
      </Space>
    </div>
  );
}

export default Help;
