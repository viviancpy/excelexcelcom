import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { TableRow, TableCell } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import './NoteItem.css';

class NoteItem extends PureComponent {
  static propTypes = {
    noteItemId: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onRemoveNoteItem: PropTypes.func.isRequired
  }

  static defaultProps = {
    summary: "",
    description: ""
  }

  handleRemove = e => {
    this.props.onRemoveNoteItem(this.props.NoteItemId);
  }

  render() {
    const { summary, description } = this.props;
    return (
      <TableRow className="note-item-row">
        <TableCell className="note-item-cell action-button">
          <IconButton aria-label="Delete" disableRipple={true} onClick={this.handleRemove}>
            <DeleteIcon/>
          </IconButton>
        </TableCell>
        <TableCell  className="note-item-cell summary">{summary}</TableCell>
        <TableCell className="note-item-cell description">{description}</TableCell>
      </TableRow>
    );
  }
}

export default NoteItem;
