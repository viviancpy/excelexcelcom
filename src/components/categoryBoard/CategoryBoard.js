import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableFooter, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import NoteItem from '../noteItem/NoteItem';
import AddNoteItem from '../noteItem/AddNoteItem';
import './CategoryBoard.css';

class CategoryBoard extends Component {
  static propTypes = {
    noteItems: PropTypes.array.isRequired,
    onRemoveNoteItem: PropTypes.func.isRequired,
    onAddNoteItem: PropTypes.func.isRequired
  }

  static defaultProps = {
    isLoading: true,
    noteItems: []
  }

  handleAddNewNoteItem = e => {
    // this.setState({isAddingNewNoteItem: true})
  }

  render() {
    const { NoteItems, onRemoveNoteItem, onAddNoteItem } = this.props;
    const NoteItemComponents = NoteItems.map((nt, idx) =>
      <NoteItem
        key={idx}
        noteItemId={idx}
        summary={nt.summary}
        description={nt.description}
        onRemoveNoteItem={onRemoveNoteItem}
      />
    );
    return (
      <Paper className="category-board-main">
        <Table className="category-board-table">
          <TableHead className="category-board-table-header">
            <TableRow>
              <TableCell className="cell-icon-button"></TableCell>
              <TableCell className="cell-summary">Shortcut</TableCell>
              <TableCell className="cell-details">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {NoteItemComponents}
          </TableBody>
          
        </Table>
      </Paper>
    );
  }
}

export default CategoryBoard;
