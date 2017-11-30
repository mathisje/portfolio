import React, { Component } from 'react';
import './App.css';

import TabContainer from "./tabContainer";
import ContactInfo from "./contactInfo";
import AboutMe from "./aboutMe";
import Resume from "./resume";
import Projects from "./projects";

class StateController extends Component {
  constructor() {
    super();
    this.state = {
      tabArray: [],
      selectedIndex: 0
    };
  }

  componentWillMount() {
    let tabArray = this._generateTabList();
    this.setState({
      tabArray: tabArray
    });
  }

  _generateTabList = () => {
    let appTab = {
      title: 'About Me',
      content: (
        <div key={0}>
          <AboutMe containerClass='paragraph' />
        </div>
      )
    };
    let aboutTab = {
      title: 'Resume',
      content: (
        <div key={1}>
          <Resume />
        </div>
      )
    };
    let projectsTab = {
      title: 'Projects',
      content: (
        <div key={1}>
          <Projects containerClass='projects' />
        </div>
      )
    };
    return [appTab, aboutTab, projectsTab];
  };

  _switchToTab = (index) => {
    this.setState({
      selectedIndex: index
    });
  };

  render() {
    return (
      <div className='background'>
        <ContactInfo containerClass='container' />
        <TabContainer containerClass='tab-container'
                      contentContainerClass='content-container'
                      tabRowClass='tab-row-class'
                      headerClass='tab-header'
                      selectedHeaderClass='tab-header-selected'
                      titleClass='tab-title'
                      emptySpaceRight={(<div className='empty-tab' />)}
                      headerClickHandler={this._switchToTab}
                      selectedIndex={this.state.selectedIndex}
                      tabArray={this.state.tabArray} />
      </div>
    );
  }
}

export default StateController;
