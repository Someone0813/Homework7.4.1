import { useState } from "react";
import { Link } from "react-router-dom";

function SecondPage() {
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
      <div className="Main2">
        <div className="MainLine">
          <p>Начало регистрации</p>
          <span>
            <div></div>
          </span>
        </div>
        <div className="MainText">
          <p>Выберите налоговый статус</p>
        </div>
        <div className="MainCheckboxes2">
          <div className="CheckBox1">
            <input
              type="checkbox"
              checked={isChecked1}
              onChange={handleCheckboxChange1}
            />
            Самозанятый
          </div>
          <div className="CheckBox1">
            <input
              type="checkbox"
              checked={isChecked2}
              onChange={handleCheckboxChange2}
            />
            Индивидуальный предприниматель
          </div>
          <div className="CheckBox1">
            <input
              type="checkbox"
              checked={isChecked3}
              onChange={handleCheckboxChange3}
            />
            Общество с ограниченной ответственностью
          </div>
          <div className="CheckBox1">
            <input
              type="checkbox"
              checked={isChecked4}
              onChange={handleCheckboxChange4}
            />
            Акционерное общество
          </div>
          <div className="CheckBox1">
            <input
              type="checkbox"
              checked={isChecked5}
              onChange={handleCheckboxChange5}
            />
            Гражданин РФ или стран ЕАЭС (Беларусь, Киргизия, Казахстан, Армения)
          </div>
          <div className="CheckBox1">
            <input
              type="checkbox"
              checked={isChecked6}
              onChange={handleCheckboxChange6}
            />
            Иностранный гражданин из стран СНГ (Украина, Молдова, Таджикистан,
            Узбекистан, Азербайджан)
          </div>
        </div>
        <div className="MainInput">
          <input type="number" placeholder="Укажите свой ИНН" />
          <p>
            Свой ИНН вы можете посмотреть в приложении “Мой налог” в разделе
            ”Прочее” - “Профиль” или на сайте
            <br /> ФНС https://service.nalog.ru/inn.do.
          </p>
        </div>
        <Link to="/thirdpage" className="MainBtn2">
          Стать исполнителем
        </Link>
      </div>
    </>
  );
}

export default SecondPage;
