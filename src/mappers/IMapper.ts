export interface IUniversalMapper<T> {
  mapFromCSV(data: string[]): T;
  mapFromJSON(data: { [key: string]: string }): T;
  mapFromXML(data: { [key: string]: string }): T;
}