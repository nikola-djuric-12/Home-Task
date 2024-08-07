import {
  DeterminationType,
  SeverityType,
  SourceType,
} from "@type/investigations";
import AwsLogo from "@assets/aws-logo.svg";
import AzureLogo from "@assets/azure-logo.svg";
import CrowdstrikeLogo from "@assets/crowdstrike-logo.svg";
import SentinelOneLogo from "@assets/sentinel-logo.svg";
import OktaLogo from "@assets/okta-logo.svg";

export const SourceIcon: Record<SourceType, string> = {
  [SourceType.AWS]: AwsLogo,
  [SourceType.Azure]: AzureLogo,
  [SourceType.Crowdstrike]: CrowdstrikeLogo,
  [SourceType.SentinelOne]: SentinelOneLogo,
  [SourceType.Okta]: OktaLogo,
};

export const SeverityBackground: Record<SeverityType, string> = {
  [SeverityType.Low]: "bg-green-200",
  [SeverityType.Medium]: "bg-yellow-200",
  [SeverityType.High]: "bg-orange-200",
  [SeverityType.Critical]: "bg-red-200",
};

export const DeterminationBackground: Record<DeterminationType, string> = {
  [DeterminationType.TruePositive]: "bg-green-300",
  [DeterminationType.FalsePositive]: "bg-red-300",
  [DeterminationType.InProgress]: "bg-yellow-300",
  [DeterminationType.Closed]: "bg-gray-300",
};

export const maxPages = 5;
