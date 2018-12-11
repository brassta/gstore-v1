import * as React from 'react';

import Table from '@components/Table';

const baseClass = 'gc-uidemo';

type PropsT = {};
type StateT = {};

class DataTable extends React.PureComponent<PropsT, StateT> {
  // Simply pass the data prop anything that resembles an array or object.
  // Client-side sorting and pagination are built in, and your table will update gracefully as you change any props.
  // Server-side data is also supported!
  state = {
    // data: [],
    data: [
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '-12,000.54321234',
        date: '5 minutes ago',
        status: '0/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '+12.54321234',
        date: '2 hours ago',
        status: '3/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '-12,000.54321234',
        date: '5 minutes ago',
        status: '0/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '+12.54321234',
        date: '2 hours ago',
        status: '3/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '-12,000.54321234',
        date: '5 minutes ago',
        status: '0/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '+12.54321234',
        date: '2 hours ago',
        status: '3/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '-12,000.54321234',
        date: '5 minutes ago',
        status: '0/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '+12.54321234',
        date: '2 hours ago',
        status: '3/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '-12,000.54321234',
        date: '5 minutes ago',
        status: '0/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '+12.54321234',
        date: '2 hours ago',
        status: '3/5 confirmations',
      },
      {
        transactionId: '1a26a.. ..f85ba',
        amount: '+12.54321234',
        date: '2 hours ago',
        status: '3/5 confirmations',
      },
    ],
  };

  columns = [
    {
      Header: 'Transaction ID',
      accessor: 'transactionId', // String-based value accessors!
    },
    {
      Header: 'Amount',
      accessor: 'amount',
      Cell: (props: any) => <span className="number">{props.value}</span>, // Custom cell components!
    },
    {
      Header: 'Date',
      accessor: 'date', // Custom value accessors!
    },
    {
      Header: () => <span>Status</span>, // Custom header components!
      accessor: 'status',
    },
  ];

  render() {
    return (
      <section
        className={`${baseClass}__section ${baseClass}__section--datatable`}>
        <header className={`${baseClass}__header`}>
          <h2 className={`${baseClass}__heading`}>Table</h2>
        </header>

        <div className="gc-layout gc-layout--hr">
          <div className="gc-layout--max">
            <Table data={this.state.data} columns={this.columns} />
          </div>
        </div>
      </section>
    );
  }
}

export default DataTable;
