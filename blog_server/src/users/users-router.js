const path = require('path')
const express = require('express')
const xss = require('xss')
const UserService = require('./users-service')

const usersRouter = express.Router()
const jsonParser = express.json()

const serializeUser = user => ({
  id: user.id,
  fullname: xss(user.fullname),
  username: xss(user.username),
  nickname: xss(user.nickname),
  date_created: user.date_created,
})
