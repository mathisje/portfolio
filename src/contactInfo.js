import React, {Component} from 'react';
import profile from './profile.jpg'

class ContactInfo extends Component {

  render() {
    return (
      <div className={this.props.containerClass}>
        <div className='profile-container'>
          <img src={profile}
               className='profile-picture'
               alt='profile' />
        </div>
        <div className='profile-container'>
          <div>Jeffrey Mathis</div>
          <div>Full Stack Developer</div>
          <div>(904) 718-8503</div>
          <div>mathisjeffr@gmail.com</div>
        </div>
      </div>
    )
  }
}

export default ContactInfo;
