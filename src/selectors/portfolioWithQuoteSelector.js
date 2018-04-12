import { createSelector } from 'reselect'

const getNoteItems = (state, props) =>
  state.portfolio.NoteItems

const getQuotes = (state, props) =>
  state.quote.quotes

const portfolioWithQuoteSelector = createSelector(
  [getNoteItems, getQuotes],
  (NoteItems, quotes) => {
    return NoteItems.map(tx => {
      const quote = quotes[tx.symbol];
      if (quote && quote.isSuceeded && !isNaN(quote.marketPrice)){
        tx['marketPrice'] = Number(quote.marketPrice);
        tx['profitAndLoss'] = (quote.marketPrice - tx.purchasePrice) * tx.purchaseVolumn;
      } else {
        tx['marketPrice'] = null;
        tx['profitAndLoss'] = null;
      }
      return tx;
    });
  }
)

export default portfolioWithQuoteSelector;
