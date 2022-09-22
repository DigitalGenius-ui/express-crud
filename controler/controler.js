import data from '../data.js';

export const getProduct = (req, res) => {
    res.json({success : true, data : data});
}

export const addProduct = (req, res) => {
    const { fName } = req.body;
    if(!fName){
        res.status(400).send({success : false, errMsg :"Please provide a name"})
    }
    res.status(201).json({success : true, fName : fName});
}

export const updateProduct = (req,res) => {
    const { fName } = req.body;
    const { id } = req.params;

    const product = data.find((item) => item.id === +id);
    if(!product){
        res.status(400).send({success : false, errMsg :"The products ID are not matching"});
    }

    const newProduct = data.map((item) => {
        if(item.id === +id){
            item.fName = fName;
        }
        return item
    });

    res.status(200).send(newProduct);
}

export const deleteProduct =  (req,res) => {
    const { fName } = req.body;
    const { id } = req.params;

    const product = data.find((item) => item.id === +id);
    if(!product){
        res.status(400).send({success : false, errMsg :"The products ID are not matching"});
    }

    const newProduct = data.filter((item) => item.id !== +id);

    res.status(200).send(newProduct);
}