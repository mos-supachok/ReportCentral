import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Space, Card, Button, Form, Input, Select, Radio, DatePicker, message, Upload, } from 'antd';

const { Meta } = Card;
const { Option } = Select;
const { Dragger } = Upload;
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 14,
  },
};

const reportType = [
  {
    label: 'Minute of meeting',
    value: 'mom',
  },
  {
    label: 'General report',
    value: 'gp',
  },
];

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function Create() {

  const [statRT, setStatRT] = useState(true);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const reportType_onChange = (e) => {
    //form.resetFields();
    setStatRT((e.target.value == 'mom') ? (false) : (true))
  }

  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex', }}>
        <Card>
          <Meta title="Report" description="Create a report" />
          <div>
            <Form {...layout} justify="center" form={form} name="control-hooks"
              onFinish={onFinish}
              style={{ margin: '20px' }}
            >
              <Form.Item name="reportype" label="Repor type" rules={[{ required: true, },]}>
                <Radio.Group
                  block
                  options={reportType}
                  optionType="button"
                  buttonStyle="solid"
                  onChange={reportType_onChange}
                />
              </Form.Item>
              <Form.Item name="topic" label="Topic">
                <Input />
              </Form.Item>
              <Form.Item name="date" label="Date" rules={[{ required: true, },]}>
                <DatePicker />
              </Form.Item>
              <Form.Item name="location" label="Location">
                <Input />
              </Form.Item>
              <Form.Item name="project" label="Project" rules={[{ required: statRT, },]}>
                <Select
                  disabled={statRT}
                  options={[
                    { value: 'project_a', label: 'Project A' },
                    { value: 'project_b', label: 'Project B' },
                    { value: 'project_c', label: 'Project C' },
                    { value: 'project_D', label: 'Project D' },
                  ]}
                />
              </Form.Item>
              <Form.Item name="intro" label="Intro">
                <Input.TextArea />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input.TextArea rows={6} />
              </Form.Item>
              <Form.Item name="nextstep" label="Next step">
                <Input.TextArea disabled={statRT} />
              </Form.Item>
              <Form.Item name="file" label="Upload file">
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Dragger>
              </Form.Item>

              <Form.Item {...tailLayout} >
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Space>
    </div >
  );
}

export default Create;
