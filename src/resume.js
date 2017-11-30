import React, {Component} from 'react';
import resume from './Resume.docx.pdf'

class Resume extends Component {

  render() {
    return (
      <div className={this.props.containerClass}>
        <a className='download-link' href={resume} target='_blank'>⇩download</a>
        <iframe className='i-frame' title='resume'
                src="https://docs.google.com/document/d/e/2PACX-1vSb7qDBf_lLKEXs-0fMHEgqc6tEI5AvD4XOc1N3UzDON7EJKkmSnwvArN9ZGZlB2stRp8wLiyjVRGRJ/pub?embedded=true" />
      </div>
    )
  }
}

export default Resume;
