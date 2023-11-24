function Select({ items, value, onChange }) {
  return (
    <div className="Select">
      <div className="selection">{value}</div>
      <div className="menu">
        {items.map((item) => (
          <div key={item} onClick={() => onChange(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Select;
