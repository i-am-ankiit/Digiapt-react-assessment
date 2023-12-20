import React from 'react';
import CustomTable from './CustomTable';

const columns = ['ID', 'Name']; // Add more columns as needed

const data = [
  { ID: 1, Name: 'Ankit' },
  { ID: 2, Name: 'Akash' },
  { ID: 3, Name: 'Anushka' },
  { ID: 4, Name: 'Mrinal' },
  { ID: 15, Name: 'Nirmal' },
  { ID: 26, Name: 'Anup' },
  { ID: 37, Name: 'sanjeev' },
  { ID: 8, Name: 'Priya' },
  { ID: 9, Name: 'Abhishek' },
  { ID: 10, Name: 'Divya' },
  { ID: 11, Name: 'Talha' },
  { ID: 12, Name: 'Masoom' },
  { ID: 13, Name: 'Abrar' },
  { ID: 14, Name: 'Ranvijay' },
  
];

function App() {
  return (
    <div>
      <CustomTable columns={columns} data={data} />
    </div>
  );
}

export default App;