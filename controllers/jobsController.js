import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js'

const createJob = async (req, res) => {
  const { company, position } = req.body
  if (!company || !position) {
    throw new BadRequestError('Please provide all values')
  }
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId })
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
}

const updateJob = async (req, res) => {
  res.send('update job')
}

const showStats = async (req, res) => {
  res.send('show job stats')
}

const deleteJob = async (req, res) => {
  res.send('delete job')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }
