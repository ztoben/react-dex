import React, {Component, Fragment} from 'react';
import PokeList from './components/poke-list';
import TypeBadges from './components/type-badges';
import pokemon from '../../assets/pokemon.json';
import '../style/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      selectedPokemon: pokemon[0],
      searchRef: React.createRef()
    };
  }

  handleChange = e => {
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
            <div className="top-border"/>
            <div className="hinge">
              <div className="top"/>
              <div className="bottom"/>
            </div>
            <div className="poke-display-container">
              <div className="poke-display">
                <h4>{selectedPokemon.name}</h4>
                <div className="poke-img-container">
                  <img
                    width={150}
                    src={require(`../../assets/sprites/${selectedPokemon.id}.png`)}
                  />
                </div>
                <TypeBadges types={selectedPokemon.type}/>
              </div>
            </div>
          </div>
          <div className="right-screen">
            <PokeList
              pokemon={pokemon}
              search={this.state.search}
              selectedPokemon={selectedPokemon}
              handleChange={this.handleChange}
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
