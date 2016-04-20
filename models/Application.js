require('./User');
module.exports = bookshelf.model('Application', {
	tableName: 'applications',
	hasTimestamps: ['createdAt', 'updatedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});