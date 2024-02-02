import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="col-12" style={{ padding: "60px" }}>
        <span className="fa fa-spinner fa-5x text-primary fa-fw fa-pulse"></span>
      </div>
      <div className="col-12" style={{ padding: "60px" }}>
        <span class="fa fa-brands fa-facebook fa-5x"></span>
      </div>
    </div>
  )
}

export default Loading