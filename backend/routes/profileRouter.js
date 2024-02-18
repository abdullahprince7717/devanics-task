const router = require('express').Router();
const profileController = require('../controllers/profileController');

router.post('/createprofile', profileController.createProfile);
router.get('/getprofile', profileController.getProfiles);
router.post('/updateprofile', profileController.updateProfile);
router.delete('/deleteprofile', profileController.deleteProfile);

module.exports = router;