import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const ManageService = () => {
  const [services, setServices] = useState([]);
  const handleDelete = (event, id) => {
    console.log('deleting product with id : ', id);
    fetch(`https://agile-castle-83860.herokuapp.com/deleteService/${id}`, {
      method: 'Delete',
    })
      .then(result => result.json())
      .then(res => {
        if (res) {
          // event.target.parentNode.style.display = "none";
          alert('item deleted');
          const updateServices = services.filter(serv => serv._id !== id);
          console.log(updateServices);
          setServices(updateServices);
        }
      });
  };
  useEffect(() => {
    fetch('https://agile-castle-83860.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className='mainbody'>
      <table width='100%'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {services.map(serv => {
            return (
              <ServiceItem
                handleDelete={handleDelete}
                service={serv}
              ></ServiceItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageService;
