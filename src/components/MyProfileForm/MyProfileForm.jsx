import React, {Component} from 'react';
import {translate} from 'utils';
import Datatable from 'components/Datatable';
import {toastr} from 'react-redux-toastr';
import {User} from 'api';

export default class MyProfileForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isSubmit: false,
      isValid: true,
      data: [],
      loading: false,
      dataTableSettings: {
        columns: [
          {
            text: 'name',
            field: 'name',
            isSort: true,
            sortKey: 'name',
            width: 100
          },
          {
            text: 'name_kana',
            field: 'name_kana',
            width: 100
          },
          {
            text: 'address',
            field: 'address',
            width: 100
          },
          {
            text: 'category',
            field: 'category',
            width: 100
          }
        ],
        sortTable: {
          sortField: 'name',
          sortType: 'asc',
          onSort: (field, type) => {
            const dataTableSettings = this.state.dataTableSettings;
            dataTableSettings.sortTable = {
              ...dataTableSettings.sortTable,
              sortField: field,
              sortType: type
            };
            this.setState({dataTableSettings}, () => {
              this.getStoreList();
            });
          }
        },
        pagination: {
          total: 1,
          totalPage: 1,
          pageSize: 10,
          page: 1,
          from: 1,
          to: 1,
          onPageSizeChange: (select) => {
            const dataTableSettings = this.state.dataTableSettings;
            dataTableSettings.pagination.pageSize = select.target.value;
            this.setState({dataTableSettings}, () => {
              this.getStoreList();
            });
          },
          onPageNumberChange: (pageNumber) => {
            const dataTableSettings = this.state.dataTableSettings;
            dataTableSettings.pagination.page = pageNumber;
            this.setState({dataTableSettings}, () => {
              this.getStoreList();
            });
          }
        }
      }
    };
  }

  componentDidMount() {
    this.getStoreList();
  }

  getStoreList() {
    const params = {
      page: this.state.dataTableSettings.pagination.page,
      per_page: this.state.dataTableSettings.pagination.pageSize,
      sort_column: this.state.dataTableSettings.sortTable.sortField,
      sort_direction: this.state.dataTableSettings.sortTable.sortType
    };
    this.setState({loading: true});
    User.actions.store.request(params).then(response => {
      const dataTableSettings = this.state.dataTableSettings;
      dataTableSettings.pagination = {
        ...this.state.dataTableSettings.pagination,
        total: response.data.total,
        totalPage: response.data.last_page,
        pageSize: response.data.per_page,
        page: response.data.current_page,
        from: response.data.from,
        to: response.data.to
      };
      this.setState({data: response.data.items, dataTableSettings, loading: false});
    }).catch(error => {
      this.setState({loading: false});
      toastr.error(translate('error'), error.message);
    });
  }

  renderColumn = (row, col, index) => {
    return (
      <span style={{width: col.width}}>
        {index === 3 ? row[col.field].name : row[col.field]}
      </span>
    );
  }

  render() {
    return (
      <div className="m-grid__item m-grid__item--fluid m-wrapper">
        <div className="m-subheader">
          <div className="d-flex align-items-center">
            <div className="mr-auto">
              <h3 className="m-subheader__title m-subheader__title--separator">{translate('user_info')}</h3>
            </div>
          </div>
        </div>
        <div className="m-content">
          <div className="m-portlet m-portlet--mobile">
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <h3 className="m-portlet__head-text">{translate('user_info')}</h3>
                </div>
              </div>
            </div>
            <div className="m-portlet__body">
              <Datatable
                data={this.state.data}
                config={this.state.dataTableSettings}
                renderColumn={this.renderColumn}
                loading={this.state.loading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
