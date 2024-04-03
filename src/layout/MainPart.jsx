import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div className="container max-w-[1280px] m-auto">
        <h1 className="text-green-700 text-[25px] font-[700] mb-[16px]">
          Начало регистрации
        </h1>
        <h5 className="font-[700] text-[20px] mb-[20px]">Выбор тип профиля</h5>
        <p>
          Чтобы размещать задания в сервисе, примите условия <br /> Соглашения
          Qugo с Заказчиком и выберите “Стать заказчиком” <br />
          Чтобы выполнять задания и зарабатывать деньги выберите “Стать <br />
          исполнителем”
        </p>
        <form className="flex flex-col mt-[20px]">
          <div className="flex gap-2 items-center ">
            <label htmlFor="performerInput">Стать исполнителем</label>
            <input type="radio" id="performerInput" name="profileType" />
          </div>
          <div className="flex gap-2 items-center ">
            <label htmlFor="customerInput">Стать заказчиком</label>
            <input type="radio" id="customerInput" name="profileType" />
          </div>
          <div className="flex gap-2 items-center ">
            <label htmlFor="azikoInput">aziko</label>
            <input type="checkbox" id="azikoInput" />
          </div>
        </form>
        <NavLink to='/NextPage'>
          <button className="bg-[#218721] text-white pl-7 pr-7 pt-3 pb-3 rounded-[5px]">
            Dalee
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Main;
