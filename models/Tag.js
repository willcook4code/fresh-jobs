module.exports = bookshelf.model('Tag', {
	tableName: 'tags',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});