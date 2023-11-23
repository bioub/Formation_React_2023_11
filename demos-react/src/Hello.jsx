function Hello({ name, age, active }) {
  return (
    <div className="Hello">
      Hello my name is {name}, I'm {age} and my
      status is {active ? 'active' : 'inactive'}
    </div>
  );
}