import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoryBoard from '../components/categoryBoard/CategoryBoard';
import * as Actions from '../actions';
import categoryBoardSelector from '../selectors/categoryBoardSelector'

export class AppBodyContainer extends Component {
  static propTypes = {
    noteItems: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render(){
    const {actions, noteItems} = this.props;
    return (
      <CategoryBoard
        NoteItems={noteItems}
        onAddNoteItem={actions.addNoteItem}
        onRemoveNoteItem={actions.removeNoteItem}
      />
    )
  }
}

const mapStateToProps = state => ({
  noteItems: categoryBoardSelector(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBodyContainer)
