import * as React from 'react';

import Table from '@components/Table/Table';
import Amount from '@components/Amount';
import { Prize } from 'src/types/competition';
import { formatOrdinalNumber } from 'src/utilities';

interface Props {
  description: string;
  prizePoolHeaderDisplayName: string;
  placeColumnDisplayName: string;
  prizeColumnDisplayName: string;
  ladderRulesHeaderDisplayName: string;
  ladderRulesDescriptionDisplayName: string;
  competitionInfoCellPlaceDisplayName: string;
  prizes: Prize[];
  prizeCurrency: 'gold' | 'mgo';
}

const baseClass = 'gc-competition-info';

const CompetitionInfo: React.SFC<Props> = ({
  description,
  prizePoolHeaderDisplayName,
  placeColumnDisplayName,
  prizeColumnDisplayName,
  competitionInfoCellPlaceDisplayName,
  prizes,
  prizeCurrency,
}) => {
  const columns = [
    {
      Header: placeColumnDisplayName,
      accessor: ({ from, to }: Prize) => ({ from, to }),
      id: 'place',
      Cell: (row: any) => {
        const value = row.value;
        const place =
          value.from === value.to
            ? formatOrdinalNumber(value.from)
            : `${formatOrdinalNumber(value.from)} - ${formatOrdinalNumber(
                value.to
              )}`;
        return (
          <div>
            <span style={{ paddingRight: 20 }}>{row.index + 1}.</span>
            <b>
              {place} {competitionInfoCellPlaceDisplayName}{' '}
            </b>
          </div>
        );
      },
    },
    {
      Header: prizeColumnDisplayName,
      accessor: 'prize',
      maxWidth: 100,
      Cell: (row: any) => {
        return (
          <Amount
            value={row.value}
            currency={prizeCurrency}
            size="normal"
            align="right"
            showIcon
          />
        );
      },
    },
  ];

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__content`}>
        <h2 className={`${baseClass}__content__title`}>
          {prizePoolHeaderDisplayName}
        </h2>
        <Table
          showPagination={false}
          pageSize={prizes.length}
          data={prizes}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default CompetitionInfo;
