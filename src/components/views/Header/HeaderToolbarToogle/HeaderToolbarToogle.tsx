import * as React from 'react';
import Icon from "@components/Icon/Icon";
import classNames from 'classnames';
import toolbarIcon from "@images/icon-apps.svg";
// import ConsoleLoger from '../../../../utilities/console'


interface Props {
    path?:string
}
const className = 'header-toolbar-toggle';
const classes = classNames(className);

const HeaderToolbarToogle: React.SFC<Props> = (props) => {
    return (
        <div className={classes}>
            <a href="javascript:void(0)">
            <Icon data={toolbarIcon} size="large" spacing="right" />
            </a>
        </div>
    )
}

export default HeaderToolbarToogle;