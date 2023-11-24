import styles from './Select.module.css';
import { useEffect, useRef, useState } from 'react';

function Select({ items, value, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const selectRef = useRef();

  useEffect(() => {
    const listener = (event) => {
      if (!selectRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('click', listener);
    return () => {
      window.removeEventListener('click', listener);
    };
  }, []);

  return (
    <div ref={selectRef} className="Select">
      <div className={styles.selection} onClick={() => setMenuOpen(!menuOpen)}>
        {value}
      </div>
      {menuOpen && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div key={item} onClick={() => onChange(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
