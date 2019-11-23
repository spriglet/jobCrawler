
let Application = require('./applications');


function Application_Controller(){

  this.showAll = function(req,res){
    // List all records in ToDoList
    let data = req.body;
    console.log('Show All Companies');
    Application.findAll({
      attributes: ["id", "name","description","website",
                    "email","date_of_application",
                    "feedback","industry",
                    "interview_received"],
      order: [
        ['id', 'ASC'],
      ]
    }).then(toDoList => {
      res.end(JSON.stringify(toDoList));
    });

  };

  this.create = function (req, res) {
    let record  = req.body;
    // Create a new record
    Application.create(record).then(record => {
      res.end(JSON.stringify({"id": record.id}));

    });

  };
  this.update = function (req, res) {
    let id = req.params.id
    let data = req.body;
    console.log(data);
    Application.update(data, {
      where: {
        id: id
      }
    }).then(() => {

    }).catch(function(err) {
      // print the error details
      console.log(err, request.body.email);
    });
    res.end();
  }
  this.delete = function(req,res){
    let id = req.params.id;
    Application.destroy({
      where: {
        id:id
      }
    }).then(() => {
      res.end(JSON.stringify({"record_id": id}));
    });;

  }

}


module.exports = new  Application_Controller();