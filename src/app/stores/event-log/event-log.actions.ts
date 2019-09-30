export class GetEventLogTypes {
  static readonly type = '[Event Log App] Get Event Log Types';
}

export class Search {
  static readonly type = '[Event Log App] Search';
  constructor(
    public type: string,
    public timestamp: Date
  ) {}
}
