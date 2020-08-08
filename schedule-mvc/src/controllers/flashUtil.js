exports.flashAndBack = (req, res, field, message) => {
    req.flash(field, message)
    req.session.save(() => res.redirect('back'))
}