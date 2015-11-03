import React from 'react';
import { reduxForm } from 'redux-form';
import recipeValidation from '../../utils/validations/recipeForm';
import ace from '../../wrappers/brace.pkg';


class RecipeForm extends React.Component {

  componentDidMount() {
    const { onEditorChange } = this.props;
    var editor = ace.edit('javascript-editor');
    editor.getSession().setMode('ace/mode/javascript');
    editor.setTheme('ace/theme/monokai');
    editor.on('change', (e) => {
      onEditorChange(editor.getValue());
    });
  }

  render() {
    const { fields: {title, tags, code}, handleSubmit } = this.props;

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
  fields: ['title', 'tags', 'code'],
  validate: recipeValidation
})(RecipeForm);

export default RecipeForm;
