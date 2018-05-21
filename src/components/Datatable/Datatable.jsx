import React, {Component} from 'react';
import PropTypes from 'prop-types';
import THead from './THead';
import TBody from './TBody';
import {translate} from 'utils';
import Pagination from 'react-js-pagination';

export default class Datatable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({
      columns: PropTypes.shape({
        text: PropTypes.string.isRequired,
        field: PropTypes.string.isRequired,
        isSort: PropTypes.bool,
        sortKey: PropTypes.string,
        width: PropTypes.number.isRequired
      }).isRequired,
      sortTable: PropTypes.shape({
        sortField: PropTypes.string,
        sortType: PropTypes.string,
        onSort: PropTypes.func
      }),
      pagination: PropTypes.shape({
        total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        totalPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        pageSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onPageSizeChange: PropTypes.func,
        onPageNumberChange: PropTypes.func
      }).isRequired
    }).isRequired,
    renderColumn: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      pageShow: [10, 20, 30, 50]
    };
    this.selectPicker = null;
  }

  componentDidUpdate() {
    if (this.selectPicker) {
      $(this.selectPicker).selectpicker();
    }
  }

  render () {
    return (
      <div className="m_datatable m-datatable m-datatable--default m-datatable--loaded">
        <table className="m-datatable__table">
          <THead
            columns={this.props.config.columns}
            currentSortField={this.props.config.sortTable.sortField}
            currentSortType={this.props.config.sortTable.sortType}
            sortTable={this.props.config.sortTable.onSort}
          />
          {this.props.data.length > 0 && <TBody
            columns={this.props.config.columns}
            data={this.props.data}
            pagination={this.props.config.pagination}
            renderColumn={this.props.renderColumn}
          />}
        </table>
        <div className="m-datatable__pager m-datatable--paging-loaded clearfix">
          {this.props.config.pagination.totalPage > 1 &&
            <Pagination
              totalItemsCount={this.props.config.pagination.total}
              activePage={this.props.config.pagination.page}
              itemsCountPerPage={this.props.config.pagination.pageSize}
              onChange={this.props.config.pagination.onPageNumberChange}
              innerClass="m-datatable__pager-nav"
              disabledClass="m-datatable__pager-link--disabled"
              linkClass="m-datatable__pager-link"
              linkClassFirst="m-datatable__pager-link--first"
              linkClassPrev="m-datatable__pager-link--prev"
              linkClassNext="m-datatable__pager-link--next"
              linkClassLast="m-datatable__pager-link--last"
              activeLinkClass="m-datatable__pager-link--active"
            />
          }
          {!this.props.loading &&
            <div className="m-datatable__pager-info">
              <select key="select_picker" ref={(node) => {
                this.selectPicker = node;
              }} data-width="70px"
              onChange={this.props.config.pagination.onPageSizeChange}
              defaultValue={this.props.config.pagination.pageSize}
              className="m-datatable__pager-size">
                {
                  this.state.pageShow.map((size, idx) => {
                    return (
                      <option key={idx}>{size}</option>
                    );
                  })
                }
              </select>
              <span key="pagination_info">
                {translate('pagination_info', {
                  from: this.props.config.pagination.from,
                  to: this.props.config.pagination.to,
                  total: this.props.config.pagination.total
                })}
              </span>
            </div>
          }
        </div>
        {this.props.loading &&
          <div className="m-datatable__loading-table">
            <div className="m-blockui">
              <span>{translate('please_wait')}</span>
              <span className="m-loader m-loader--brand"></span>
            </div>
          </div>
        }
      </div>
    );
  }
}
