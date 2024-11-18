import React, { useState, useEffect } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { Space, Card, Button, Form, Input, Select, Radio, DatePicker, message, Upload, } from 'antd';
import axios from 'axios';

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

function Create() {

  const [statRT, setStatRT] = useState(true);
  const [files, setFiles] = useState([]);

  const props = {
    name: 'file',
    multiple: true,
    customRequest: async ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    },
    // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === 'error') {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
      if (status === 'done') {
        message.success(`${info.file.name} added.`)
      } else if (status === 'removed') {
        message.info(`${info.file.name} removed.`)
      }
      console.log(info.fileList)
      setFiles(info.fileList)
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const [form] = Form.useForm();
  const onFinish = async (values) => {

    // values = {
    //   reporttype: "...",
    //   file: {
    //     file: [{
    //       ...
    //       originFileObj: File[]
    //     }]
    //   }
    // }
    // values.file.file.originFileObj

    // remap files
    delete values.file
    values['files'] = files.map(f => f.originFileObj)

    const response = await axios.postForm("http://localhost:8000/report/", values);
    if (response.status === 201) {
      message.success("Submitted")
      form.resetFields();
      setFiles([])
    }
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
              <Form.Item name="reporttype" label="Report type" rules={[{ required: true, },]}>
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
