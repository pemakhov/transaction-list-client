import { TRANSACTIONS_PER_PAGE } from './transactions';

export const fetchRecentTransactionsURL = `/transactions/${TRANSACTIONS_PER_PAGE}`;
export const filteredURLBase = '/transactions'; // query [filter, value, limit, page]

export const etherscanTransactionURLBase = 'https://etherscan.io/tx/'; // hash should be concatenated
