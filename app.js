import  express  from "express";
import platillosRoutes from './src/routes/platillos.routes';


//construimos y exportame app
const app = express();
export default app;

//importamos esto para que podamos vizualizar objetos json
app.use(express.json());


//  #####   ##   ##   ######   #####    ######
// ##   ##  ##   ##     ##    ##   ##  ##
// ## ###   ##   ##     ##    ## ####   #####
// ##   ##  ##   ##     ##    ##   ##       ##
// ##   ##   #####      ##    ##   ##  ######


//Ruta main
app.get("/",(req,res)=> {
    res.send('Fit App by chuy/ninis');
});

//Ruta para platillos
app.use('/platillos', platillosRoutes);