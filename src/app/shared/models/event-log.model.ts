export interface EventLogType {
  value: string;
  display: string;
}

export interface EventLog {
  id: number;
  timestamp: number;
  type: string;
  description: string;
}
