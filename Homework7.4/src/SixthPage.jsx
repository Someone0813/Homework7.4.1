import { useState } from "react";
import { Link } from "react-router-dom";

function SixthPage() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
  };
  const handleCheckboxChange3 = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(true);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(false);
  };

  const handleCheckboxChange4 = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(true);
    setIsChecked5(false);
    setIsChecked6(false);
  };
  const handleCheckboxChange5 = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(true);
    setIsChecked6(false);
  };

  const handleCheckboxChange6 = () => {
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsChecked6(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Выбор 1:", isChecked1);
    console.log("Выбор 2:", isChecked2);
  };

  return (
    <>
      <div className="NavBar">
        <div className="NavHead">
          <span>
            <img src="../public/NavHeadIcon.svg" alt="NavHeadIcon" />
            <p>Москва</p>
          </span>
          <div>ООО “Рога и копыта”</div>
        </div>
        <div className="NavMain">
          <img src="../public/NavMainLogo.svg" alt="NavMainLogo" />
          <span>
            <h1>Создать задание</h1>
            <p>Найти задание</p>
            <p>Для бизнеса</p>
          </span>
          <div>
            <p>Сообщения</p>
            <p>Мои заказы</p>
            <img src="../public/NavMainImg.svg" alt="NavMainImg" />
          </div>
        </div>
      </div>
      <div className="Main">
        <div className="MainLine5">
          <p>Шаг 4 из 5</p>
          <span>
            <div></div>
          </span>
        </div>
        <div className="MainText">
          <p>Привязка к сервису «Мой Налог»</p>
          <span>
            Предоставьте доступ QUGO в Личном кабинете самозанятого "Мой налог"
            и нажмите на кнопку “Проверить”.
          </span>
        </div>
        <div className="MainText2">
          <button>Проверить разрешение</button>
          <span>
            <h1>Текущий статус самозанятого</h1>
            <h2>Ожидание проверки</h2>
          </span>
        </div>
        <img src="../public/SixPageImg.svg" id="SixPageImg" />
        <Link to="/seventhpage" className="MainBtn6">
          Следующий шаг
        </Link>
      </div>
    </>
  );
}

export default SixthPage;
