import React, {Component, Fragment} from 'react';
import pokemon from '../../assets/pokemon.json';
import '../style/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      selectedIndex: 0,
      selectedPokemon: pokemon[0]
    };
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    })
  };

  handleEnter = (e, idx) => {
    if (e.keyCode === 13) {
      this.setState({
        selectedIndex: idx,
        selectedPokemon: pokemon[idx]
      })
    }
  };

  buildList = (pokemonArr) => pokemonArr
    .filter(poke => this.state.search === '' || poke.name.includes(this.state.search))
    .map((poke, idx) => {
    return (
      <li
        className={`poke-list-item${idx === this.state.selectedIndex ? ' selected' : ''}`}
        key={poke.id}
        onClick={
          () => this.setState({
            selectedIndex: idx,
            selectedPokemon: pokemon[idx]
          })
        }
        tabIndex={0}
        onKeyDown={e => this.handleEnter(e, idx)}
      >
        {poke.name}
      </li>
    )
  });

  render() {
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
                <h4>{this.state.selectedPokemon.name}</h4>
                <img width={100} src={require(`../../assets/sprites/${this.state.selectedPokemon.id}.png`)}/>
              </div>
            </div>
          </div>
          <div className="right-screen">
            <div className="poke-list-container">
              <input
                value={this.state.search}
                onChange={this.handleChange}
                className="poke-search"
                placeholder="Search for a Pokémon..."
              />
              <div className="poke-list">
                <ul>
                  {this.buildList(pokemon)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
