import React, { Component } from 'react'
import { guessWord } from './actions'
import { connect } from 'react-redux'

export class UnconnectedInput extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          onClick={() => this.props.guessWord('train')}
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit">
          Submit
        </button>
      </form>
    )
    return <div data-test="component-input">{contents}</div>
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedInput)
