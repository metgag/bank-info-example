import type React from "react";
import type { FormInput } from "../../types/bank";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const BankFormInput: React.FC<FormInput> = ({
  name, placeholder, rules,
}) => (
  <Form.Item
    name={name}
    rules={rules}
  >
    <Input placeholder={placeholder} />
  </Form.Item>
);

export const BankFormUpload: React.FC<FormInput> = ({
  name, rules,
}) => (
  <Form.Item
    name={name}
    rules={rules}
    valuePropName="fileList"
    getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
  >
    <Upload beforeUpload={() => false} maxCount={1}>
      <Button icon={<UploadOutlined />}>
        Upload File (.pdf/.jpg/.jpeg)
      </Button>
    </Upload>
  </Form.Item>
);

export const BankFormSubmit: React.FC = () => (
  <Form.Item>
    <Button
      type="primary"
      htmlType="submit"
      color="default"
      variant="solid"
    >
      Save Information
    </Button>
  </Form.Item>
);
