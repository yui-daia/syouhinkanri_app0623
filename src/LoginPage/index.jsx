import { Authenticator } from '@aws-amplify/ui-react';
import MyPage from "../MyPage";

const LoginPage = () => {
    return (
        <Authenticator signUpAttributes={[
            'birthdate',
            'email',
            'family_name',
            'given_name',
            'name',
            'nickname',
            'phone_number',
            ]}>
        {({ signOut, user }) => (
          <Authenticator.Provider>
              <MyPage />
          </Authenticator.Provider>
        )}
        </Authenticator>
      );
}

export default LoginPage;