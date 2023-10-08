/**
 */

export type EvaluationReason =
    | "UNKNOWN_EVALUATION_REASON"
    | "FLAG_DISABLED_EVALUATION_REASON"
    | "FLAG_NOT_FOUND_EVALUATION_REASON"
    | "MATCH_EVALUATION_REASON"
    | "ERROR_EVALUATION_REASON";

export const EvaluationReason = {
    UnknownEvaluationReason: "UNKNOWN_EVALUATION_REASON",
    FlagDisabledEvaluationReason: "FLAG_DISABLED_EVALUATION_REASON",
    FlagNotFoundEvaluationReason: "FLAG_NOT_FOUND_EVALUATION_REASON",
    MatchEvaluationReason: "MATCH_EVALUATION_REASON",
    ErrorEvaluationReason: "ERROR_EVALUATION_REASON",
} as const;
