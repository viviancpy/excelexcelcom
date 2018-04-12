import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableFooter, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import NoteItem from './NoteItem';
import AddNewNoteItem from './AddNewNoteItem';
import './Portfolio.css';

class Portfolio extends Component {
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
    this.setState({isAddingNewNoteItem: true})
  }

  render() {
    const { noteItems, onRemoveNoteItem, onAddNoteItem } = this.props;
    const NoteItemComponents = noteItems.map((tx, idx) =>
      <NoteItem
        key={idx}
        noteItemId={idx}
        summary={tx.summary}
        description={tx.description}
        onRemoveNoteItem={onRemoveNoteItem}
      />
    );
    return (
      <Paper className="portfolio-main">
        <Table className="portfolio-table">
          <TableHead className="portfolio-table-header">
            <TableRow>
              <TableCell className="cell-icon-button"></TableCell>
              <TableCell className="cell-symbol">Symbol</TableCell>
              <TableCell className="cell-purchase-volumn" numeric>Shares Held</TableCell>
              <TableCell className="cell-purchase-price" numeric>Purchase Price</TableCell>
              <TableCell className="cell-current-price" numeric>Last Market Price</TableCell>
              <TableCell className="cell-pnl" numeric>Profit/Loss</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {NoteItemComponents}
          </TableBody>
          <TableFooter>
            <AddNewNoteItem onAddNoteItem={onAddNoteItem} />
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

export default Portfolio;
