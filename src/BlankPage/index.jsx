import { Link } from "react-router-dom";

const BlankPage = () => {
  return (
    <>
      空っぽのページです。
      <div>
        <Link to="/blank">ブランクページへ</Link>
      </div>
      <div>
        <Link to="/my_page">マイページへ</Link>
      </div>
    </>
  );
};
export default BlankPage;
