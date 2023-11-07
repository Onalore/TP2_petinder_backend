import Adoptante from "./adoptante.js";
import Refugio from "./refugio.js";
import Mascota from "./mascota.js";

Adoptante.belongsToMany(Mascota, { through: "AdoptantesMascotas" });
Mascota.belongsToMany(Adoptante, { through: "AdoptantesMascotas" });

Refugio.hasMany(Mascota);
Mascota.belongsTo(Refugio);

export { Adoptante, Refugio, Mascota };
