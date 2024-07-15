import { PlayerModel } from "../models/players-model";
import * as PlayersRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http.helper";

export const getPlayerService = async () => {
  const data = await PlayersRepository.findAllPlayers();

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayersRepository.findPlayerById(id);

  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await PlayersRepository.insertPlayer(player);

    response = HttpResponse.created();
  } else {
    response = HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;

  await PlayersRepository.deleteOnePlayer(id);

  response = HttpResponse.ok({ message: "deleted" });

  return response;
};
