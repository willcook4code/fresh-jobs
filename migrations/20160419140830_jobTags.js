exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobTags', function(t) {
  		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.integer('jobId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('jobs')
			.onDelete('CASCADE');
		t.integer('tagId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('tags')
			.onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobTags');
};