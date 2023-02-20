const errorHandleMiddleare = (err, req, res, next) => {
  console.log(err)
  res.status(500).send({ msg: 'There is an Error!' })
}

export default errorHandleMiddleare
