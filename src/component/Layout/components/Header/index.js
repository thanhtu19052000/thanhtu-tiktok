import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrrapper")}>
      <div className={cx("inner")}>{/* {logo} */}</div>
    </header>
  );
}

export default Header;
