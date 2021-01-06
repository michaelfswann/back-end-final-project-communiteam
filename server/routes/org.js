var express = require('express')
var router = express.Router()
const multer = require('multer')

const {
    addEvent,
    updateEventById,
    deleteEventById
} = require('../models/events.js')

const {
    countAllTicketsAtEventId,
    deleteTicketsByEventId
} = require('../models/tickets.js')

const getRoleMessage = () => {
    return {
        message:
            'The API successfully validated your access token and permissions.'
    }
}

router.get('/', async function (req, res, next) {
    const message = getRoleMessage()
    res.json({ success: true, payload: message })
})

/* EVENT ROUTES */

/* app.post('/api/image-upload', singleUploadCtrl,  async (req, res) => {
    try {           
      
      await cImage.save();
      return res.json(cImage);
    } catch(error) {
      return res.status(422).json({message: error.message});
    }
  }); */



/* const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg']
const storage = multer.memoryStorage()
const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        if (allowedFormats.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error('Not supported file format !'), false)
        }
    }
}) */

const ALLOWED_FORMAT = ['image/jpeg', 'image/png', 'image/jpg'];

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: function(req, file, cb) {
    if (ALLOWED_FORMAT.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Not supported file format!'), false);
    }
  }
});

/* const singleUpload = upload.single('image');

const singleUploadImgCtrl = (req,res,next) =>{
    singleUpload(req,res,(error)=>{
        if (error){
            return res.status(422).send({message: 'Image upload failed!'});
        }
        next();
    })
} */
const singleUpload = upload.single('image');

const singleUploadCtrl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
        return res.status(422).send({message: 'Image upload failed!'});
    }

    next();
  })
}

router.post('/',singleUploadCtrl, function (req, res, next) {
    try {
        if (!req.file) {
            throw new Error('Image is not presented!')}
            console.log(req.file)
        /* const file64 = dataUri(req.file);
        const uploadResult = await cloudinaryUpload(file64.content);
        const cImage = new CloudinaryImage({cloudinaryId: uploadResult.public_id, url: uploadResult.secure_url});

  --------------------------------------------------------------
        const data = req.body
        const result = await addEvent(data)
        res.json({ success: true, payload: result }) 
  -------------------------------------------------------------------      */
        res.json({ message: 'sent to the server' })
    } catch (error) {
        res.status(422).send({ message: error.message })
    }
})
/*--------------------------------------------------------------------------------------------------------------------*/


router.patch('/:id', async function (req, res) {
    const id = req.params.id
    const details = req.body
    const result = await updateEventById(id, details)
    res.json({
        success: true,
        payload: `Event with id ${result.id} has been updated.`
    })
})

router.delete('/:id', async function (req, res) {
    const eventId = req.params.id
    const eventTickets = await countAllTicketsAtEventId(eventId)
    if (eventTickets.count > 0) {
        await deleteTicketsByEventId(eventId)
    }

    const { id } = await deleteEventById(eventId)
    res.json({
        success: true,
        payload: `Event with id of ${id} has been deleted.`
    })
})

/* TICKETS ROUTES */

router.delete('/:id/tickets', async function (req, res) {
    const eventId = req.params.id
    await deleteTicketsByEventId(eventId)
    res.json({
        success: true
    })
})

module.exports = router
