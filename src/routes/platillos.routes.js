//importmaos esto para podres crear la rutas
import { Router } from "express";
const router = Router();
export default router;

//importamos esto para acceder a los metodos del controlador
import * as platillosCTRL from '../controllers/platillos.controller';

//ruta para traertodos los platillos
router.get('/',platillosCTRL.getPlatillos );
//ruta para crear platillo
router.post('/',platillosCTRL.createPlatillo );
//ruta para obtener un platillo por id
router.get('/:platilloId',platillosCTRL.getPlatillo );
//ruta para actualizar latillo con su id
router.put('/:platilloId', platillosCTRL.updatePlatillo);
//ruta para eliminar platillo
router.delete('/:platilloId',platillosCTRL.deletePlatillo );




