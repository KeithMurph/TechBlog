const User = require('./User');
const posts= require('./posts');

User.hasMany(posts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

posts.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, posts };