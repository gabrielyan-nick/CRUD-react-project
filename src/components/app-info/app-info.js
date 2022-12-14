import "./app-info.css";

function AppHeaderInfo({totalEmployees, amountOfIncrease}) {
  return (
    <div className="header-info">
      <h2>
        Учет сотрудников в компании
        <span className="company-name">"С карамелькой за щекой"</span>
      </h2>
      <h2>Общее число сотрудников: {totalEmployees}</h2>
      <h2>Премию получат: {amountOfIncrease}</h2>
    </div>
  );
}

export default AppHeaderInfo;
