export enum Recommendation {
  DIAGNOSIS,
  NEWS,
  PHYSICAL,
  RHYTHM,
  ISOLATION,
  ACTIVITIES,
  SLEEP,
}

export enum QuestionType {
  SICK = "SICK",
  NEWS = "NEWS",
  PHYSICAL = "PHYSICAL",
  RHYTHM = "RHYTHM",
  ISOLATION = "ISOLATION",
  BORED = "BORED",
  SLEEP = "SLEEP",
}

type RadioQuestionType =
  | QuestionType.SICK
  | QuestionType.PHYSICAL
  | QuestionType.RHYTHM
  | QuestionType.ISOLATION
  | QuestionType.BORED
  | QuestionType.SLEEP

type MultiQuestionType = QuestionType.NEWS

export type Question = {
  message: string
} & (
  | {
      id: RadioQuestionType
      type: "radio"
      options: { value: string; label: string; severity: number }[]
    }
  | {
      id: MultiQuestionType
      type: "multi"
      options: { value: string; label: string }[]
    }
)

export type Answer =
  | { id: RadioQuestionType; type: "radio"; value?: string; severity?: number }
  | { id: MultiQuestionType; type: "multi"; value?: Record<string, boolean> }
