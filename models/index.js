const User = require("./User");
const Post = require("./post");
const Comment = require("./Comment")


User.hasMany(Post,{
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
});
Post.belongsTo(User);


User.hasMany(Comment,{
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
});
Comment.belongsTo(User);

Post.hasMany(Comment,{
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
});
Comment.belongsTo(Post);



module.exports = {
    User,
    Post,
    Comment
   
}