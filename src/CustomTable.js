import React, { useState } from 'react';
import './CustomTable.css';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const CustomTable = ({ columns, data }) => {
  const [sortedColumn, setSortedColumn] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const getSortedData = () => {
    return [...data].sort((a, b) => {
      const aValue = a[sortedColumn];
      const bValue = b[sortedColumn];

      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });
  };

  const getFilteredData = () => {
    return getSortedData().filter((row) => {
      return Object.values(row).some(
        (cellValue) =>
          typeof cellValue === 'string' &&
          cellValue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const paginatedData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return getFilteredData().slice(startIndex, endIndex);
  };

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortDirection('asc');
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="custom-table-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search"
        style={{ margin: '10px' }}
        className="search-input"
      />
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} className="coloumnName">
                {column}{' '}
                <span>
                  <IoIosArrowDropupCircle
                    className={`icons ${sortedColumn === column && sortDirection === 'asc' ? 'active' : ''}`}
                    onClick={() => handleSort(column)}
                  />
                  <IoIosArrowDropdownCircle
                    className={`icons ${sortedColumn === column && sortDirection === 'desc' ? 'active' : ''}`}
                    onClick={() => handleSort(column)}
                  />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData().map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={paginatedData().length < pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomTable;