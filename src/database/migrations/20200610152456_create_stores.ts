import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('stores', (table) => {
    table.increments('id_clustered').primary();
    table.uuid('id').unique().notNullable();
    table.uuid('user_id').unique().notNullable();
    table.string('image_url');
    table.string('cnpj');
    table.string('name').notNullable();
    table.uuid('company_name').notNullable();
    table.string('email');
    table.string('phone_number');
    table.string('city');
    table.string('uf', 2);
    table.decimal('latitude');
    table.decimal('longitude');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.boolean('removed').defaultTo(false).notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('stores');
}
