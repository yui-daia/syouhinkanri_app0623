import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

const UserEditPage = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  const [birthDate, setBirthDate] = useState(user.attributes.birthdate);
  const [email, setEmail] = useState(user.attributes.email);
  const [familyName, setFamilyName] = useState(user.attributes.family_name);
  const [givenName, setGivenName] = useState(user.attributes.given_name);

  const [name, setName] = useState(user.attributes.name);
  const [nickname, setNickname] = useState(user.attributes.nickname);

  async function updateUserInfo() {
    let result = null;
    try {
      const user = await Auth.currentAuthenticatedUser();
      result = await Auth.updateUserAttributes(user, {
        birthdate: birthDate,
        email,
        family_name: familyName,
        given_name: givenName,
        name,
        nickname,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      //console.log("error update: ", error);
    }
    if (result === "SUCCESS") {
      alert("ユーザー情報を更新しました！");
    } else {
      alert("ユーザー情報の更新に失敗しました・・・");
    }
    return result;
  }

  return (
    <main>
      <li>
        birthdate:{" "}
        <input
          value={birthDate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </li>
      <li>
        email:{" "}
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </li>
      <li>
        family_name:{" "}
        <input
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
        />
      </li>
      <li>
        given_name:{" "}
        <input
          value={givenName}
          onChange={(e) => setGivenName(e.target.value)}
        />
      </li>
      <li>
        name: <input value={name} onChange={(e) => setName(e.target.value)} />
      </li>
      <li>
        nickname:{" "}
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </li>

      <p>
        <button onClick={() => updateUserInfo()}>ユーザー情報を変更する</button>
      </p>
      <p>
        <button onClick={signOut}>ログアウトする</button>
      </p>

      <Link to="/blank">ブランクページへ</Link>
      <Link to="/my_page">マイページへ</Link>
    </main>
  );
};

export default UserEditPage;
