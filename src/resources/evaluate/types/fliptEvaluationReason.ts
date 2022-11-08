/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface fliptEvaluationReason<
  RawValue extends fliptEvaluationReason.RawValue = fliptEvaluationReason.RawValue
> {
  value: RawValue;
  visit: <Result>(visitor: fliptEvaluationReason._Visitor<Result>) => Result;
}

const _UnknownEvaluationReason: fliptEvaluationReason<"UNKNOWN_EVALUATION_REASON"> = {
  value: "UNKNOWN_EVALUATION_REASON",
  visit: (visitor) => visitor.unknownEvaluationReason(),
};
const _FlagDisabledEvaluationReason: fliptEvaluationReason<"FLAG_DISABLED_EVALUATION_REASON"> = {
  value: "FLAG_DISABLED_EVALUATION_REASON",
  visit: (visitor) => visitor.flagDisabledEvaluationReason(),
};
const _FlagNotFoundEvaluationReason: fliptEvaluationReason<"FLAG_NOT_FOUND_EVALUATION_REASON"> = {
  value: "FLAG_NOT_FOUND_EVALUATION_REASON",
  visit: (visitor) => visitor.flagNotFoundEvaluationReason(),
};
const _MatchEvaluationReason: fliptEvaluationReason<"MATCH_EVALUATION_REASON"> = {
  value: "MATCH_EVALUATION_REASON",
  visit: (visitor) => visitor.matchEvaluationReason(),
};
const _ErrorEvaluationReason: fliptEvaluationReason<"ERROR_EVALUATION_REASON"> = {
  value: "ERROR_EVALUATION_REASON",
  visit: (visitor) => visitor.errorEvaluationReason(),
};
export const fliptEvaluationReason = {
  UnknownEvaluationReason: _UnknownEvaluationReason,
  FlagDisabledEvaluationReason: _FlagDisabledEvaluationReason,
  FlagNotFoundEvaluationReason: _FlagNotFoundEvaluationReason,
  MatchEvaluationReason: _MatchEvaluationReason,
  ErrorEvaluationReason: _ErrorEvaluationReason,
  _parse: (value: string): fliptEvaluationReason => {
    switch (value) {
      case "UNKNOWN_EVALUATION_REASON": {
        return _UnknownEvaluationReason;
      }
      case "FLAG_DISABLED_EVALUATION_REASON": {
        return _FlagDisabledEvaluationReason;
      }
      case "FLAG_NOT_FOUND_EVALUATION_REASON": {
        return _FlagNotFoundEvaluationReason;
      }
      case "MATCH_EVALUATION_REASON": {
        return _MatchEvaluationReason;
      }
      case "ERROR_EVALUATION_REASON": {
        return _ErrorEvaluationReason;
      }
      default: {
        return {
          value: value as fliptEvaluationReason.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace fliptEvaluationReason {
  type RawValue =
    | "UNKNOWN_EVALUATION_REASON"
    | "FLAG_DISABLED_EVALUATION_REASON"
    | "FLAG_NOT_FOUND_EVALUATION_REASON"
    | "MATCH_EVALUATION_REASON"
    | "ERROR_EVALUATION_REASON";

  interface _Visitor<Result> {
    unknownEvaluationReason: () => Result;
    flagDisabledEvaluationReason: () => Result;
    flagNotFoundEvaluationReason: () => Result;
    matchEvaluationReason: () => Result;
    errorEvaluationReason: () => Result;
    _other: (value: string) => Result;
  }
}
