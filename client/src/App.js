import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CardList from './CardList';
import FilterTabs from './FilterTabs';

export default function App() {
  const [query, setQuery] = useState("")
  const queryFromFilter = (data) => {
    setQuery(data)
  }

  return (
    <div className="container-fluid pt-5">
      <FilterTabs setter={queryFromFilter} />
      <CardList query={query} />
    </div>
  );
};