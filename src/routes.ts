import { Router } from "express";
import * as PlayersController from "./controllers/players-controller";
import * as ClubController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", PlayersController.getPlayer);
router.get("/players/:id", PlayersController.getPlayerById);
router.post("/players", PlayersController.postPlayer);
router.delete("/players/:id", PlayersController.deletePlayer);
router.patch("/players/:id", PlayersController.updatePlayer);

router.get("/clubs", ClubController.getClubs);

export default router;
