import { useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from "react";
import { Auth } from 'aws-amplify';

const UserEditPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const [nickname, setNickname] = useState(user.attributes.nickname);
    async function updateUserInfo() {
        let result = null;
        try {
            const user = await Auth.currentAuthenticatedUser();
            result = await Auth.updateUserAttributes(user, {
                nickname: nickname
            });
        } catch(error) {
            console.log('error update: ', error);
        }
        if (result === 'SUCCESS') {
            alert("ユーザー情報を更新しました！");
        }
        else {
            alert("ユーザー情報の更新に失敗しました・・・");
        }
        return result;
    }
    return (
        <main>
            <li>birthdate: <input defaultValue={user.attributes.birthdate} /></li>
            <li>email: <input defaultValue={user.attributes.email} /></li>
            <li>family_name: <input defaultValue={user.attributes.family_name} /></li>
            <li>given_name: <input defaultValue={user.attributes.given_name} /></li>
            <li>name: <input defaultValue={user.attributes.name} /></li>
            <li>nickname: <input defaultValue={user.attributes.nickname} /></li>
            
            <p><button onClick={() => updateUserInfo()}>ユーザー情報を変更する</button></p>
            <p><button onClick={signOut}>ログアウトする</button></p>
        </main>
    );
}

export default UserEditPage;