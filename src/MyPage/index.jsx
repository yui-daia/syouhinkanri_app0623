import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

const MyPage = () => {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const [userAttributes, setUserAttributes] = useState([]);

  useEffect(() => {
    const fetchUserAttributes = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const attributesArr = Object.entries(user.attributes).map(
          ([attribute, value], index) => ({ key: index, attribute, value })
        );
        setUserAttributes(attributesArr);
      } catch (error) {
        // コンソールログを出力
        // eslint-disable-next-line no-console
        // console.log("error fetching user attributes: ", error);
      }
    };

    fetchUserAttributes();
  }, []);

  const columns = [
    {
      title: "Attribute",
      dataIndex: "attribute",
      key: "attribute",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={userAttributes} />
      <div>
        <Link to="/blank">ブランクページへ</Link>
      </div>
      <div>
        <Link to="/my_page">マイページへ</Link>
      </div>
      <div>
        <Link to="/todo_page">TODOページへ</Link>
      </div>
      <Button onClick={signOut}>ログアウトする</Button>
    </>
  );
};

export default MyPage;
