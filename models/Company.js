require('./User');
require('./Job');
module.exports = bookshelf.model('Company', {
	tableName: 'companies',
	hasTimestamps: ['createdAt', 'updatedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	job: function() {
		return this.hasMany('Job', 'companyId');
	}
});