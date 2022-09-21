export interface ILocalization {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface INotification{
  date: number;
  request: {
    content: {
      body: string;
      sound: string;
      title: string;
      data: {}
    };
  }
}