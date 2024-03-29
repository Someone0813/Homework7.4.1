import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function FirstPage() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
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
        <div className="MainLine">
          <p>Начало регистрации</p>
          <span>
            <div></div>
          </span>
        </div>
        <div className="MainText">
          <p>Выбор тип профиля</p>
          <span>
            Чтобы размещать задания в сервисе, примите условия Соглашения Qugo с
            Заказчиком и выберите “Стать заказчиком”
            <br />
            <br />
            Чтобы выполнять задания и зарабатывать деньги выберите “Стать
            исполнителем”
          </span>
        </div>
        <div className="MainCheckboxes">
          <div className="CheckBox1">
            <input
              type="checkbox"
              checked={isChecked1}
              onChange={handleCheckboxChange1}
            />
            Стать исполнителем
          </div>
          <div className="CheckBox1">
            <input
              type="checkbox"
              checked={isChecked2}
              onChange={handleCheckboxChange2}
            />
            Стать заказчиком
          </div>
          <div className="CheckBox2">
            <input type="checkbox" />
            <p>Я прочитал и принимаю условия</p>
            <a href="#">Соглашения Qugo с Заказчиком</a>
          </div>
        </div>
        <Link to="/secondpage" className="MainBtn">
          Стать исполнителем
        </Link>
      </div>
    </>
  );
}

export default FirstPage;
