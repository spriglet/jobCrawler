
let connection = require('./connection')
const sequelize = connection.sequelize
const Sequelize = connection.Sequelize;
const Application = sequelize.define('application' +
  '',{
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  website: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(2000)
    // allowNull defaults to true
  },email:{
    type:Sequelize.STRING,unique:true
  },
  date_of_application:{
    type: Sequelize.DATE
  },
  feedback:{
    type: Sequelize.STRING
  },
  industry:{
    type: Sequelize.STRING
  },
  interview_received:{
    type:Sequelize.BOOLEAN, default:false
  },
  responded:{
    type:Sequelize.BOOLEAN, default:false
  },
  rejection_reason:{
    type: Sequelize.STRING
  }

}, {
  sequelize,
  // options
});

// Note: using `force: true` will drop the table if it already exists
Application.sync({ force: false }).then(() => {
  Application.findAll().then(users => {
    if(users.length===0){

    }
  });

});




module.exports = Application;