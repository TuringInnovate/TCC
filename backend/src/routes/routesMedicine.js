const express  = require('express')
const router = express.Router()

const MedicineController = require('../controllers/medicineController')

// ROTAS DO REMÉDIO
router.post('/create', MedicineController.createMedicine)
router.get('/list', MedicineController.listMedicine)
router.get('/:id', MedicineController.getMedicine)
router.put('/:id', MedicineController.updateMedicine)
router.delete('/:id', MedicineController.deleteMedicine)


module.exports = router   