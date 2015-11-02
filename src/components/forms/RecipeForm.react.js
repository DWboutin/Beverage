import React from 'react';
import { reduxForm } from 'redux-form';
import recipeValidation from '../../utils/validations/recipeForm';
import AceEditor from 'react-ace';

class RecipeForm extends React.Component {

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
          <AceEditor
            mode="javascript"
            theme="github"
            onChange={onChange}
            name="code"
            editorProps={{$blockScrolling: true}}
            />
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
  fields: ['title', 'tags'],
  validate: recipeValidation
})(RecipeForm);

export default RecipeForm;
