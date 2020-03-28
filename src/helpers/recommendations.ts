import { Answer, Recommendation, QuestionType } from "./types"

const BAD_NEWS_SOURCES = [
  "friends",
  "onlineNews",
  "liveTv",
  "socialMedia",
  "other",
]

export function getRecommendations(
  answers: Answer[]
): Partial<Record<Recommendation, true>> {
  console.log(answers)
  const res: Partial<Record<Recommendation, true>> = {}
  for (const a of answers) {
    if (a.value) {
      switch (a.id) {
        case QuestionType.BORED:
          if (a.severity! > 0) res[Recommendation.ACTIVITIES] = true
          break
        case QuestionType.ISOLATION:
          if (a.severity! > 0) res[Recommendation.ISOLATION] = true
          break
        case QuestionType.SICK:
          if (a.severity! > 1) res[Recommendation.DIAGNOSIS] = true
          break
        case QuestionType.PHYSICAL:
          if (a.severity! <= 1) res[Recommendation.PHYSICAL] = true
          break
        case QuestionType.SLEEP:
          if (a.severity! > 0) res[Recommendation.SLEEP] = true
          break
        case QuestionType.RHYTHM:
          if (a.severity! <= 0) res[Recommendation.RHYTHM] = true
          break
        case QuestionType.NEWS:
          if (BAD_NEWS_SOURCES.some(n => a.value![n]))
            res[Recommendation.NEWS] = true
          break
        default:
          throw new Error("unknown question type")
      }
    }
  }
  return res
}
