import * as ClubsRepository from "../repositories/clubs-repositoriy";
import * as HttpResponse from "../utils/http.helper";

export const getClubService = async () => {
  const data = await ClubsRepository.findAllClubs();

  const response = HttpResponse.ok(data);

  return response;
};
