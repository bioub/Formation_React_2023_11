function Hello({ name, age, active }) {
  return (
    <div className="Hello">
      Hello my name is <span className="selection">{name}</span>, I'm {age} and my
      status is {active ? 'active' : 'inactive'}
    </div>
  );
}

export default Hello;