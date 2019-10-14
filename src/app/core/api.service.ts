import { Injectable } from '@angular/core';
import uuidv4 from 'uuid/v4';

import { Todo } from '../interface/todo';
import { SensorData } from '../interface/sensor-data';
import { DeviceData } from '../interface/device-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getTodos(): Todo[] {
    return [
      { uuid: uuidv4(), title: 'todo1', isDone: false },
      { uuid: uuidv4(), title: 'todo2', isDone: true },
      { uuid: uuidv4(), title: 'todo3', isDone: false },
      { uuid: uuidv4(), title: 'todo4', isDone: false },
    ];
  }

  getSensorDataList(): SensorData[] {
    return [
      {
        name: 'MachineAA',
        sensorAA: 11,
        sensorBB: 22,
        sensorCC: 33,
        sensorDD: 44
      },
      {
        name: 'MachineBB',
        sensorAA: 11,
        sensorBB: 22,
        sensorCC: 33,
        sensorDD: 44
      },
      {
        name: 'MachineCC',
        sensorAA: 11,
        sensorBB: 22,
        sensorCC: 33,
        sensorDD: 44
      },
      {
        name: 'MachineDD',
        sensorAA: 11,
        sensorBB: 22,
        sensorCC: 33,
        sensorDD: 44
      },
    ];
  }

  getDeviceDataList(): DeviceData[] {
    return [
      {
        name: 'device00',
        ip: '192.168.0.1',
        model: 'model00',
        comment: 'test device'
      },
      {
        name: 'device11',
        ip: '192.168.0.1',
        model: 'model00',
        comment: 'test device'
      },
      {
        name: 'device22',
        ip: '192.168.0.1',
        model: 'model00',
        comment: 'test device'
      },
      {
        name: 'device33',
        ip: '192.168.0.1',
        model: 'model00',
        comment: 'test device'
      },
      {
        name: 'device44',
        ip: '192.168.0.1',
        model: 'model00',
        comment: 'test device'
      },
    ];
  }

  updateItem(id: number) {
    console.log('--- update id: ', id);
  }
}
