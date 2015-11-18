import React from 'react';
import moment from 'moment';

class RecipeListing extends React.Component {

  buildListing(items) {
    return items.map((item, index) => {
      return (
        <div className="listing-item list-group-item" key={item._id}>
          <div className="row">
            <div className="col-md-12">
              <h3><a href="#">{item.title}</a></h3>
              <span>{moment(item.created_at).fromNow()}</span>
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