import React, { Component } from 'react';

class Form extends Component {

  render() { 
    const { onChange, onClick } = this.props;
    return (
      <div className="form-group">
          <label className="form-label">Number of Words</label>
          <label className="form-radio">
            <input onChange={onChange} type="radio" name="gender" value="5"/>
            <i className="form-icon"></i> 5 (websafe)
          </label>
          <label className="form-radio">
            <input onChange={onChange} type="radio" name="gender" value="6"/>
            <i className="form-icon"></i> 6 (safer)
          </label>
          <label className="form-radio">
            <input onChange={onChange} type="radio" name="gender" value="7"/>
            <i className="form-icon"></i> 7 (recommended)
          </label>
          <label className="form-radio">
            <input onChange={onChange} type="radio" name="gender" value="8"/>
            <i className="form-icon"></i> 8 (future-proof)
          </label>
        <button className="btn" onClick={onClick}>Generate Phrase</button>
      </div>
    );
  }
}

export default Form;
