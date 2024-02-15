import { Link } from "react-router-dom";
import cn from "classnames";

import { RoutePath } from "shared/config/routeConfig/routeConfig";
import styles from "./Navbar.module.scss";

interface Props {
  classes?: {
    root?: string;
    list?: string;
  };
}

export const Navbar = ({ classes }: Props) => {
  return (
    <nav className={cn(styles.root, classes?.root)}>
      <ul className={styles.list}>
        <Link to={RoutePath.main}>Главная</Link>
        <Link to={RoutePath.about}>Контакты</Link>
      </ul>
    </nav>
  );
};
