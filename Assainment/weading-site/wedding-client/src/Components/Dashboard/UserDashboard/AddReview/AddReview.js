import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const AddReview = () => {
  const [loggedinUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [review, setReview] = useState(false);
  const onSubmit = data => {
    console.log(data);
    const newReview = { ...data };
    newReview.img = loggedinUser.photoURL;
    fetch('https://agile-castle-83860.herokuapp.com/addReview', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newReview),
    }).then(res => {
      res.json();
      data ? setReview(data) : setReview(false);
    });
  };
  return (
    <div className='mainbody'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name:</p>
        <input
          type='text'
          defaultValue={loggedinUser.displayName}
          {...register('name')}
        />{' '}
        <br />
        <p>Company:</p>
        <input
          type='text'
          defaultValue=''
          placeholder='company name'
          {...register('resig', { required: true })}
        />{' '}
        <br />
        {errors.resig && <span>This field is required</span>} <br />
        <p>Email:</p>
        <input defaultValue={loggedinUser.email} {...register('email')} />{' '}
        <br />
        <p>Description:</p>
        <textarea
          defaultValue={'Add your feedback'}
          type='text'
          {...register('review', { required: true })}
        />
        {errors.review && <span>This field is required</span>} <br />
        <input type='submit' value='Add Review' />
      </form>
      {review ? <p style={{ color: 'green' }}></p> : <p></p>}
    </div>
  );
};

export default AddReview;
