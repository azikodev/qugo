import { MousePointer2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import qugo from "../assets/Qugo.svg";
import "../css/Navbar.css";
import avatar from "../assets/Avatar.svg";
const Navbar = () => {
  return (
    <>
      <div className="w-full  m-auto bg-[#fafafa] h-full mb-4">
        <div className="container flex justify-between max-w-[1280px] m-auto pt-4 pb-4 pl-4 pr-4 ">
          <div className="cursor flex gap-2 items-center">
            <MousePointer2 className="cursor-icon  color-[#249D55]" />
            <a
              className="text-[#249D55] hover:text-[#249D55] cursor-pointer text-3xl "
              href="/"
            >
              Москва
            </a>
          </div>
          <select className="bg-[#fafafa] active:border-none " name="select">
            <option value="value1" className="text-[#2e2e2e]">
              Значение 1
            </option>
            <option value="value2" selected className="text-[#2e2e2e]">
              ООО “Рога и копыта”
            </option>
            <option value="value3" className="text-[#2e2e2e]">
              Значение 3
            </option>
          </select>
        </div>
      </div>
      <div className="w-full navlinks flex  m-auto max-w-[1280px] pb-6 mb-[60px]">
        <a href="/">
          <img src={qugo} />
        </a>

        <div className="nav-links-1">
          <a href="#" className="nav-link">
            Создать задание
          </a>
          <a href="#" className="nav-link">
            Найти задание
          </a>
          <a href="#" className="nav-link">
            Для бизнеса
          </a>
        </div>
        <div className="nav-links-2">
          <a href="#" className="nav-link">
            Сообщения
          </a>
          <a href="#" className="nav-link">
            Мои заказы 2
          </a>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
