import { PageHeader } from "antd";

const Header = () => {
  return (
    <PageHeader
      className="page-header"
      style={{ paddingLeft: "0" }}
      //   onBack={() => null}
      title="Notes"
      subTitle="simplest way to keep your notes"
    />
  );
};

export default Header;
