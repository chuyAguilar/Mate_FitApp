import Platillo from "../models/Platillo";

export const getPlatillos = async (req, res) => {
  try {
    const platillos = await Platillo.find();
    res.status(201).json(platillos);
  } catch (error) {
    res.status(500).json(platillos);
  }
};

export const getPlatillo = async (req, res) => {
  try {
    const id = req.params.platilloId; // Obtener el ID de la URL
    const platillo = await Platillo.findById(id); // Usar Platillo en lugar de platillo
    if (!platillo) {
      return res.status(404).json({ message: "platillo not found" });
    }
    res.status(200).json(platillo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPlatillo = async (req, res) => {
  try {
    const { nombre, cantidad, ingredientes, pasos, imgURL } = req.body;
    const newPlatillo = new Platillo({
      nombre,
      cantidad,
      ingredientes,
      pasos,
      imgURL,
    });
    const platilloSave = await newPlatillo.save();

    res.status(201).json(platilloSave);
  } catch (error) {
    res.status(500).json(platilloSave);
  }
  console.log(req.body);
};

export const updatePlatillo = async (req, res) => {
  try {
    const platilloId = req.params.platilloId;
    const { nombre, cantidad, ingredientes, pasos, imgURL } = req.body;

    const updatedplatillo = await Platillo.findByIdAndUpdate(
      platilloId,
      { nombre, cantidad, ingredientes, pasos, imgURL },
      { new: true }
    );

    if (!updatedplatillo) {
      return res.status(404).json({ message: "platillo not found" });
    }

    res.status(200).json(updatedplatillo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePlatillo = async (req, res) => {

    try {
        const platilloId = req.params.platilloId;
        
        const deletedplatillo = await Platillo.findByIdAndDelete(platilloId);
        
        if (!deletedplatillo) {
          return res.status(404).json({ message: 'platillo not found' });
        }
        
        res.status(200).json({ message: 'platillo deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
