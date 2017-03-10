import React from 'react';
import { SortableContainer,SortableItemMixin } from 'react-anything-sortable';





export default  React.createClass({
  mixins: [SortableItemMixin],

  getDefaultProps() {
    return {
      className: 'demo-item'
    };
  },

  render() {
    const { className, children } = this.props;
    return this.renderWithSortable(
      <div className={className}>
        {children}
      </div>
    );
  }
});
