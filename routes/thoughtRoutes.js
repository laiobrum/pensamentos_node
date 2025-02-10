import express from 'express'
import { ThoughtController } from '../controllers/Thought.controller.js'

const router = express.Router()

router.get('/', ThoughtController.home)
router.get('/signup', ThoughtController.signup)
router.post('/signup/create', ThoughtController.createUser)
router.get('/signin', ThoughtController.signin)
router.post('/signin/enter', ThoughtController.userSignIn)
router.get('/dashboard', ThoughtController.dashboard)
router.get('/create', ThoughtController.create)
router.post('/create/new', ThoughtController.newThought)

export default router