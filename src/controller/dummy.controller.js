exports.dummyFunc = (req,res) => {
    return res.send({MSG: 'dummy return',data: global.newData})
}

exports.dummyPostFunc = (req,res) => {
    req.body.id = global.newData.length + 1
    global.newData.push(req.body)
    return res.send({msg: 'dummy post return', data: req.body})
}

exports.dummyPatchFunc = (req,res) => {
    try {
        // throw new Error('VDSHDFFWYTWHWQ')
        // console.log("req.body---",req.body)
        
        const todoData = global.newData.find(data => data.id == req.params.id)
        
        const selecTedIndex = global.newData.findIndex((data) => data.id == req.params.id)
        console.log("global.newData---",global.newData[selecTedIndex])
        console.log("selecTedIndex",selecTedIndex)
        
        if (selecTedIndex !== -1)
        global.newData[selecTedIndex] = { id: req.params.id, data : req.body.data}
        
        return res.send({msg: 'dummy patch data return', data: req.body, params: req.params, query: req.query})
    }
    catch (error) {
        console.log('error "" "" "" "" ', error);
        return res.status(200).send({ms: 'hello :: :: :: :: ',error })
    }
}

exports.dummyDeleteFunc = (req,res) => {
    const todoData = global.newData.find(data => data.id == req.params.id)
    console.log('todoData :: :: :::: ::',todoData)
    if(global.newData.find(data => data.id == req.params.id)) {
        global.newData = global.newData.filter(data => data.id != req.params.id)
        return res.send({ msg: 'Successfully Deleted'})
    } else {
        return res.send({message:'Data Nathi!!'})
    } 
}

