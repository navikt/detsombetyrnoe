import { format } from "date-fns";
import { nb } from "date-fns/locale";

export function formatterDato(dato: string) {
  return format(new Date(dato), "PP", { locale: nb });
}
