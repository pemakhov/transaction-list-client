import { etherscanTransactionURLBase } from '../../constants/urls';
const HEX_STRING_PREFIX = '0x';

export const getEtherscanTransactionURL = (hash) => `${etherscanTransactionURLBase}${hash}`;

/**
 * Transforms a number into a hex string.
 * @param {number | string} number
 * @returns a hex string.
 */
export const toHexString = (number) => `${HEX_STRING_PREFIX}${Number(number).toString(16)}`;

/**
 * Parses an integer from a hex string.
 * @param {string} hexString
 * @returns an integer.
 */
export const parseIntFromHexString = (hexString) => parseInt(hexString, 16);

export const getFormattedDate = (timestamp) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(parseIntFromHexString(timestamp) * 1000);
  const month = months[date.getMonth()];
  const dateDay = date.getDate();
  const year = date.getFullYear();
  return `${month}-${dateDay}-${year}`;
};
