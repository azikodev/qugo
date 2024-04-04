import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react';
import { NavLink } from 'react-router-dom';
const FPage = () => {
  return (
    <>
      <Navbar />
      <div className="container max-w-[1280px] m-auto mb-[80px]">
        <h1 className="text-green-700 text-[25px] font-[700] mb-[16px]">
          Начало регистрации
        </h1>
        <h2 className="font-[700] text-[25px]">Выберите налоговый статус</h2>
        <form className="flex flex-col mt-[20px]">
          <div className="flex gap-2 items-center mb-4">
            <label htmlFor="performerInput">Самозанятый</label>
            <input type="radio" id="performerInput" name="profileType" />
          </div>
          <div className="flex gap-2 items-center mb-4 ">
            <label htmlFor="customerInput">Индивидуальный предприниматель</label>
            <input type="radio" id="customerInput" name="profileType" />
          </div>
          <div className="flex gap-2 items-center mb-4 ">
            <label htmlFor="customerInput">Общество с ограниченной ответственностью</label>
            <input type="radio" id="customerInput" name="profileType" />
          </div>
          <div className="flex gap-2 items-center mb-4 ">
            <label htmlFor="customerInput">Акционерное общество</label>
            <input type="radio" id="customerInput" name="profileType" />
          </div>
          <div className="flex gap-2 items-center mb-4">
            <label htmlFor="customerInput">Гражданин РФ или стран ЕАЭС (Беларусь, Киргизия, Казахстан, Армения)</label>
            <input type="radio" id="customerInput" name="profileType" />
          </div>
          <div className="flex gap-2 items-center mb-4">
            <label htmlFor="customerInput">Иностранный гражданин из стран СНГ (Украина, Молдова, Таджикистан, Узбекистан, Азербайджан)</label>
            <input type="radio" id="customerInput" name="profileType" />
          </div>
        </form>
        <div className="input-section">
          <p className="mb-5 mt-[20px] font-[600] text-[20px]">Самозанятый</p>
          <input type="text" placeholder="Укажите свой ИНН" className="rounded-[5px] border-2 p-3" required/>
          <p className="text-[#9A9A9A] mt-4">Свой ИНН вы можете посмотреть в приложении “Мой налог” в разделе ”Прочее” - “Профиль” или на сайте <br /> ФНС <a href="https://service.nalog.ru/inn.do.">https://service.nalog.ru/inn.do.</a> </p>
        </div>
        <NavLink to='/NextPage2'>
          <button className="bg-[#218721] mt-6 text-white pl-7 pr-7 pt-3 pb-3 rounded-[5px]">
          Следующий шаг
          </button>
        </NavLink>
      </div>
      
      <Footer />
    </>
  );
};
export default FPage;
