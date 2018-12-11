import * as React from 'react';
import ReactTable from 'react-table';
import classNames from 'classnames';

import Loader from '../Loader/Loader';

const baseClass = 'gc-table';

interface Props {
  showPagination?: boolean;
  showPageSizeOptions?: boolean;
  defaultPageSize?: number;
  showPageJump?: boolean;
  previousText?: string;
  nextText?: string;
  loading?: boolean;
  loadingText?: any;
  noDataText?: string;
  striped?: boolean;
  className?: string;
  data: any;
  columns: any;
  pageSize?: number;
  manual?: boolean;
  pages?: number;
  onFetchData?: any;
  getTrProps?: any;
}

class Table extends React.PureComponent<Props> {
  static defaultProps: Partial<Props> = {
    showPagination: true,
    showPageSizeOptions: false,
    defaultPageSize: 10,
    showPageJump: false,
    previousText: '',
    nextText: '',
    loading: false,
    loadingText: <Loader />,
    noDataText: 'No rows found',
    striped: true,
  };

  render() {
    const { striped, className, loading, manual } = this.props;

    const classes = classNames(baseClass, striped && '-striped', className);

    // For adding custom loaders to react-table use LoadingComponent prop
    // which represents a Loader component controlled by loading prop
    if (loading && !manual) {
      return <Loader />;
    }

    // @ts-ignore
    return <ReactTable {...this.props} className={classes} minRows={0} />;
  }
}

export default Table;
