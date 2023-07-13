import { Link } from "react-router-dom";
import {
  Component1 
 } from '../ui-components';

const BlankPage = () => {
  return (
    <>
      空っぽのページです。
      <Component1 />
      <div>
        <Link to="/blank">ブランクページへ</Link>
      </div>
      <div>
        <Link to="/my_page">マイページへ</Link>
        <Component1 />
      </div>
    </>
  );
};
export default BlankPage;
