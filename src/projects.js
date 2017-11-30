import React, {Component} from 'react';
import manaYield from './manaYield.png'

class Projects extends Component {

  render() {
    return (
      <div className={this.props.containerClass}>
        <div>
          <a href='https://mathisje.github.io/ManaYield/' target='_blank'>
            <img src={manaYield}
                 className='project-picture'
                 alt='mana yield' />
          </a>
        </div>
        <div className='project-description'>
          <a href='https://mathisje.github.io/ManaYield/' target='_blank'>
            Mana Yield
          </a>
          <div>
            ManaYield is a web app for the strategy card game Magic the Gathering.
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
