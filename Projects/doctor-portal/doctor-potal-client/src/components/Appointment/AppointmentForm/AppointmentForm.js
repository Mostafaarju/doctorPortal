import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 className='text-center text-brand'>{appointmentOn}</h2>
        <p className='text-secondary text-center'>
          <small>ON {date.toDateString()}</small>
        </p>
        <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group mb-3'>
            <input
              type='text'
              {...register('name', { required: true })}
              name='name'
              placeholder='Your Name'
              className='form-control'
            />
            {errors.name && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group mb-3'>
            <input
              type='text'
              {...register('phone', { required: true })}
              name='phone'
              placeholder='Phone Number'
              className='form-control'
            />
            {errors.phone && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group mb-3'>
            <input
              type='text'
              {...register('email', { required: true })}
              name='email'
              placeholder='Email'
              className='form-control'
            />
            {errors.email && (
              <span className='text-danger'>This field is required</span>
            )}
          </div>
          <div className='form-group row mb-3'>
            <div className='col-4 '>
              <select
                className='form-control'
                name='gender'
                {...register('gender', { required: true })}
              >
                <option disabled={true} value='Not set'>
                  Select Gender
                </option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Not set'>Other</option>
              </select>
              {errors.gender && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
            <div className='col-4 '>
              <input
                {...register('age', { required: true })}
                className='form-control'
                name='age'
                placeholder='Your Age'
                type='number'
              />
              {errors.age && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
            <div className='col-4 '>
              <input
                {...register('weight', { required: true })}
                className='form-control'
                name='weight'
                placeholder='Weight'
                type='number'
              />
              {errors.weight && (
                <span className='text-danger'>This field is required</span>
              )}
            </div>
          </div>

          <div className='form-group text-end'>
            <button type='submit' className='btn btn-brand p-2 ps-4 pe-4'>
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
