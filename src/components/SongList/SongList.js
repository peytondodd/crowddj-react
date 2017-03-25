
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SongList.css';
import base from '../../base';
import Song from '../Song';

class SongList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queue: []
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`rooms/johns-room/queue`, {
      context: this,
      state: 'queue',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    console.log(this.state.queue);
    return (
      <div className="list-container">
        <h3>Next up:</h3>
        <table>
          { this.state.queue.map( song =>
            <Song
              key={ song.key }
              song={ song }/> )
          }
        </table>
      </div>
    );
  }
}

export default withStyles(s)(SongList);
