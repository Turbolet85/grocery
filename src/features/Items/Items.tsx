import { IItem } from '../../app/App';
import styles from './items.module.css';
import SingleItem from './SingleItem/SingleItem';

interface IItemsProps {
  items: IItem[];
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
}

const Items = (props: IItemsProps) => {
  const { items, removeItem, editItem } = props;

  return (
    <div className={styles.items}>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
