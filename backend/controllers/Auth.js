

const CLIENT_URL = `${process.env.REACT_APP_FRONTEND_URL}`;


exports.google_auth = async (req, res) => {
    try {
        res.redirect('/');
    } catch (error) {
        (error, "error real");
        return res.status(400).json({ msg: "Bad Request" })
    }
}

exports.google_auth_callback = async (req, res) => {
    try {
        // res.redirect(CLIENT_URL);
    } catch (error) {
        // // console.log(error);
        return res.status(400).json({ msg: "Bad Request" })
    }
}

