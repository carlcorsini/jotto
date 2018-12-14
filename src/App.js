import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import FadeIn from 'react-fade-in'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import GiveUp from './GiveUp'
import Input from './Input'
import { getSecretWord } from './actions'

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord()
  }

  getSecretWord = () => {
    this.props.getSecretWord()
  }
  render() {
    return this.props.serverError ? (
      <div
        className="container"
        style={{
          marginTop: '2em',
          maxWidth: '60%',
          fontSize: '2em',
          textAlign: 'center',
        }}>
        <div className="alert alert-warning">
          <span>Jotto is down :( We are so sorry</span>
        </div>
      </div>
    ) : (
      <FadeIn>
        <div className="container" style={{ marginTop: '2em' }}>
          <div className="row">
            <div className="col" />
            <div
              style={{
                textAlign: 'center',
                fontFamily: 'Indie Flower',
              }}
              className="col">
              <h1 style={{ fontSize: '4em' }}>Jotto</h1>
            </div>
            <div className="col" />
          </div>
          <div className="container-text">
            <div className="row">
              <div className="col" />
              <div style={{ textAlign: 'center' }} className="col-8">
                <Congrats
                  secretWord={this.props.secretWord}
                  success={this.props.success}
                  getSecretWord={this.getSecretWord}
                />
                <GiveUp
                  secretWord={this.props.secretWord}
                  giveUp={this.props.giveUp}
                  getSecretWord={this.getSecretWord}
                />
                <Input />
                <GuessedWords
                  success={this.props.success}
                  giveUp={this.props.giveUp}
                  guessedWords={this.props.guessedWords}
                  getSecretWord={this.getSecretWord}
                />
              </div>
              <div className="col" />
            </div>
          </div>
        </div>
      </FadeIn>
    )
  }
}

const mapStateToProps = ({
  success,
  guessedWords,
  secretWord,
  giveUp,
  serverError,
}) => {
  return {
    success,
    guessedWords,
    secretWord: secretWord.word,
    serverError: secretWord.serverError,
    giveUp,
  }
}

export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnconnectedApp)
