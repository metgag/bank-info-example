import type { Rule } from "antd/es/form";

export interface FormInput {
  name: string;
  placeholder?: string;
  rules?: Rule[];
}

export interface BankInfo {
  bankName: string;
  accountNumber: string;
  accountName: string;
  passbookFile?: File;
}