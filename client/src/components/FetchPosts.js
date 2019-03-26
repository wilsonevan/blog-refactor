import React from 'react';
import { connect, } from 'react-redux';
import { Route, } from 'react-router-dom';

import PostList from './PostList';
import PostEdit from './PostEdit';
import { getPosts, } from '../reducers/posts';
import { Segment, Dimmer, Loader, } from 'semantic-ui-react';


class FetchPosts extends React.Component {
	state = { loaded: false, };

  componentDidMount() {
    this.props.dispatch(getPosts(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true, });
  }

  render() {
		const { loaded, } = this.state;

		if (loaded) {
			return (
				<div>
					{/* <PostList /> */}
					<Route exact path="/posts" component={PostList} />
					<Route exact path='/posts/:id' component={PostEdit} />
				</div>
			)
		} else {
			return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
		}
	}
}

export default connect()(FetchPosts);