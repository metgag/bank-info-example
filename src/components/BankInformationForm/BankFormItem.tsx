import type React from "react";
import type { FormInput } from "../../types/bank";
import { Button, Form, Input, Upload } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import styles from "./BankInformationForm.module.scss";

export const BankFormInput: React.FC<FormInput> = ({
  name, placeholder, rules,
}) => (
  <Form.Item
    name={name}
    rules={rules}
  >
    <Input className={styles.customInput} placeholder={placeholder} />
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
    <Upload beforeUpload={() => false} maxCount={1}
      className={styles.customUpload}
    >
      <Button
        icon={<PaperClipOutlined />}
        color="default"
        variant="text"
      >
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
      className={styles.customBtn}
    >
      Save Information
    </Button>
  </Form.Item>
);
