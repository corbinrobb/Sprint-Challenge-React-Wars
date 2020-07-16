import React from 'react';
import { Form, Input } from 'reactstrap';


const SearchBar = props => {

  const changeTerm = (e) => {
    props.setSearchTerm(e.target.value);
  }

  return (
    <Form>
      <Input value={props.searchTerm} type="text" placeholder="Search" onChange={changeTerm}></Input>
    </Form>
  );
}

export default SearchBar;