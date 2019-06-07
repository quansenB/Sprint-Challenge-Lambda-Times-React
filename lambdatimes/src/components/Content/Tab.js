import React from "react";
import propTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const getTabClass = selected => {
    if (selected == props.tab) {
      return "tab active-tab";
    } else return "tab";
  };

  return (
    <div
      className={getTabClass(props.selected)}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        return props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propType = {
  tab: propTypes.string.isRequired,
  selectedTab: propTypes.string.isRequired,
  selectTabHandler: propTypes.func.isRequired
};
export default Tab;
