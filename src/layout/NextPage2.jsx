import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { NavLink } from "react-router-dom";
const NPage = () => {
  return (
    <>
      <Navbar />
      <div className="container max-w-[1280px] m-auto mb-[80px]">
        <h1 className="text-green-700 text-[25px] font-[700] mb-[16px]">
          Начало регистрации
        </h1>
        <h2 className="font-[700] text-[25px]">
          Заполнение профиля (Самозанятый)
        </h2>
        <p className="font-[500] text-[20px] mb-7">
          Заполните поля ниже. Внимательно проверьте заполненные поля ниже,
          чтобы с комфортом пользоваться сервисом.{" "}
        </p>
        <form className="form flex flex-col g-4">
          <label htmlFor="" id="fname" className="mb-2 font-[600]">
            Фамилия
          </label>
          <input
            type="text"
            id="fname"
            className="border-2 w-[400px] mb-4 p-2 rounded-lg"
            placeholder="Иванов"
          />
          <label htmlFor="" id="lname" className="mb-2 font-[600]">
            Имя
          </label>
          <input
            type="text"
            id="lname"
            className="border-2 w-[400px] mb-4 p-2 rounded-lg"
            placeholder="Сергей"
          />
          <label htmlFor="" id="otchestva" className="mb-2 font-[600]">
            Отчество
          </label>
          <input
            type="text"
            id="email"
            className="border-2 w-[400px] mb-4 p-2 rounded-lg "
            placeholder="Анатольевич"
          />
          <div className="flex items-center gap-5">
            <label htmlFor="passport">По паспорту без отчества</label>
            <input type="checkbox" id="passport" />
          </div>
          <label htmlFor="email" className="mt-7">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2 w-[400px] mb-4 p-2 rounded-lg"
            placeholder="sergeiivanov@gmail.com"
          />
          <label htmlFor="birthday">Дата рождения</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            placeholder="31.05.2000"
            className="border-2 w-[400px] mb-4 p-2 rounded-lg"
          />
          <label htmlFor="location">Место рождения</label>
          <input
            type="text"
            placeholder="Сергей"
            className="border-2 w-[400px] mb-4 p-2 rounded-lg"
          />
        </form>
        <NavLink to="/LastPage">
          <button className="bg-[#218721] mt-6 text-white pl-7 pr-7 pt-3 pb-3 rounded-[5px]">
          Следующий шаг
          </button>
        </NavLink>
      </div>

      <Footer />
    </>
  );
};
export default NPage;
