const movieModel = require('../model/movieModel');
const fs = require('fs');
const addData = (req, res) => {
    return res.render('movieCrud/add');
}
const viewData = async (req, res) => {
    try {
        let all = await movieModel.find({})
        return res.render('movieCrud/view', {
            all
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const insertData = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        await movieModel.create({
            name: name,
            description: description,
            price: price,
            image: req.file?.path
        })
        console.log("Data added..!");
        return res.redirect('/movie');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deleteData = async (req, res) => {
    try {
        let single = await movieModel.findById(req.query.delId)
        fs.unlinkSync(single?.image);

        await movieModel.findByIdAndDelete(req.query.delId);
        return res.redirect('/movie');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const editData = async (req, res) => {
    try {
        let singleRow = await movieModel.findById(req.query.editId);

        return res.render('movieCrud/edit', {
            singleRow
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}
const updateData = async (req, res) => {
    try {
        const { editId, name, description, price } = req.body;
        if (req.file) {
            let singleRow = await movieModel.findById(editId);
            fs.unlinkSync(singleRow?.image);
            await movieModel.findByIdAndUpdate(editId, {
                name: name,
                description: description,
                price: price,
                image: req.file?.path
            })
            console.log("updated");
            return res.redirect('/movie');
        } else {
            await movieModel.findByIdAndUpdate(editId, {
                name: name,
                description: description,
                price: price
            })
            console.log("updated");
            return res.redirect('/movie');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    addData,
    viewData,
    insertData,
    deleteData,
    editData,
    updateData
}