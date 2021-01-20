import { format } from "date-fns";
import { nb } from "date-fns/locale";

export function formatterDato(dato: string) {
  try {
    return format(new Date(dato), "PPP", { locale: nb });
  } catch (e) {
    return "Ugyldig dato: " + dato;
  }
}
