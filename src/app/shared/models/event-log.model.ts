export interface EventLogType {
  value: string;
  display: string;
}

export interface EventLog {
  id: number;
  timestamp: Date;
  type: string;
  description: string;
}
