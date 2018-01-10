import React, {Component} from 'react';

export default class UserNotification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m-dropdown__wrapper">
        <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
        <div className="m-dropdown__inner">
          <div className="m-dropdown__header m--align-center">
            <span className="m-dropdown__header-title">
              9 New
            </span>
            <span className="m-dropdown__header-subtitle">
              User Notifications
            </span>
          </div>
          <div className="m-dropdown__body">
            <div className="m-dropdown__content">
              <ul className="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand" role="tablist">
                <li className="nav-item m-tabs__item">
                  <a className="nav-link m-tabs__link active" data-toggle="tab" href="#topbar_notifications_notifications" role="tab">
                    Alerts
                  </a>
                </li>
                <li className="nav-item m-tabs__item">
                  <a className="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_events" role="tab">
                    Events
                  </a>
                </li>
                <li className="nav-item m-tabs__item">
                  <a className="nav-link m-tabs__link" data-toggle="tab" href="#topbar_notifications_logs" role="tab">
                    Logs
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="topbar_notifications_notifications" role="tabpanel">
                  <div className="m-scrollable mCustomScrollbar _mCS_2 mCS-autoHide mCS_no_scrollbar" data-scrollable="true" data-max-height="250" data-mobile-max-height="200">
                    <div id="mCSB_2" className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" tabIndex="0">
                      <div id="mCSB_2_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" dir="ltr">
                        <div className="m-list-timeline m-list-timeline--skin-light">
                          <div className="m-list-timeline__items">
                            <div className="m-list-timeline__item">
                              <span className="m-list-timeline__badge -m-list-timeline__badge--state-success"></span>
                              <span className="m-list-timeline__text">
                                12 new users registered
                              </span>
                              <span className="m-list-timeline__time">
                                Just now
                              </span>
                            </div>
                            <div className="m-list-timeline__item">
                              <span className="m-list-timeline__badge"></span>
                              <span className="m-list-timeline__text">
                                System shutdown
                                <span className="m-badge m-badge--success m-badge--wide">
                                  pending
                                </span>
                              </span>
                              <span className="m-list-timeline__time">
                                14 mins
                              </span>
                            </div>
                            <div className="m-list-timeline__item">
                              <span className="m-list-timeline__badge"></span>
                              <span className="m-list-timeline__text">
                                New invoice received
                              </span>
                              <span className="m-list-timeline__time">
                                20 mins
                              </span>
                            </div>
                            <div className="m-list-timeline__item">
                              <span className="m-list-timeline__badge"></span>
                              <span className="m-list-timeline__text">
                                DB overloaded 80%
                                <span className="m-badge m-badge--info m-badge--wide">
                                  settled
                                </span>
                              </span>
                              <span className="m-list-timeline__time">
                                1 hr
                              </span>
                            </div>
                            <div className="m-list-timeline__item">
                              <span className="m-list-timeline__badge"></span>
                              <span className="m-list-timeline__text">
                                System error -
                                <a href="#" className="m-link">
                                  Check
                                </a>
                              </span>
                              <span className="m-list-timeline__time">
                                2 hrs
                              </span>
                            </div>
                            <div className="m-list-timeline__item m-list-timeline__item--read">
                              <span className="m-list-timeline__badge"></span>
                              <span href="" className="m-list-timeline__text">
                                New order received
                                <span className="m-badge m-badge--danger m-badge--wide">
                                  urgent
                                </span>
                              </span>
                              <span className="m-list-timeline__time">
                                7 hrs
                              </span>
                            </div>
                            <div className="m-list-timeline__item m-list-timeline__item--read">
                              <span className="m-list-timeline__badge"></span>
                              <span className="m-list-timeline__text">
                                Production server down
                              </span>
                              <span className="m-list-timeline__time">
                                3 hrs
                              </span>
                            </div>
                            <div className="m-list-timeline__item">
                              <span className="m-list-timeline__badge"></span>
                              <span className="m-list-timeline__text">
                                Production server up
                              </span>
                              <span className="m-list-timeline__time">
                                5 hrs
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="mCSB_2_scrollbar_vertical" className="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical">
                      <div className="mCSB_draggerContainer">
                        <div id="mCSB_2_dragger_vertical" className="mCSB_dragger">
                          <div className="mCSB_dragger_bar"></div>
                        </div>
                        <div className="mCSB_draggerRail"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
                  <div className="m-scrollable" m-scrollabledata-scrollable="true" data-max-height="250" data-mobile-max-height="200">
                    <div className="m-list-timeline m-list-timeline--skin-light">
                      <div className="m-list-timeline__items">
                        <div className="m-list-timeline__item">
                          <span className="m-list-timeline__badge m-list-timeline__badge--state1-success"></span>
                          <a href="" className="m-list-timeline__text">
                            New order received
                          </a>
                          <span className="m-list-timeline__time">
                            Just now
                          </span>
                        </div>
                        <div className="m-list-timeline__item">
                          <span className="m-list-timeline__badge m-list-timeline__badge--state1-danger"></span>
                          <a href="" className="m-list-timeline__text">
                            New invoice received
                          </a>
                          <span className="m-list-timeline__time">
                            20 mins
                          </span>
                        </div>
                        <div className="m-list-timeline__item">
                          <span className="m-list-timeline__badge m-list-timeline__badge--state1-success"></span>
                          <a href="" className="m-list-timeline__text">
                            Production server up
                          </a>
                          <span className="m-list-timeline__time">
                            5 hrs
                          </span>
                        </div>
                        <div className="m-list-timeline__item">
                          <span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
                          <a href="" className="m-list-timeline__text">
                            New order received
                          </a>
                          <span className="m-list-timeline__time">
                            7 hrs
                          </span>
                        </div>
                        <div className="m-list-timeline__item">
                          <span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
                          <a href="" className="m-list-timeline__text">
                            System shutdown
                          </a>
                          <span className="m-list-timeline__time">
                            11 mins
                          </span>
                        </div>
                        <div className="m-list-timeline__item">
                          <span className="m-list-timeline__badge m-list-timeline__badge--state1-info"></span>
                          <a href="" className="m-list-timeline__text">
                            Production server down
                          </a>
                          <span className="m-list-timeline__time">
                            3 hrs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                  <div className="m-stack m-stack--ver m-stack--general">
                    <div className="m-stack__item m-stack__item--center m-stack__item--middle">
                      <span className="">
                        All caught up!
                        <br/>
                        No new logs.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
