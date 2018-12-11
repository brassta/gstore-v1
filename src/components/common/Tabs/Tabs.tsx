import * as React from 'react';
import classNames from 'classnames';
import {
  Tab as BootstrapTab,
  Nav as BootstrapNav,
  NavItem as BootstrapNavItem,
} from 'react-bootstrap';

const baseClass = 'gc-tabs';

interface Props {
  children: any;
  id: string;
  defaultActiveKey?: any;
  activeKey?: any;
  onSelect?: React.EventHandler<any>;
  className?: string;
}

const Wrapper: React.SFC<Props> = (props: Props) => {
  const { children, className } = props;

  const classes = classNames(baseClass, className);

  return (
    <BootstrapTab.Container {...props} className={classes}>
      <div>{children}</div>
    </BootstrapTab.Container>
  );
};

const List: React.SFC<Props> = props => {
  const className = `${baseClass}__list`;

  return <BootstrapNav {...props} className={className} />;
};

const Item: React.SFC<Props> = props => {
  const className = 'gc-tab';

  return <BootstrapNavItem {...props} className={className} />;
};

const Content: React.SFC<Props> = props => {
  const className = `${baseClass}__content`;

  return <BootstrapTab.Content {...props} className={className} />;
};

const Tab: React.SFC<Props> = props => {
  const className = 'gc-tab__panel';

  return <BootstrapTab.Pane {...props} className={className} />;
};

class Tabs extends React.PureComponent<Props> {
  static List: any;
  static Item: any;
  static Content: any;
  static Tab: any;

  handleSelect = (key: any) => {
    const { onSelect } = this.props;

    onSelect && onSelect(key);
  };

  render() {
    const { children } = this.props;

    return (
      <Wrapper {...this.props} onSelect={this.handleSelect}>
        {children}
      </Wrapper>
    );
  }
}

Tabs.List = List;
Tabs.Item = Item;
Tabs.Content = Content;
Tabs.Tab = Tab;

export default Tabs;
