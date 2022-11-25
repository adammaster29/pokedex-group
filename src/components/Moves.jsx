import React from "react";
import Table from 'react-bootstrap/Table';

const Moves = ({pokeInfo}) => {
  return (
    <div className="card__move">
      <ul>
        <h3 className={`card__name-move name-${pokeInfo?.types[0].type.name}`}>Movements</h3>
        {pokeInfo?.moves.map((move) => (
          <Table striped bordered hover size="sm" className="list__move" key={move.move.url}>
           <tr>  <td>{move.move.name}</td></tr>
          </Table>
        ))}
      </ul>
    </div>
  );
};

export default Moves;
