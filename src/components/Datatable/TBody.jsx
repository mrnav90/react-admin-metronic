import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TBody extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    renderColumn: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <tbody className="m-datatable__body">
        {
          this.props.data.map((row, idx) => {
            return (
              <tr key={idx}
                className={classnames('m-datatable__row', {
                  'm-datatable__row--even': (idx + 1) % 2 === 0
                })}>
                <td className="m-datatable__cell--center m-datatable__cell">
                  <span className="m-datatable__number">{(this.props.pagination.page - 1) * this.props.pagination.pageSize + idx + 1}</span>
                </td>
                {
                  this.props.columns.map((col, index) => {
                    return (
                      <td key={index} className="m-datatable__cell">
                        {this.props.renderColumn(row, col, index)}
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    );
  }
}
