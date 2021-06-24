import React from 'react';

const ServiceItem = ({ service, handleDelete }) => {
  const id = service._id;
  const handleClick = e => {
    handleDelete(e, id);
  };
  return (
    <tr>
      <td>{service.service}</td>
      <td>{service.description}</td>
      <td>
        <button onClick={handleClick} className='btn btn-sm btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ServiceItem;
