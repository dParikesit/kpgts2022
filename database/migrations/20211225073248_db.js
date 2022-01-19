
exports.up = function(knex) {
  return knex.schema
      .createTable('user', function (table) {
          table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'))
          table.string('email').unique().notNullable()
          table.string('password').notNullable()
          table.string('name')
          table.string('role').notNullable().defaultTo('user')
          table.boolean('registered').defaultTo(false)
          table.timestamps(true,true)
      })
      .createTable('reset', function (table) {
        table.string('token').notNullable()
        table.uuid('user_id').references('id').inTable('user')
        table.timestamps(true, true)
      })
      .createTable('registration', function (table) {
          table.increments('id').primary()
          table.string('nama').notNullable()
          table.string('paguyuban').notNullable()
          table.string('sekolah').notNullable()
          table.string('kota').notNullable()
          table.string('provinsi').notNullable()
          table.string('kelas').notNullable()
          table.string('email').notNullable()
          table.string('nohp').notNullable()
          table.string('rumpun').notNullable()
          table.string('tanggal').notNullable()
          table.string('sesi').notNullable()
          table.string('fakultas').notNullable()
          table.string('univ').notNullable()
          table.string('follow').notNullable()
          table.string('namarek').notNullable()
          table.string('jenisrek').notNullable()
          table.string('tujuanrek').notNullable()
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
      .dropTable('reset')
      .dropTable('post')
      .dropTable('user')
};
