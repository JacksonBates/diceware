import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Result = (props) => {
  return <div className="card">
  <div className="card-header">
    <div className="card-title h5">Your passphrase</div>
    <div className="card-subtitle text-gray">Memorise this!</div>
  </div>
  <div className="card-body" id='generatedPhrase'>
    {props.passphrase}
  </div>
  <div className="card-footer">
  {props.passphrase !== '' && (
    <CopyToClipboard text={props.passphrase} >
      <button className='btn btn-link'>Copy</button>
    </CopyToClipboard>)}
  </div>
</div>
}

export default Result;