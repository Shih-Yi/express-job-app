const errorHandleMiddleware = (err, req, res, next) => {
  console.log(err)
  res.status(500).send({ msg: err })
}

export default errorHandleMiddleware
