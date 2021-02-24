import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';

const NewProjectForm = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="Create New Project"
              navigation="Application / New Project Form">
      <form>

        <TextField
          hintText="Project Title"
          floatingLabelText="Project Title"
          fullWidth={true}
        />

        <TextField
          hintText="Project Description"
          floatingLabelText="Project Description"
          
          multiline
          rows={8}
          fullWidth={true}
        />


        <TextField
          hintText="Eligibility"
          floatingLabelText="Eligibility"
          fullWidth={true}
        />

        <SelectField
          floatingLabelText="Mode"
          value=""
          fullWidth={true}>
          <MenuItem key={0} primaryText="Online"/>
          <MenuItem key={1} primaryText="Offline"/>
        </SelectField>

        <TextField
          hintText="Duration"
          floatingLabelText="Duration"
          fullWidth={true}
        />

        <DatePicker
          hintText="Last Date to Apply"
          floatingLabelText="Last Date to Apply"
          fullWidth={true}/>


        <div style={styles.toggleDiv}>
          <Toggle
            label="Passport Requirement"
            labelStyle={styles.toggleLabel}
          />
        </div>

        <Divider/>

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="Cancel"/>
          </Link>

          <RaisedButton label="Save"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
  );
};

export default NewProjectForm;
