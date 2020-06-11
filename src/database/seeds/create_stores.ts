import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('stores')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('stores').insert([
        {
          name: 'Quero Mais Presentes',
          email: 'queromaispresentes@gmail.com',
          image_url: 'imagem',
          whatsapp: '6199530143',
          city: 'Brasília',
          uf: 'DF',
          latitude: -15.8196051,
          longitude: -48.0858906,
        },
      ]);
    });
}
