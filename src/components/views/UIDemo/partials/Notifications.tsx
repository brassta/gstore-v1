import * as React from 'react';

import Button from '@components/Button';
import Announcement from '@components/Announcement';
import Notification from '@components/Notification';

const baseClass = 'gc-uidemo';

type PropsT = {};

type StateT = {
  announcement: boolean;
  notifications: {
    toast: boolean;
    success: boolean;
    info: boolean;
    warning: boolean;
    error: boolean;
  };
};

type ContextT = {};

class Notifications extends React.PureComponent<PropsT, StateT> {
  constructor(props: PropsT, context: ContextT) {
    super(props, context);

    this.state = {
      announcement: true,
      notifications: {
        toast: true,
        success: true,
        info: true,
        warning: true,
        error: true,
      },
    };
  }

  toggleAnnouncement = () => {
    this.setState(state => ({ ...state, announcement: !state.announcement }));
  };

  toggleNotification = (id: string) => {
    this.setState(state => ({
      notifications: {
        ...state.notifications,
        [id]: false,
      },
    }));
  };

  render() {
    return (
      <section
        className={`${baseClass}__section ${baseClass}__section--notifications`}>
        <header className={`${baseClass}__header`}>
          <h1 className={`${baseClass}__heading`}>Notifications</h1>
        </header>

        <div className="gc-layout gc-layout--hr">
          <div className="gc-layout--max">
            <h6 className={`${baseClass}__subtitle`}>ANNOUNCEMENT</h6>

            <div>
              <Button onClick={this.toggleAnnouncement}>Announce</Button>
              {this.state.announcement && (
                <Announcement onClose={this.toggleAnnouncement}>
                  Software update available
                  <Button color="inverse" shape="pill" size="small">
                    Details
                  </Button>
                </Announcement>
              )}
            </div>
          </div>
        </div>

        <div className="gc-layout gc-layout--hr">
          <div className="gc-layout--max">
            <h6 className={`${baseClass}__subtitle`}>SYSTEM FEEDBACK</h6>

            <div>
              {this.state.notifications.toast && (
                <Notification
                  id="toast"
                  size="full"
                  onClose={this.toggleNotification}>
                  Simple toast message.
                </Notification>
              )}
            </div>

            <h6 className={`${baseClass}__subtitle`}>COLOURED NOTIFICATIONS</h6>

            <div>
              {this.state.notifications.success && (
                <Notification
                  id="success"
                  type="success"
                  size="full"
                  onClose={this.toggleNotification}>
                  This is success message.
                </Notification>
              )}
            </div>
            <div>
              {this.state.notifications.info && (
                <Notification
                  id="info"
                  type="info"
                  size="full"
                  onClose={this.toggleNotification}>
                  This is info message.
                </Notification>
              )}
            </div>
            <div>
              {this.state.notifications.warning && (
                <Notification
                  id="warning"
                  type="warning"
                  size="full"
                  onClose={this.toggleNotification}>
                  This is warning message.
                </Notification>
              )}
            </div>
            <div>
              {this.state.notifications.error && (
                <Notification
                  id="error"
                  type="error"
                  size="full"
                  onClose={this.toggleNotification}>
                  This is error message.
                </Notification>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Notifications;
