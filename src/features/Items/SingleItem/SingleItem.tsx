import { IItem } from '../../../app/App';
import styles from './singleItem.module.css';

interface ISingleItemProps {
  key: string;
  item: IItem;
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
}

const SingleItem = (props: ISingleItemProps) => {
  const { item, removeItem, editItem } = props;

  return (
    <div className={styles.singleItem}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          editItem(item.id);
        }}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed ? 'line-through' : 'none',
        }}
      >
        {item.name}
      </p>
      <button
        className={`btn ${styles.removeBtn}`}
        type={'button'}
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
