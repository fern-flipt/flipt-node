/**
 */

/**
 * The default is UNKNOWN_COMPARISON_TYPE
 */
export type ConstraintComparisonType =
    | "UNKNOWN_COMPARISON_TYPE"
    | "STRING_COMPARISON_TYPE"
    | "NUMBER_COMPARISON_TYPE"
    | "BOOLEAN_COMPARISON_TYPE"
    | "DATETIME_COMPARISON_TYPE";

export const ConstraintComparisonType = {
    UnknownComparisonType: "UNKNOWN_COMPARISON_TYPE",
    StringComparisonType: "STRING_COMPARISON_TYPE",
    NumberComparisonType: "NUMBER_COMPARISON_TYPE",
    BooleanComparisonType: "BOOLEAN_COMPARISON_TYPE",
    DatetimeComparisonType: "DATETIME_COMPARISON_TYPE",
} as const;
