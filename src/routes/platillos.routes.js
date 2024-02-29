//importmaos esto para podres crear la rutas
import { Router } from "express";
const router = Router();
export default router;

//importamos esto para acceder a los metodos del controlador
import * as platillosCTRL from '../controllers/platillos.controller';

//ruta para traertodos los platillos
router.get('/',platillosCTRL.getProducts );
//ruta para crear platillo
router.post('/',platillosCTRL.createProducts );
//ruta para obtener un platillo por id
router.get('/:platilloId',platillosCTRL.getProduct );
//ruta para actualizar latillo con su id
router.put('/:platilloId',platillosCTRL.updateProduct );
//ruta para eliminar platillo
router.delete('/:platilloId',platillosCTRL.deleteProduct );




