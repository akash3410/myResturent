import React from 'react'

const Spinner = () => {
  return (
    <div className='container'>
      <div className='row row-content'>
        <div className="col-12 align-self-center">
          <span className="fa fa-spinner fa-3x text-dark fa-fw fa-pulse"></span>
          <br />
          <br />
          <span>Ops, loading a while!</span>
        </div>
      </div>
    </div>
  )
}

export default Spinner