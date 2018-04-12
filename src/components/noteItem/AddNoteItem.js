import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { TableRow, TableCell } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import LibraryAddIcon from 'material-ui-icons/LibraryAdd';
import EditNoteItem from './EditNoteItem';
import './AddNoteItem.css';

class AddNoteItem extends Component {
  static propTypes = {
    onAddNoteItem: PropTypes.func.isRequired
  }

  state = {
    isAddingNewNoteItem: false
  }

  handleStartAddNoteItem = e => {
    this.setState({isAddingNewNoteItem: true});
  }

  handleConfirm = NoteItem => {
    this.props.onAddNoteItem(NoteItem);
    this.setState({isAddingNewNoteItem: false});
  }

  handleCancel = () => {
    this.setState({isAddingNewNoteItem: false});
  }

  render() {
    const { isAddingNewNoteItem } = this.state;

    return (
      <TableRow className="edit-row">
        { isAddingNewNoteItem
          ? <EditNoteItem onConfirm={this.handleConfirm} onCancel={this.handleCancel} />
          : <TableCell className="edit-cell" >
              <IconButton aria-label="Add NoteItem" onClick={this.handleStartAddNoteItem}>
                <LibraryAddIcon/>
              </IconButton>
            </TableCell> }
      </TableRow>
    );
  }
}

export default AddNoteItem;
