const Mobile = require('../models/mobiledata');

// Controller for rendering the mobile list page
exports.mobile = async (req, res) => {
    const locals = {
        title: "The Wings",
        description: "Best mobiles"
    };
    try {
        // Fetch all mobile entries from the database
        const mobiles = await Mobile.find();
        // Render the mobile page with locals and the fetched mobiles data
        res.render('mobile/mobile', {
            locals,
            mobiles,
            layout: '../views/layouts/mobile'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching mobile data');
    }
};
// Controller for rendering mobile details page
exports.mobiledetails = async (req, res) => {
    console.log("mobile details page loaded");
    try {
        const mobile = await Mobile.findById(req.params.id);
        if (!mobile) {
            return res.status(404).send('Mobile not found');
        }
        console.log(mobile.image);
        
        res.render('mobile/mobileDetailPage', { mobile,
            layout:'../views/layouts/mobileDetailPage'
         });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Controller for updating mobile details
exports.mobileUpdatedetails = async (req, res) => {
    try {
        // Use the request body directly for updates
        const updates = req.body;

        // Update the mobile document and return the updated document
        const updatedMobile = await Mobile.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        );

        // Check if the mobile was found and updated
        if (!updatedMobile) {
            return res.status(404).send("Mobile not found");
        }

        // Redirect to the /mobile route after a successful update
        res.redirect('/mobile');
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

// Placeholder for adding a new mobile
exports.addMobile = async (req, res) => {
    // Check if an image was uploaded
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    const { brand, modelname, price, warranty, batterhealth, anymoredeatils } = req.body;
    const imagePath = req.file.path; // Get the path of the uploaded image

    try {
        // Create a new mobile entry in the database
        const newMobile = new Mobile({
            brand,
            modelname,
            price,
            warranty,
            batterhealth,
            anymoredeatils,
            image: imagePath // Save the image path
        });

        await newMobile.save(); // Save the new mobile to the database

        // Redirect or respond with a success message
        res.redirect('/mobile'); // Redirect to the mobile list page
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding mobile');
    }
};
exports.addMobileView = async(req,res) => {
    res.render('mobile/add-mobile',{
        layout: '../views/layouts/mobile'
    });
}