require('./User');
require('./Company');
module.exports = bookshelf.model('Job', {
	tableName: 'jobs',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	company: function() {
		return this.belongsTo('Company', 'companyId');
	}
});