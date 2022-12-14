import "./app-filter.css";

function AppFilter(props) {
  const btnsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "promo", label: "На повышение" },
    { name: ">1000", label: "З/п > 1000$" },
  ];

  const {filter, filterSelect} = props;
  const btns = btnsData.map(({ name, label }) => {
    const active = filter === name;
    const classes = active ? "btn-light" : "btn-outline-light";
    return (
      <button className={`btn ${classes}`}
              type="button"
              key={name}
              onClick={() => filterSelect(name)}>
        {label}
      </button>
    );
  });

  return ( 
  <div className="btn-group">{btns}</div>
  )
}

export default AppFilter;
