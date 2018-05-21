import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'utils';
import classnames from 'classnames';

export default class THead extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    currentSortField: PropTypes.string,
    currentSortType: PropTypes.string,
    hasActions: PropTypes.bool,
    sortTable: PropTypes.func
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      currentSortType: this.props.currentSortType,
      currentSortField: this.props.currentSortField
    };
  }

  onSort(field) {
    this.setState({
      currentSortType: this.state.currentSortField === field.sortKey && this.state.currentSortType === 'asc' ? 'desc' : 'asc',
      currentSortField: field.sortKey
    });
    this.props.sortTable(this.state.currentSortField, this.state.currentSortType);
  }

  render () {
    return (
      <thead className="m-datatable__head">
        <tr className="m-datatable__row">
          <th className="m-datatable__cell--center m-datatable__cell">
            <span className="m-datatable__number">#</span>
          </th>
          {
            this.props.columns.map((col, idx) => {
              return (
                <th key={idx}
                  className={classnames('m-datatable__cell', {'m-datatable__cell--sort': col.isSort})}
                  onClick={col.isSort && this.onSort.bind(this, col)}>
                  <span style={{width: col.width}}>
                    {translate(col.text)}
                    {col.isSort &&
                      <i className={
                        classnames({
                          'la la-arrow-up': this.state.currentSortField === col.sortKey && this.state.currentSortType === 'asc',
                          'la la-arrow-down': this.state.currentSortField === col.sortKey && this.state.currentSortType === 'desc'
                        })}
                      />}
                  </span>
                </th>
              );
            })
          }
          {this.props.hasActions && <th className="m-datatable__cell">
            <span className="m-datatable__actions">{translate('actions')}</span>
          </th>}
        </tr>
      </thead>
    );
  }
}
