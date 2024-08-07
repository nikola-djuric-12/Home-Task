export interface GetInvestigationsProps {
  source?: SourceType;
  severity?: SeverityType;
  determination?: DeterminationType;
  page: number;
  id?: number;
}

export interface Investigation {
  id: number;
  title: string;
  source: SourceType;
  alertFiredTimestamp: string;
  lastUpdatedTimestamp: string;
  severity: SeverityType;
  analystAssigned: string;
  determination: DeterminationType;
  readyForReview: ReadyForReviewType;
}

export enum DeterminationType {
  TruePositive = "True positive",
  FalsePositive = "False positive",
  InProgress = "In progress",
  Closed = "Closed",
}

export enum SeverityType {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Critical = "Critical",
}

export enum SourceType {
  AWS = "AWS",
  Azure = "Azure",
  Crowdstrike = "Crowdstrike",
  SentinelOne = "SentinelOne",
  Okta = "Okta",
}

export enum ReadyForReviewType {
  Yes = "Yes",
  No = "No",
}

export enum SortType {
  NameAsc = "Name Asc",
  NameDesc = "Name Desc",
  AlertFiredAsc = "Alert Fired Asc",
  AlertFiredDesc = "Alert Fired Desc",
  LastUpdatedAsc = "Last Updated Asc",
  LastUpdatedDesc = "Last Updated Desc",
}
