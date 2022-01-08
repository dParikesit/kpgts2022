
exports.up = function(knex) {
  return knex.schema
      .createTable('user', function (table) {
          table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
          table.string('email').unique().notNullable()
          table.string('password').notNullable()
          table.string('name')
          table.string('role').notNullable().defaultTo('user')
          table.timestamps(true,true)
      })
      .createTable('registration', function (table) {
          table.increments('id').primary()
          table.string('nama').notNullable()
          table.string('sekolah').notNullable()
          table.string('jurusan').notNullable()
          table.string('kontak').notNullable()
          table.string('fileURL')
          table.boolean('verified').defaultTo(false)
          table.uuid('user_id').references('id').inTable('user')
          table.timestamps(true, true)
      })
      .createTable('post', function (table) {
          table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
          table.string('title').notNullable()
          table.string('content').notNullable()
          table.string('picturePath')
          // table.uuid('user_id').references('id').inTable('user')
          table.string('name').notNullable()
          table.timestamps(true,true)
      })
      .createTable('sessions', function (table) {
          table.string('sid').primary()
          table.json('sess').notNullable()
          table.timestamp('expired').notNullable().index()
      })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('sessions')
      .dropTable('registration')
      .dropTable('post')
      .dropTable('user')
};
