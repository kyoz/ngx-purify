import { EventLog, EventLogType } from '../../../shared/models/event-log.model';

const today = new Date();

export const EVENT_LOG_TYPES: EventLogType[] = [
  { value: 'create', display: 'Create' },
  { value: 'update', display: 'Update' },
  { value: 'delete', display: 'Delete' }
];

export const EVENT_LOGS: EventLog[] = [
  { id: 1, timestamp: today, type: 'create', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, timestamp: today, type: 'update', description: 'Vestibulum vulputate ligula ut nibh ullamcorper, sit amet tristique ex faucibus.' },
  { id: 3, timestamp: today, type: 'create', description: 'Praesent porta ante vulputate magna egestas fermentum.' },
  { id: 4, timestamp: today, type: 'delete', description: 'Nulla eu risus ut justo rutrum tristique vitae at nunc.' },
  { id: 5, timestamp: today, type: 'create', description: 'Aenean aliquam eros nec urna hendrerit, ac feugiat metus imperdiet.' },
  { id: 6, timestamp: today, type: 'create', description: 'Sed varius velit nec erat euismod porttitor.' },
  { id: 7, timestamp: today, type: 'delete', description: 'Integer hendrerit arcu non metus aliquet mollis vel ut neque.' },
  { id: 8, timestamp: today, type: 'update', description: 'In ac odio malesuada, accumsan lectus ut, ultrices ligula.' },
  { id: 9, timestamp: today, type: 'create', description: 'Donec laoreet mauris nec mi fermentum pulvinar.' },
  { id: 10, timestamp: today, type: 'create', description: 'Aenean feugiat leo sed leo faucibus, sit amet sollicitudin magna volutpat.' },
  { id: 11, timestamp: today, type: 'update', description: 'Proin eget metus sit amet dolor scelerisque dignissim sed id eros.' },
  { id: 12, timestamp: today, type: 'delete', description: 'Ut tempor orci eget tortor sollicitudin iaculis.' },
  { id: 13, timestamp: today, type: 'delete', description: 'Ut sit amet odio ut libero consequat consectetur.' },
  { id: 14, timestamp: today, type: 'update', description: 'Donec a dolor sit amet sem lacinia blandit.' },
  { id: 15, timestamp: today, type: 'create', description: 'Suspendisse molestie sem vitae dapibus consequat.' }
];
