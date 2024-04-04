import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import VK from "../assets/VK.svg";
import Twitter from "../assets/Twitter.svg";
import GooglePlay from "../assets/GooglePlay.svg"
const Footer = () => {
  return (
    <>
      <div className="Navbar     m-auto bg-[#fafafa] pb-[20px]">
        <div className="flex justify-between container max-w-[1280px] m-auto pt-[80px] pb-[80px]">
            <ul>
              <li className="font-[700] text-[20px] mb-4"><a href="#">Категории услуг</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Курьерские доставки</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Бытовой ремонт</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Ремонт смартфонов</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Обучение детей</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Услуги промоутеров</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Грузоперевозки</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Психологи</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Клининговые услуги</a></li>
            </ul>
            <ul>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2 mt-[45px]"><a href="#">Фото и видео</a> </li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Фрилансеры</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Помощь без категории</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Ремонт компьютеров</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Уход за животными</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Ремонт авто</a></li>
            </ul>
            <ul>
              <li className="font-[700] text-[20px] mb-4">Сервис</li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">О сервисе</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Личный кабинет</a></li>
              <li className="font-[700] text-[20px] mb-4">Документы</li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Пользовательское соглашение Qugo</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Политика о данных</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Соглашение Qugo с Заказчиком</a></li>
              <li className="text-[#249D55] text-[16px] font-[500] mb-2"><a href="#">Проект договора услуг</a></li>
            </ul>
            <ul>
              <li className="font-[700] text-[20px] mb-4">Приложение QUGO</li>
              <li className="mb-[40px]"><a href="#"><img src={GooglePlay} alt="" /></a></li>
              <li className="flex gap-3">
                  <li><a href="#"><img src={Facebook} alt="" /></a></li>
                  <li><a href="#"><img src={Instagram}/></a></li>
                  <li><a href="#"><img src={Twitter} alt="" /></a></li>
                  <li><a href="#"><img src={VK} alt="" /></a></li>
              </li>
              <li></li>
            </ul>
            
        </div>
        <h3 className="container max-w-[1280px] m-auto text-[#939393] font-[600]">© ООО «КЬЮГО ТЕК» 2020</h3>
      </div>
    </>
  );
};
export default Footer;
