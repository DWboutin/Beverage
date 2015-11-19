import React from 'react';
import { reduxForm } from 'redux-form';
import ace from '../../wrappers/brace.pkg';

import recipeValidation from '../../utils/validations/recipeForm';
import TagsSelect from './fields/TagsSelect.react';

class RecipeForm extends React.Component {

  componentDidMount() {
    const { onEditorChange, values } = this.props;
    this.editor = ace.edit('javascript-editor');

    this.editor.getSession().setMode('ace/mode/javascript');
    this.editor.setTheme('ace/theme/monokai');
    this.editor.setShowPrintMargin(false);

    this.editor.$blockScrolling = Infinity;

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

  handleFieldChange(field, value) {
    let { onFieldChange, values } = this.props;
    let newValues = {...values};

    newValues[field] = value;

    onFieldChange(newValues);
  }

  render() {
    const { fields: {title, tags, code, description, packages}, handleSubmit, packagesItems, tagsItems } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="title" className="control-label col-sm-12">Title</label>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input type="text" id="title" className="full-field" {...title} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            {title.error && title.touched && <div>{title.error}</div>}
          </div>
        </div>
        <div className="row">
          <label htmlFor="tags" className="col-sm-6 control-label">Tags</label>
          <label htmlFor="packages" className="col-sm-6 control-label">Packages</label>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <TagsSelect items={tagsItems} onFieldChange={this.handleFieldChange.bind(this)} {...tags} className="full-field" id="tags" />
          </div>
          <div className="col-sm-6">
            <TagsSelect items={packagesItems} onFieldChange={this.handleFieldChange.bind(this)} {...packages} className="full-field" id="packages" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            {tags.error && tags.touched && <div>{tags.error}</div>}
          </div>
          <div className="col-sm-6">
            {packages.error && packages.touched && <div>{packages.error}</div>}
          </div>
        </div>
        <div className="row">
          <label htmlFor="description" className="col-sm-12 control-label">Description</label>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <textarea {...description} id="description" className="full-field" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            {description.error && description.touched && <div>{description.error}</div>}
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <textarea {...code} style={{visibility: 'hidden'}} />
            <div id="javascript-editor" style={{height: '400px'}}></div>
            {code.error && code.touched && <div>{code.error}</div>}
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6 col-sm-offset-3">
            <button type="submit" className="btn btn-block btn-primary">Submit</button>
          </div>
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
