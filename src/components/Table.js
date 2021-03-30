import React from 'react';

// This section comes from following this tutorial: https://www.smashingmagazine.com/2020/03/sortable-tables-react/

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default function ProductTable(props) {
  const { items, requestSort, sortConfig } = useSortableData(props.people);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Employee Directory</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('location')}
              className={getClassNamesFor('location')}
            >
              Location
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// export default function Table() {
//   return (
//     <div className="App">
//       <ProductTable
//         people={[
//           { id: 1, name: 'test',  location: 20 },
//           { id: 2, name: 'Milk', location: 32 },
//           { id: 3, name: 'Yoghurt',  location: 12 },
//           { id: 4, name: 'Heavy Cream',  location: 9 },
//           { id: 5, name: 'Butter',  location: 99 },
//           { id: 6, name: 'Sour Cream ',  location: 86 },
//           { id: 7, name: 'Fancy French Cheese 🇫🇷',  location: 12 },
//         ]}
//       />
//     </div>
//   );
// }
  