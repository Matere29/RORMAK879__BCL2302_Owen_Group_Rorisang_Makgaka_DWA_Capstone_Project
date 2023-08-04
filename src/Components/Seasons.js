import React, { Component } from 'react';

class Seasons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonsStore: null,
      episodesStore: null,
    };
  }

  componentDidMount() {
    if (this.props.id) {
      fetch(`https://podcast-api.netlify.app/id/${this.props.id}`)
        .then(res => res.json())
        .then(data => {
          const seasonApi = data.seasons;
          const mapSeasons = seasonApi.map((item) => (
            <div key={item.id} onClick={() => this.handleSeasonClick(item.episodes)}>
              <p>{item.title}</p>
              <img className='happySeasons' src={item.image} alt={item.title} />
            </div>
          ));
          this.setState({ seasonsStore: mapSeasons });
        });
    }
  }

  handleSeasonClick = (episodes) => {
    const Episodes = episodes.map((item) => (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <audio controls className='audioControl'>
          <source src={item.file} className='itemFile' />
        </audio>
      </div>
    ));
    this.setState({ episodesStore: Episodes });
  };

  render() {
    return (
      <>
        <div className='episodeStore'>
          {this.state.episodesStore}
        </div>
        <div>
          {this.state.seasonsStore}
        </div>
      </>
    );
  }
}

export default Seasons;
