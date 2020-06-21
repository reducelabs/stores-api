import { Request, Response } from 'express';
import knex from '../database/connection';

export default class StoresController {
  async index(request: Request, response: Response) {}

  async show(request: Request, response: Response) {}

  async create(request: Request, response: Response) {
    const { id } = request.params;
    const {
      name,
      email,
      textMessage,
      cep,
      uf,
      city,
      neighborhood,
      publicplace,
      number,
      complement,
    } = request.body;

    const message = {
      message: textMessage,
      store_id: id,
      client_id: idClient,
    };
    const trx = await knex.transaction();
    const [idInserted] = await trx('messages').insert(message);
    await trx.commit();
    return response.json(idInserted);
  }

  async update(request: Request, response: Response) {}

  async delete(request: Request, response: Response) {}
}
