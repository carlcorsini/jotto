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
    return (
      <FadeIn>
        <div className="container" style={{ marginTop: '2em' }}>
          <div className="row">
            <div className="col" />
            <div style={{ textAlign: 'center' }} className="col">
              <h1>Jotto</h1>
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

const mapStateToProps = state => {
  const { success, guessedWords, secretWord, giveUp } = state
  return { success, guessedWords, secretWord, giveUp }
}

export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnconnectedApp)
