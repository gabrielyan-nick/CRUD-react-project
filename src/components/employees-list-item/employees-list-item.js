import "./employees-list-item.css";

function EmployeesListItem(props) {
  const {
    name,
    salary,
    deleteItem,
    changeSalary,
    toggleProp,
    increase,
    promo,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  if (increase) {
    classNames += " increase";
  }

  if (promo) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span onClick={toggleProp} className="list-group-item-label" data-toggle='promo'>
        {name}
      </span>
      <input
        className="list-group-item-input"
        type="text"
        defaultValue={salary + "$"}
        onChange={changeSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={toggleProp}
          className="btn-cookie btn-sm"
          type="button"
          data-toggle='increase'
        >
          <i className="fa-solid fa-candy-cane"></i>
        </button>
        <button className="btn-trash btn-sm" type="button" onClick={deleteItem}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default EmployeesListItem;
