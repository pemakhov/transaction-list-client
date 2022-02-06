import React from 'react';

function TableHead() {
  const columnTitles = [
    'Block number',
    'Transaction ID',
    'Sender address',
    "Recipient's address",
    'Block confirmations',
    'Date',
    'Value',
    'Transaction Fee',
  ];

  return (
    <div className="thead">
      {columnTitles.map((title) => (
        <div className="cell" key={title}>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default TableHead;
