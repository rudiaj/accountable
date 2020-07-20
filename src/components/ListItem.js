import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListItem = ({ item }) => {
  return (
    <Link
      to={`/${item.name}`}
      className="list-group-item list-group-item-action"
    >
      {item.name}
    </Link>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
