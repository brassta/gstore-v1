import * as React from 'react';
import classNames from 'classnames';
import Icon from "@components/Icon/Icon";
import bellIcon from "@images/baseline-notifications-24px.svg";
import Badge from "@components/Badge";



interface Props {
    messages?:number
}
const className  = 'bell-toolbar-notifier';

const classes = classNames(
    className
);

const BellNotifier: React.SFC<Props> = (props) => {
    return (
        <div className={classes}>
            <a href="javascript:void(0)">
                <Badge children={'1'}/>
                <Icon data={bellIcon} size="normal" spacing="both" align="middle" />
            </a>
        </div>
    )
}

export default BellNotifier;