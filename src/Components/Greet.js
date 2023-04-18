import React, { Component } from 'react'

 function Greet (props){
  
    return (
        <div className='fs-6 container card p-3 mt-4="true"  '>

            <h5 className=' mb-3 mt-3'>What are you Currently Doing?</h5>
            <form onSubmit={props.submitquestion}>
            <div style={{ display: "flex", flexDirection: 'row', color: "red" }} >
                <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="q1" id="inlineRadio1" value="Teacher"  />
                    <label className="form-check-label" htmlFor="inlineRadio1">Teacher</label>
                </div>
                <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="q1" id="inlineRadio2" value="Student" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Student</label>
                </div>
                <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="q1" id="inlineRadio2" value="Programmer"  />
                    <label className="form-check-label" htmlFor="inlineRadio2">Programmer</label>
                </div>
               
            </div>
            <div className="input-group mb-3">

                <input type="text" name="other"  className="form-control  mt-3" placeholder='Type Here If Not Listed' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div>

                <h5 className='mb-3 mt-3'>Please Rate Our Course</h5>
                <div style={{ display: "flex", flexDirection: 'row', color: "red" }} >
                    <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="q2" id="inlineRadio1" value= "Poor"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Poor</label>
                    </div>
                    <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="q2" id="inlineRadio2" value="Good" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Good</label>
                    </div>
                    <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="q2" id="inlineRadio2" value="Excellent" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Excellent</label>
                    </div>

                </div>

            </div>
            <div>
                <div className="form-floating">
                    <h5 className='mb-3 mt-3'>Leave a comment here:</h5>
                    <textarea className="form-control " placeholder="Leave a comment here" id="floatingTextarea" name='q3'></textarea>

                </div>
            </div>
            <button type='submit' className='btn btn-primary mt-3 '>Save</button>
            </form>
        </div>
    );
  
}

export default Greet
