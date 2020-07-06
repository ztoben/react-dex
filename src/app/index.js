import React, {Component, Fragment} from 'react';
import PokeList from './poke-list';
import pokemon from '../../assets/pokemon.json';
import PokeDisplay from './poke-display';
import IndicatorArea from './indicator-area';
import DPad from './d-pad';
import '../style/app.scss';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      selectedPokemon: pokemon[0],
      searchRef: React.createRef()
    };
  }

  handleChangePokemon = idx => {
    this.setState({
      selectedPokemon: pokemon[idx]
    });
  };

  handleSearch = e => {
    this.setState({
      search: e.target.value
    })
  };

  handleClearSearch = () => {
    this.state.searchRef.current.focus();
    this.setState({
      search: ''
    });
  };

  handleEnter = (e, id) => {
    if (e.keyCode === 13) {
      this.setState({
        selectedPokemon: pokemon.find(poke => poke.id === id)
      })
    }
  };

  handleListItemClick = id => {
    const selectedPokemon = pokemon.find(poke => poke.id === id);

    return this.setState({
      selectedPokemon
    });
  };

  render() {
    const {selectedPokemon} = this.state;

    return (
      <Fragment>
        <p className="page-header">react-dex</p>
        <div className="pokedex-container">
          <div className="left-screen">
            <IndicatorArea/>
            <div className="hinge">
              <div className="top"/>
              <div className="bottom"/>
            </div>
            <PokeDisplay selectedPokemon={selectedPokemon}/>
            <DPad
              selectedPokemon={selectedPokemon}
              onChangePokemon={this.handleChangePokemon}
            />
          </div>
          <div className="right-screen">
            <PokeList
              pokemon={pokemon}
              search={this.state.search}
              selectedPokemon={selectedPokemon}
              handleChange={this.handleSearch}
              onListItemClick={this.handleListItemClick}
              onEnter={this.handleEnter}
              clearSearch={this.handleClearSearch}
              searchRef={this.state.searchRef}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
