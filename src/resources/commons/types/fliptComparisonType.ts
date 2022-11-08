/**
 * This file auto-generated by Fern from our API Definition.
 */

/**
 * The default is UNKNOWN_COMPARISON_TYPE
 */
export interface fliptComparisonType<RawValue extends fliptComparisonType.RawValue = fliptComparisonType.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: fliptComparisonType._Visitor<Result>) => Result;
}

const _UnknownComparisonType: fliptComparisonType<"UNKNOWN_COMPARISON_TYPE"> = {
  value: "UNKNOWN_COMPARISON_TYPE",
  visit: (visitor) => visitor.unknownComparisonType(),
};
const _StringComparisonType: fliptComparisonType<"STRING_COMPARISON_TYPE"> = {
  value: "STRING_COMPARISON_TYPE",
  visit: (visitor) => visitor.stringComparisonType(),
};
const _NumberComparisonType: fliptComparisonType<"NUMBER_COMPARISON_TYPE"> = {
  value: "NUMBER_COMPARISON_TYPE",
  visit: (visitor) => visitor.numberComparisonType(),
};
const _BooleanComparisonType: fliptComparisonType<"BOOLEAN_COMPARISON_TYPE"> = {
  value: "BOOLEAN_COMPARISON_TYPE",
  visit: (visitor) => visitor.booleanComparisonType(),
};
export const fliptComparisonType = {
  UnknownComparisonType: _UnknownComparisonType,
  StringComparisonType: _StringComparisonType,
  NumberComparisonType: _NumberComparisonType,
  BooleanComparisonType: _BooleanComparisonType,
  _parse: (value: string): fliptComparisonType => {
    switch (value) {
      case "UNKNOWN_COMPARISON_TYPE": {
        return _UnknownComparisonType;
      }
      case "STRING_COMPARISON_TYPE": {
        return _StringComparisonType;
      }
      case "NUMBER_COMPARISON_TYPE": {
        return _NumberComparisonType;
      }
      case "BOOLEAN_COMPARISON_TYPE": {
        return _BooleanComparisonType;
      }
      default: {
        return {
          value: value as fliptComparisonType.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace fliptComparisonType {
  type RawValue =
    | "UNKNOWN_COMPARISON_TYPE"
    | "STRING_COMPARISON_TYPE"
    | "NUMBER_COMPARISON_TYPE"
    | "BOOLEAN_COMPARISON_TYPE";

  interface _Visitor<Result> {
    unknownComparisonType: () => Result;
    stringComparisonType: () => Result;
    numberComparisonType: () => Result;
    booleanComparisonType: () => Result;
    _other: (value: string) => Result;
  }
}
