import React, { useState } from 'react';

import styles from './form.module.css';

interface IFormProps {
  addItem: (itemName: string) => void;
}

const Form = (props: IFormProps) => {
  const { addItem } = props;
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className={styles.formControl}>
        <input
          type="text"
          className={`form-input ${styles.formInput}`}
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button className={'btn'} type={'submit'}>
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
