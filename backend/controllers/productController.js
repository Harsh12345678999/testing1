const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorhandler")
const catchAsyncError = require("../middleware/catchAsyncError")
const ApiFeature = require("../utils/apifeature")

//createProduct
exports.createProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        success: true,
        product
    })
})

//getAllProduct
exports.getAllProduct = catchAsyncError(async (req, res, next) => {
    const resultPerPage = 10    
    const apifeature = new ApiFeature(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage)
    const countProduct = await Product.countDocuments()
    const product = await apifeature.query
    res.status(201).json({
        success: true,
        countProduct,
        product
    })
})

//defaultProduct
exports.defaultProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }
    res.status(201).json({
        success: true,
        product
    })
})

//updateProduct
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(201).json({
        success: true,
        product
    })
})

//deleteProduct
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return next(new ErrorHandler("Product not found", 404))
    }
    await product.deleteOne()
    res.status(201).json({
        success: true,
        message: "Product Delete Successfully"
    })
})