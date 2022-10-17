import express from 'express';
import {
    fetchEmployerInfo,
    fetchTranscriptByCpr,
    requestAccessByCpr,
    allEmployers
} from '../controllers/employer';

const router = express.Router();

router.get('/all', (req, res) => {
    allEmployers(req, res)
});

router.get('/fetch/:name', (req, res) => {
    fetchEmployerInfo(req, res)
});

router.get('/transcript/:cpr', (req, res) => {
    fetchTranscriptByCpr(req, res)
});

router.post('/request-access/:cpr', (req, res) => {
    requestAccessByCpr(req, res)
});

export default router;