export const formatPrice = (value: number): string => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});