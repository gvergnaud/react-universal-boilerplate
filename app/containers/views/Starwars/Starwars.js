import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { get as getCharacters } from 'state/modules/starwarsCharacters'
import objectToValues from 'utils/objectToValues'
import Character from './Character'


const stateToProps = ({ starwarsCharacters: { charactersByName } }) => ({
  characters: objectToValues(charactersByName)
})
const bindActions = { getCharacters }

class Starwars extends Component {

  static propTypes = {
    characters: PropTypes.array.isRequired,
    getCharacters: PropTypes.func.isRequired
  };

  static readyOnActions = (dispatch, location, params) => [
		() => dispatch(getCharacters())
	];

  componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getCharacters()
    }
  }

  render() {
    const { getCharacters, characters } = this.props
    return (
      <div>
        <button onClick={() => getCharacters()}>
          Get characters
        </button>

        {characters.map(char =>
          <Character key={char.name} {...char} />
        )}
      </div>
    )
  }
}

<<<<<<< HEAD:app/containers/views/Starwars/Starwars.js


export default connect(stateToProps, bindActions)(Starwars)
=======
export default connect(stateToProps, bindActions)(StarwarsContainer)
>>>>>>> 9b3be81... update to babel 6.3.X:app/containers/StarwarsContainer.js
