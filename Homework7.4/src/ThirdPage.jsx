import { useState } from "react";
import { Link } from "react-router-dom";

function ThirdPage() {
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
        <div className="MainLine2">
          <p>Шаг 1 из 5</p>
          <span>
            <div></div>
          </span>
        </div>
        <div className="MainText">
          <p>Заполнение профиля</p>
          <span>
            Заполните поля ниже. Внимательно проверьте заполненные поля ниже,
            чтобы с комфортом пользоваться сервисом.{" "}
          </span>
        </div>
        <div className="MainInput2">
          <div className="MainInputs">
            <p>Фамилия</p>
            <input type="text" placeholder="Иванов" />
          </div>
          <div className="MainInputs">
            <p>Имя</p>
            <input type="text" placeholder="Серегй" />
          </div>
          <div className="MainInputs">
            <p>Отчество</p>
            <input type="text" placeholder="Анатольевич" />
          </div>
          <div className="MainInputs">
            <p>Email</p>
            <input type="email" placeholder="sergeiivanov@gmail.com" />
          </div>
          <div className="MainInputs2">
            <span>
              <p>Дата рождения</p>
              <input type="date" placeholder="31.05.2000" />
            </span>
            <span>
              <p>Место рождения</p>
              <input type="text" placeholder="Россия" />
            </span>
          </div>
          <div className="MainInputs">
            <p>Гражданство</p>
            <input type="text" placeholder="Россия" />
          </div>
        </div>
        <Link to="/fourthpage" className="MainBtn3">
          Следующий шаг
        </Link>
      </div>
    </>
  );
}

export default ThirdPage;
