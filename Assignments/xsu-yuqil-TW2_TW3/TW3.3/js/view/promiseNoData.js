function promiseNoData(promise, data, error){
  return (
    (!promise && <span>no data</span>) || // case 1
    (error && <h1>{error}</h1>) || // case 3
    (!data && (
      <center>
        <img
          alt="loading"
          src="http://www.csc.kth.se/~cristi/loading.gif"
        />
      </center>
    ))

  ); // case 2
}
