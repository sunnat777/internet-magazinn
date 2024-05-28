import React from "react";
import s from "./User.module.scss";
import {
  userIcon,
  cartIcon,
  menuIcon,
  logoutIcon,
  userPhoto,
} from "../../utils/imgExport";
import { Link } from "react-router-dom";
import Custombtn from "../UI/CustomBtn";

const links = [
  { url: "/", name: "Меню", icon: menuIcon },
  { url: "/cart", name: "Корзина", icon: cartIcon },
  { url: "/profile", name: "Профиль", icon: userIcon },
];

const User = () => {
  return (
    <div className={s.user}>
      <div className={s.user_info}>
        <img src={userPhoto} alt="" className={s.user_info_img} />
        <h2 className={s.user_info_name}>Антон Ларичев</h2>
        <a href="" className={s.user_info_email}>
          alaricode@ya.ru
        </a>
      </div>
      <ul className={s.user_list}>
        {links.map((link) => (
          <Link to={link.url} key={link.url} className={s.user_list_link}>
            <img src={link.icon} alt="" />
            <span>{link.name}</span>
          </Link>
        ))}
      </ul>
      <Custombtn
        text="Выйти"
        icon={logoutIcon}
        width={120}
        height={43}
        mt="auto"
        url='/login'
      />
    </div>
  );
};

export default User;
