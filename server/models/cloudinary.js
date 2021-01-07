const { cloudinary } = require('../config/cloudinary')

async function getCloudinaryUrl(banner) {
    const fileStr = banner
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'event_setups'
    })

    // if image already exists (search by image ID), get the URL of that image

    return uploadedResponse.url
}

module.exports = {
    getCloudinaryUrl
}
