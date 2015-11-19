import React from 'react';

class TagsSelect extends React.Component {
  componentDidMount() {
    let { name, onFieldChange } = this.props;

    $('select[name='+ name +']').select2({
      tags: true,
      tokenSeparators: [', ']
    }).on('change', function() {
      onFieldChange(name, $(this).val())
    });
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.items.length !== this.props.items.length || nextProps.value !== this.props.value){
      return true;
    }
    return false;
  }

  render() {
    let { items } = this.props;

    return (
      <select multiple {...this.props}>
        {
          items.map((item, index) => {
            return (<option key={item._id} value={item.name}>{item.name}</option>);
          })
        }
      </select>
    );
  }
}

TagsSelect.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFieldChange: React.PropTypes.func.isRequired
};

export default TagsSelect;