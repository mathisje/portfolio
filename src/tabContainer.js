import React, {Component} from 'react';

import TabHeader from "./tabHeader";

class TabContainer extends Component {

  _mapTabToContent = (tab) => {
    return tab.content;
  };

  _mapTabToDisplay = (tab, index) => {
    let className = this.props.headerClass;
    if (this.props.selectedIndex === index) {
      className = this.props.selectedHeaderClass
    }
    return (
      <div key={index}>
        <TabHeader {...this.props}
                   title={tab.title}
                   headerClass={className}
                   clickHandler={this.props.headerClickHandler}
                   handlerParams={index} />
      </div>
    )
  };

  render() {
    return (
      <div className={this.props.containerClass}>
        <div className={this.props.tabRowClass}>
          {this.props.tabArray.map(this._mapTabToDisplay)}
          {this.props.emptySpaceRight}
        </div>
        <div className={this.props.contentContainerClass}>
          {this.props.tabArray.map(this._mapTabToContent)[this.props.selectedIndex]}
        </div>
      </div>
    )
  }
}

export default TabContainer;
