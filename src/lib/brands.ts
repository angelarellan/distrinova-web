export interface Brand {
  name: string;
  /** Ruta a un logo en /public (opcional). Si no existe se muestra el nombre como wordmark. */
  logo?: string;
}

// TODO(cliente): reemplazar por las 3 marcas reales con las que trabaja Distrinova.
export const BRANDS: Brand[] = [{ name: "Marca 1" }, { name: "Marca 2" }, { name: "Marca 3" }];
