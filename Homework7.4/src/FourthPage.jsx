import { useState } from "react";
import { Link } from "react-router-dom";

function FourthPage() {
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
        <div className="MainLine3">
          <p>Шаг 2 из 5</p>
          <span>
            <div></div>
          </span>
        </div>
        <div className="MainText">
          <p>Заполнение данных документов</p>
          <span>
            Заполните поля ниже. Внимательно проверьте заполненные поля ниже,
            чтобы с комфортом пользоваться сервисом.
          </span>
        </div>
        <div className="MainInput2">
          <div className="MainInputs2">
            <span>
              <p>Серия паспорта</p>
              <input type="number" placeholder="122556" />
            </span>
            <span>
              <p>Номер паспорта</p>
              <input type="number" placeholder="8613" />
            </span>
          </div>
          <div className="MainInputs">
            <p>Дата выдачи паспорта</p>
            <input type="date" placeholder="31.05.2000" />
          </div>
          <div className="MainInputs">
            <p>Полный адрес регистрации</p>
            <input
              type="text"
              placeholder="г. Москва, ул. Люблинская, д. 5, корп. 5, кв. 5"
            />
          </div>
        </div>
        <Link to="/fivespage" className="MainBtn4">
          Следующий шаг
        </Link>
      </div>
    </>
  );
}

export default FourthPage;
