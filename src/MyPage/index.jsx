import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";

const MyPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    return (
        <main>
            <h1>Hello {user.username}</h1>
            <li>birthdate:{user.attributes.birthdate}</li>
            <li>email:{user.attributes.email}</li>
            <li>family_name:{user.attributes.family_name}</li>
            <li>given_name:{user.attributes.given_name}</li>
            <li>name:{user.attributes.name}</li>
            <li>nickname:{user.attributes.nickname}</li>
            <li>phone_number:{user.phone_number}</li>
            <button onClick={signOut}>Sign out</button>
            <p><Link to="/user_edit">ユーザー情報変更</Link></p>
        </main>
    );
}

export default MyPage;