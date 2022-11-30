function Preloader({loading = true}){
  if(loading)
    return (
      <>
        <div className="preloader__wrapper">
          <div className="loading">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </>
    )
  else
    return
}

export default Preloader