import ModbusRTU from 'modbus-serial';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import { app } from '../../server/src/index';

const server = http.createServer(app);
export const socketServer = new SocketIOServer(server);

// IP-адреса ваших датчиков
const tempSensorIP = '192.168.1.10';
const humidSensorIP = '192.168.1.11';

// Создаем клиент для каждого датчика
const tempSensor = new ModbusRTU();
const humidSensor = new ModbusRTU();

// Функция для подключения к датчикам
export async function sensorsToConnect(): Promise<Response> {
  try {
    await tempSensor.connectTCP(tempSensorIP, { port: 502 });
    await humidSensor.connectTCP(humidSensorIP, { port: 502 });
    return Response.json(
      { message: 'Connection to sensors successful' },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: `Connection error with sensors: ${error}` },
      { status: 503 }
    );
  }
}

// Функция для опроса датчиков
export async function sensorsPolling(): Promise<void> {
  setInterval(async () => {
    try {
      // Читаем 10 регистров с датчика 1
      const tempData = await tempSensor.readHoldingRegisters(0, 10);
      // Читаем 10 регистров с датчика 2
      const humidData = await humidSensor.readHoldingRegisters(0, 10);

      // Сохранение в БД

      // Отправляем данные клиентам через WebSocket
      socketServer.emit('sensorsData', {
        tempData: tempData.data,
        humidData: humidData.data,
      });
    } catch (error) {
      return Response.json(
        { message: `Error reading data from the sensor: ${error}` },
        { status: 503 }
      );
    }
  }, 2000); // Опрос каждые 2000 мс (2 секунда)
}
