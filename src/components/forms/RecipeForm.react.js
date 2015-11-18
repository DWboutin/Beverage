import React from 'react';
import { reduxForm } from 'redux-form';
import recipeValidation from '../../utils/validations/recipeForm';
import ace from '../../wrappers/brace.pkg';

class RecipeForm extends React.Component {

  componentDidMount() {
    const { onEditorChange, values } = this.props;
    this.editor = ace.edit('javascript-editor');

    this.editor.getSession().setMode('ace/mode/javascript');
    this.editor.setTheme('ace/theme/monokai');
    this.editor.setShowPrintMargin(false);

    this.editor.on('change', (e) => {
      let values = this.props.values;
      onEditorChange({...values, code: this.editor.getValue()});
    });
  }

  componentDidUpdate() {
    if(this.props.values.title === undefined && this.props.values.tags === undefined && this.props.values.code === undefined){
      this.editor.setValue('', -1);
    }
  }

  componentWillUmount() {
    this.editor.destroy();
  }

  render() {
    const { fields: {title, tags, code, description, packages}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" {...title} />
          {title.error && title.touched && <div>{title.error}</div>}
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <input type="text" {...tags} />
          {tags.error && tags.touched && <div>{tags.error}</div>}
        </div>
        <div>
          <label htmlFor="packages">Packages</label>
          <input type="text" {...packages} />
          {packages.error && packages.touched && <div>{packages.error}</div>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea {...description} />
          {description.error && description.touched && <div>{description.error}</div>}
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <textarea {...code} style={{visibility: 'hidden'}} />
          <div id="javascript-editor" style={{height: '400px'}}></div>
          {code.error && code.touched && <div>{code.error}</div>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

RecipeForm = reduxForm({
  form: 'recipeForm',
  fields: ['title', 'tags', 'code', 'description', 'packages'],
  validate: recipeValidation
})(RecipeForm);

RecipeForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export default RecipeForm;
