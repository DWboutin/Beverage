import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { formatForUrl } from '../../utils/helpers';

class RecipeListing extends React.Component {

  buildListing(items) {
    return items.map((item, index) => {

      let formatedTitle = formatForUrl(item.title);

      return (
        <div className="listing-item list-group-item" key={item._id}>
          <div className="row">
            <div className="col-md-12">
              <h3><Link to={"/recipes/view/" + item._id + '/' + formatedTitle}>{item.title}</Link></h3>
              <span className="date">{ moment(item.created_at).fromNow() }</span>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    let { items } = this.props;

    return (
      <div className="listing list-group">
        <h2>Recipes listing</h2>
        {this.buildListing(items)}
      </div>
    );
  }
}

RecipeListing.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default RecipeListing;