import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addStatus, setAddStatus] = useState(false);
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('file', data.image[0]);
    formData.append('service', data.service);
    formData.append('description', data.description);

    fetch('https://agile-castle-83860.herokuapp.com/addAService', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setAddStatus(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className='mainbody'>
      <div className='service-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Service Title:</p>
          <input type='text' defaultValue='' {...register('service')} /> <br />
          <p>Image:</p>
          <input type='file' {...register('image', { required: true })} />{' '}
          <br />
          {errors.image && <span>This field is required</span>} <br />
          <p>Description:</p>
          <textarea
            type='text'
            {...register('description', { required: true })}
          />
          {errors.description && <span>This field is required</span>} <br />
          <input
            className='btn btn-success'
            type='submit'
            value='Add Service'
          />
        </form>
        {addStatus ? (
          <p style={{ color: 'green' }}>Service Added sucessfully</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default AddService;
