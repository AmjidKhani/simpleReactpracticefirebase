import React, { Component } from 'react'

function Register(props) {

    
return (
    <> 
<div >

            <h1 className='text-center'>   Registeration Form</h1>
            <form  onSubmit={props.submitform}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input className='form-control' type='text' name='name'></input>
                </div>
<div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input className='form-control' type='text' name='email' ></input>
                </div>

                <button type='submit' className='btn btn-primary mt-3 '>Next</button>

       
</form>
        </div>
      {""}


       
    </>
    )
}
export default Register
