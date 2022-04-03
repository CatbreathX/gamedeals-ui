import { server } from 'mocks/api/server';

export const observeRequestStart = (requestCollector) => {
  server.events.on('request:start', (request) => {
    requestCollector.push(request);
  });
};

export const removeAllListeners = () => {
  server.events.removeAllListeners();
};
