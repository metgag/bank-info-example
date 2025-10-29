import { Form, type FormProps } from "antd";
import type React from "react";
import type { BankInfo } from "../../types/bank";
import bankFields from "../../config/bankFields";
import { BankFormInput, BankFormSubmit, BankFormUpload } from "./BankFormItem";
import styles from "./BankInformationForm.module.scss";

const BankInformationForm: React.FC = () => {
  const [form] = Form.useForm<BankInfo>();
  const [, , accountNameField, passbookField] = bankFields;

  const onFinish: FormProps<BankInfo>["onFinish"] = (values) => {
    console.log("Success: ", values);
  };
  const onFinishFailed: FormProps<BankInfo>["onFinishFailed"] = (err) => {
    console.log("Failed: ", err);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bank Information</h3>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles.form}
      >
        <div className={styles.row}>
          {bankFields
            .slice(0, 2).map(({ name, placeholder, rules }) => (
              <BankFormInput
                key={name}
                name={name}
                placeholder={placeholder}
                rules={rules}
              />
            ))}
        </div>

        <div className={styles.row}>
          <BankFormInput
            key={accountNameField.name}
            name={accountNameField.name}
            placeholder={accountNameField.placeholder}
            rules={accountNameField.rules}
          />

          <BankFormUpload
            key={passbookField.name}
            name={passbookField.name}
            rules={passbookField.rules}
          />
        </div>

        <BankFormSubmit />
      </Form>
    </div>
  );
};

export default BankInformationForm;