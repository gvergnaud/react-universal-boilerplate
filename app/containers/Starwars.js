import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { get as getCharacters } from 'state/modules/starwarsCharacters'


const stateToProps = ({ starwarsCharacters: { charactersByName } }) => ({
  characters: Object.keys(charactersByName).map(name => charactersByName[name])
})
const bindActions = { getCharacters }

class StarwarsContainer extends Component {

  static propTypes = {
    characters: PropTypes.array.isRequired,
    getCharacters: PropTypes.func.isRequired
  }

  static readyOnActions = (dispatch, location, params) => [
		() => dispatch(getCharacters())
	]

  componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getCharacters()
    }
  }

  render() {
    const { getCharacters, characters } = this.props
    return (
      <div className="StarwarsContainer">
        <button onClick={() => getCharacters()}>Get characters</button>
        {characters.map(char =>
          <div key={char.name}>
            <p>{char.name} ({char.gender})</p>
          </div>
        )}
      </div>
    )
  }
}

export default connect(stateToProps, bindActions)(StarwarsContainer)
