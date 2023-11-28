import PropTypes from 'prop-types';

  export const ingredientsType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  });

  export const cardClickType = PropTypes.shape({
    onCardClick: PropTypes.func.isRequired,
  });

  export const titleType = PropTypes.shape({
    title: PropTypes.string.isRequired,
  })

  export const IngredientType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  });

  export const itemType = PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })

  export const modalCloseType = PropTypes.shape ({
    onClose: PropTypes.func.isRequired,
  })

  export const childrenType = PropTypes.shape({
    children: PropTypes.element.isRequired,
  })

  export const ingredientsArrayType = PropTypes.arrayOf(ingredientsType.isRequired).isRequired;