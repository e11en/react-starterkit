// tslint:disable-next-line:no-any
export function isInArray(value: any, array: any[]) {
  return array.indexOf(value) > -1;
}

// tslint:disable-next-line:no-any
export function isNotInArray(value: any, array: any[]) {
  return array.indexOf(value) === -1;
}