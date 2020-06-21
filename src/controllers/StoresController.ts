import { Request, Response } from 'express';
import knex from '../database/connection';
import { v4 as uuid } from 'uuid';
import identity from '../services/identity';

export default class StoresController {
  async index(request: Request, response: Response) {
    const stores = await knex('stores');
    return response.json(stores);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const store = await knex('stores').where('id', id).first();

    if (!store) {
      return response
        .status(400)
        .json({ message: `Store whit id ${id} not found` });
    }

    return response.json({ store });
  }

  async create(request: Request, response: Response) {
    const { name, email, phone, password, store } = request.body;
    const user = {
      name,
      email,
      phone_number: phone,
      password,
    };
    try {
      const responseUser = await identity.post('/users', user);

      const newStoreId = store.id ? store.id : uuid();
      const newStore = {
        id: newStoreId,
        user_id: responseUser.data.id,
        phone_number: phone,
        email: email,
        cnpj: store.cnpj,
        name: store.name,
        company_name: store.company_name,
      };
      const trx = await knex.transaction();
      await trx('stores').insert(newStore);
      await trx.commit();
      return response.json({ id: newStoreId });
    } catch (error) {
      console.log(error);
    }
  }

  async update(request: Request, response: Response) {}

  async delete(request: Request, response: Response) {}
}
