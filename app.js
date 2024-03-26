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

/* 
d88888b d8888b. d88888b  .d8b.  db   dD      d8888b. d88888b db    db d88888b db       .d88b.  d8888b. .88b  d88. d88888b d8b   db d888888b 
88'     88  `8D 88'     d8' `8b 88 ,8P'      88  `8D 88'     88    88 88'     88      .8P  Y8. 88  `8D 88'YbdP`88 88'     888o  88 `~~88~~' 
88ooo   88oobY' 88ooooo 88ooo88 88,8P        88   88 88ooooo Y8    8P 88ooooo 88      88    88 88oodD' 88  88  88 88ooooo 88V8o 88    88    
88~~~   88`8b   88~~~~~ 88~~~88 88`8b        88   88 88~~~~~ `8b  d8' 88~~~~~ 88      88    88 88~~~   88  88  88 88~~~~~ 88 V8o88    88    
88      88 `88. 88.     88   88 88 `88.      88  .8D 88.      `8bd8'  88.     88booo. `8b  d8' 88      88  88  88 88.     88  V888    88    
YP      88   YD Y88888P YP   YP YP   YD      Y8888D' Y88888P    YP    Y88888P Y88888P  `Y88P'  88      YP  YP  YP Y88888P VP   V8P    YP    
*/