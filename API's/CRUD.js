const todos=[]
const postapi=(req,res)=>{
      todos.push(req.body)
      console.log(req.body)
      res.end("data Added")
}

const getapi = (req, res) => {
    res.end(JSON.stringify(todos))
}

const putapi = (req, res) => {
    let id = +req.params.id
    let index = 0
    todos.forEach((ele, i) => {
        if (ele.id === id) {
            index = i;
        }
    })
    todos[index]=req.body;
    res.send(todos)
}

const deleteapi = (req, res) => {
    let id=+req.params.id
    let index=0
    todos.forEach((ele,i)=>{
        if(ele.id===id){
            index=i;
        }
    })
    todos.splice(index,1)
    res.send(todos)

}
module.exports =  { postapi,getapi,putapi,deleteapi }