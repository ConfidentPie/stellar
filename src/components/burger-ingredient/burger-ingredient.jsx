import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import burgersIngredient from './burger-ingredient.module.css';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { removeIngredient } from '../../services/burger-constructor/burger-constructor-slice';
import { useDrag, useDrop } from 'react-dnd';

const BurgerIngredient = ({ item, index, sortIngredients  }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleDeleteItem = () => {
    dispatch(removeIngredient(item.key));
  };


  const [, drop] = useDrop({
    accept: 'sort',
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      sortIngredients({dragIndex, hoverIndex});
      item.index = hoverIndex;
    },
  });

  const [{isDragging}, drag] = useDrag({
    type: "sort",
    item: () => ({ index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  });

  drag(drop(ref));

  return (
    <li className={burgersIngredient.item} style={{opacity: isDragging? 0 : 1}} >

      <div className={`${burgersIngredient.info}  ml-2`} ref={ref}>
      <DragIcon />
        {item && (
          <ConstructorElement
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={handleDeleteItem}

          />
        )}
      </div>
    </li>
  );
};



burgersIngredient.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default BurgerIngredient;
