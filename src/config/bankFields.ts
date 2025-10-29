const bankFields = [
  {
    name: "bankName",
    placeholder: "Bank Name",
    rules: [{ required: true, message: "Please enter your bank name!" }],
  },
  {
    name: "accountNumber",
    placeholder: "Account Number",
    rules: [{ required: true, message: "Please enter your account number!" }],
  },
  {
    name: "accountName",
    placeholder: "Account Name",
    rules: [{ required: true, message: "Please enter your account name!" }],
  },
  {
    name: "passbookFile",
    rules: [{ required: true, message: "Please upload a file!" }],
  },
];

export default bankFields;