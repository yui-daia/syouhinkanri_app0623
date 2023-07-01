import React, { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';  // <--- ここを変更
import MyPage from '../MyPage';

const LoginPage = () => {
  const navigate = useNavigate();  // <--- ここを変更
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(user) {
      navigate("/my_page");  // <--- ここを変更
    }
  }, [user, navigate]);  // <--- ここを変更

  return (
    <Authenticator
      signUpAttributes={[
        "email",
        "family_name",
        "given_name",
        "name",
        "nickname",
      ]}
      onStateChange={(authState) => setUser(authState.user)}
    >
      <MyPage />
    </Authenticator>
  );
};

export default LoginPage;
