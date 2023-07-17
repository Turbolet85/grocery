import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { v4 } from 'uuid';

import Form from '../features/Form/Form';
import Items from '../features/Items/Items';
import styles from './app.module.css';

export interface IItem {
  name: string;
  completed: boolean;
  id: string;
}

const setLocalStorage = (items: IItem[]) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = () => {
  const defaultList = JSON.parse(localStorage.getItem('list') || '[]');
  const [items, setItems] = useState<IItem[]>(defaultList);

  const addItem = (itemName: string) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: v4(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('added');
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter(({ id }) => id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('deleted');
  };

  const editItem = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className={styles.sectionCenter}>
      <ToastContainer position={'top-center'} autoClose={1000} hideProgressBar={true} />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
