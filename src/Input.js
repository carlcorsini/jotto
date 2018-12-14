import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { guessWord, giveUp } from './actions'
import { connect } from 'react-redux'

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props)
    this.inputBox = React.createRef()
  }

  submitGuessedWord = e => {
    e.preventDefault()
    const guessedWord = this.inputBox.current.value
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord)
    }
    this.inputBox.current.value = ''
  }

  giveUp = e => {
    e.preventDefault()
    this.props.giveUp()
  }

  render() {
    const contents =
      this.props.success || this.props.giveUpState ? null : (
        <FadeIn>
          <form className="form">
            <div className="row align-items-center">
              <div className="col" style={{ textAlign: 'center' }} />
              <input
                data-test="input-box"
                ref={this.inputBox}
                className="mb-2 mx-sm-3 form-control"
                id="word-guess"
                type="text"
                placeholder="Try to guess the word!"
              />
              <div className="col" />
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <div className="btn-group">
                  <button
                    type="button"
                    onClick={this.giveUp}
                    data-test="give-up-button"
                    className="btn btn-danger mb-2">
                    Give Up :(
                  </button>
                  <button
                    onClick={this.submitGuessedWord}
                    data-test="submit-button"
                    className="btn btn-primary mb-2 btn-block"
                    type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </FadeIn>
      )
    return <div data-test="component-input">{contents}</div>
  }
}

const mapStateToProps = ({ success, giveUp }) => {
  return { success, giveUpState: giveUp }
}

export default connect(
  mapStateToProps,
  { guessWord, giveUp }
)(UnconnectedInput)
