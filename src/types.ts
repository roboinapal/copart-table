type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  apiHost:string;
  apiPath:string;

  tableHeaders:string ;

  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
}
