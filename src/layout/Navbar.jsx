import { MousePointer2 } from "lucide-react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="cursor flex">
          <MousePointer2 className="cursor-icon"/>
          <h3>Москва</h3>
          <h3>Москва</h3>
          <h3>Москва</h3>
        </div>
        <h3>ООО “Рога и копыта”</h3>
      </div>
      <div className="container navbar">
        <div className="flex">
        <MousePointer2 className="cursor-icon"/>
          <h3>Москва</h3>
          <h3>Москва</h3>
          <h3>Москва</h3>
        </div>
        <h3>ООО “Рога и копыта”</h3>
      </div>
      <div className="container navbar">
        <div className="flex">
        <MousePointer2 className="cursor-icon"/>
          <h3>Москва</h3>
          <h3>Москва</h3>
          <h3>Москва</h3>
        </div>
        <h3>ООО “Рога и копыта”</h3>
      </div>
      <div className="container navbar">
        <div className="flex">
        <MousePointer2 className="cursor-icon"/>
          <h3>Москва</h3>
          <h3>Москва</h3>
          <h3>Москва</h3>
        </div>
        <h3>ООО “Рога и копыта”</h3>
      </div>
    </>
  );
}

export default Navbar;
