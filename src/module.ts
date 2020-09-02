import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { TablePanel } from './TablePanel';

export const plugin = new PanelPlugin<SimpleOptions>(TablePanel).setPanelOptions(builder => {
  return builder
    .addTextInput({
      path: 'apiHost',
      name: 'Host Name',
      description: 'Please mention host name like eg : https://infraportal-hub.copart.com/',
      defaultValue: 'https://infraportal-hub.copart.com/',
    })
    .addTextInput({
      path: 'apiPath',
      name: 'API Path For Get Alerts',
      description: 'Please mention api path  like eg : api/v1/noc/alert_id/',
      defaultValue: 'api/v1/noc/alert_id/?format=json',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: config => config.showSeriesCount,
    });
});
