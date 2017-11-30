import React, {Component} from 'react';

class AboutMe extends Component {

  render() {
    return (
      <div className={this.props.containerClass}>
        <div>
          I am a full stack software developer with four years of experience shipping production code in fast-paced agile environments.
          I am a dedicated technologist, an adept problem-solver, and a lifelong learner.
          At university, I studied linguistics and both classical and modern languages,
          and I developed particular interests in semantics, computational linguistics, and historical linguistics.
          I play strategy games competitively in my free time, which has driven me to develop a passion for games, game theory, and artificial intelligence.
        </div>
      </div>
    )
  }
}

export default AboutMe;
