import cn from "classnames";

import { AppLink } from "shared/ui/AppLink/AppLink";
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
        <AppLink to={RoutePath.main}>Главная</AppLink>
        <AppLink to={RoutePath.about}>Контакты</AppLink>
      </ul>
    </nav>
  );
};
