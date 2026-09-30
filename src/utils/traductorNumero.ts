export function numeroALetras(num: number): string {
  if (isNaN(num)) {
    return 'Por favor, ingrese un número válido.';
  }

  if (!Number.isInteger(num)) {
    return 'Por favor, ingrese un número entero (sin decimales).';
  }

  if (num < 1 || num > 1000) {
    return 'El número debe estar en el rango de 1 a 1000.';
  }

  if (num === 1000) return 'mil';
  if (num === 100) return 'cien';

  const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  let resultado = '';

  const c = Math.floor(num / 100);
  const restoC = num % 100;

  if (c > 0) {
    resultado += centenas[c];
  }

  if (restoC === 0) {
    return resultado.trim();
  }

  if (resultado !== '') {
    resultado += ' ';
  }

  if (restoC < 10) {
    resultado += unidades[restoC];
  } else if (restoC >= 10 && restoC < 20) {
    resultado += especiales[restoC - 10];
  } else if (restoC >= 20 && restoC < 30) {
    if (restoC === 20) {
      resultado += 'veinte';
    } else {
      const u20 = restoC % 10;
      const veinti = ['', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
      resultado += veinti[u20];
    }
  } else {
    const d = Math.floor(restoC / 10);
    const u = restoC % 10;
    if (u === 0) {
      resultado += decenas[d];
    } else {
      resultado += decenas[d] + ' y ' + unidades[u];
    }
  }

  return resultado.trim();
}
