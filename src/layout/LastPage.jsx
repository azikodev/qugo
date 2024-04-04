import Footer from "./Footer";
import Navbar from "./Navbar";

const LastPage = () => {
  return (
    <>
      <Navbar />
      <div className="container max-w-[1280px] m-auto mb-[80px]">
        <h1 className=" text-[25px] font-[700] mb-[16px]">
          Спасибо за регистрацию!
        </h1>
        <p>Ваша регистрация в сервисе Qugo успешно завершена. После проверки вашего <br /> профиля модератором вы сможете выполнять задания и зарабатывать деньги. Пока <br /> модератор проверяет профиль вы можете найти подходящее вам задание.</p>
        <button className="bg-[#218721] mt-6 text-white pl-7 pr-7 pt-3 pb-3 rounded-[5px]">Найти задание</button>
      </div>
      <Footer />
    </>
  );
};
export default LastPage;
