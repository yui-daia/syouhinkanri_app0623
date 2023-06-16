import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Table } from "antd";
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
        console.log(attributesArr);
        setUserAttributes(attributesArr);
      } catch (error) {
        // コンソールログを出力
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
      <Button onClick={signOut}>ログアウトする</Button>
    </>
  );
};

export default MyPage;
