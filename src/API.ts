/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateQuestionBankDetailsInput = {
  id?: string | null,
  name: string,
  code: string,
  description: string,
  adminID?: string | null,
  userID: string,
  status: number,
};

export type ModelQuestionBankDetailsConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelQuestionBankDetailsConditionInput | null > | null,
  or?: Array< ModelQuestionBankDetailsConditionInput | null > | null,
  not?: ModelQuestionBankDetailsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type QuestionBankDetails = {
  __typename: "QuestionBankDetails",
  id: string,
  name: string,
  code: string,
  description: string,
  adminID?: string | null,
  userID: string,
  status: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQuestionBankDetailsInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  description?: string | null,
  adminID?: string | null,
  userID?: string | null,
  status?: number | null,
};

export type DeleteQuestionBankDetailsInput = {
  id: string,
};

export type CreateGroupQuestionsInput = {
  id?: string | null,
  content: string,
  questionBankID: string,
};

export type ModelGroupQuestionsConditionInput = {
  content?: ModelStringInput | null,
  questionBankID?: ModelIDInput | null,
  and?: Array< ModelGroupQuestionsConditionInput | null > | null,
  or?: Array< ModelGroupQuestionsConditionInput | null > | null,
  not?: ModelGroupQuestionsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type GroupQuestions = {
  __typename: "GroupQuestions",
  id: string,
  content: string,
  questionBankID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupQuestionsInput = {
  id: string,
  content?: string | null,
  questionBankID?: string | null,
};

export type DeleteGroupQuestionsInput = {
  id: string,
};

export type CreateAssessmentInput = {
  id?: string | null,
  testName: string,
  testCode?: string | null,
  testDescription?: string | null,
  testType: string,
  campus: Array< string | null >,
  visibility?: string | null,
  department?: string | null,
  tags: Array< string | null >,
};

export type ModelAssessmentConditionInput = {
  testName?: ModelStringInput | null,
  testCode?: ModelStringInput | null,
  testDescription?: ModelStringInput | null,
  testType?: ModelStringInput | null,
  campus?: ModelStringInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelAssessmentConditionInput | null > | null,
  or?: Array< ModelAssessmentConditionInput | null > | null,
  not?: ModelAssessmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Assessment = {
  __typename: "Assessment",
  id: string,
  testName: string,
  testCode?: string | null,
  testDescription?: string | null,
  testType: string,
  campus: Array< string | null >,
  visibility?: string | null,
  department?: string | null,
  tags: Array< string | null >,
  section?:  Array<Assessmentsection | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Assessmentsection = {
  __typename: "Assessmentsection",
  id: string,
  sectionId: string,
  duration?: string | null,
  additionalInformation?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAssessmentInput = {
  id: string,
  testName?: string | null,
  testCode?: string | null,
  testDescription?: string | null,
  testType?: string | null,
  campus?: Array< string | null > | null,
  visibility?: string | null,
  department?: string | null,
  tags?: Array< string | null > | null,
};

export type DeleteAssessmentInput = {
  id: string,
};

export type CreateAssessmentsectionInput = {
  id?: string | null,
  sectionId: string,
  duration?: string | null,
  additionalInformation?: string | null,
};

export type ModelAssessmentsectionConditionInput = {
  sectionId?: ModelIDInput | null,
  duration?: ModelStringInput | null,
  additionalInformation?: ModelStringInput | null,
  and?: Array< ModelAssessmentsectionConditionInput | null > | null,
  or?: Array< ModelAssessmentsectionConditionInput | null > | null,
  not?: ModelAssessmentsectionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAssessmentsectionInput = {
  id: string,
  sectionId?: string | null,
  duration?: string | null,
  additionalInformation?: string | null,
};

export type DeleteAssessmentsectionInput = {
  id: string,
};

export type CreateQuestionsInput = {
  id?: string | null,
  standardInputs?: string | null,
  questionBankID: string,
  questionType: string,
  questionSubType: string,
  subject: string,
  difficulty: string,
  topicId: string,
  directions?: string | null,
  codeEditor?: string | null,
  textEditor?: string | null,
  options?: Array< OptionInput | null > | null,
  solution?: Array< SolutionInput | null > | null,
  hint?: Array< HintInput | null > | null,
  media?: string | null,
  questionName?: string | null,
  wordLimit?: number | null,
  videoSolution?: string | null,
  competency?: Array< CompetencyInput | null > | null,
  subTopic?: string | null,
  concepts?: string | null,
  adminID?: string | null,
  userID: string,
  blanksCount?: number | null,
  caseSensitive?: boolean | null,
  QuesDependency?: string | null,
  fillUpanswer?: Array< AnswerInput | null > | null,
  languages?: Array< string | null > | null,
  SingleLanguage?: string | null,
  inputFormat?: string | null,
  outputFormat?: string | null,
  enableCustomInput?: boolean | null,
  enableAPITesting?: boolean | null,
  codeConstraints?: string | null,
  evaluationTime?: boolean | null,
  timeLimit?: string | null,
  memoryLimit?: string | null,
  outputLimit?: string | null,
  codeSize?: string | null,
  sample?: Array< SolutionInput | null > | null,
  backgroundImg?: string | null,
  initialQuery?: string | null,
  fileCount?: number | null,
  fileCountMandatory?: boolean | null,
  fileFormats?: Array< string | null > | null,
  enableAutoRecord?: boolean | null,
  minRecording?: number | null,
  maxRecording?: number | null,
  attemptsToRecord?: number | null,
  autoEvaluation?: boolean | null,
  cloudProvider?: string | null,
  startTime?: number | null,
  ZipFile?: string | null,
  themes?: Array< string | null > | null,
  fileSizes?: Array< string | null > | null,
  techStack?: string | null,
  instanceSize?: string | null,
  explaination?: string | null,
  compilerOutput?: string | null,
  compilerLanguage?: string | null,
  compilerProgram?: string | null,
  htmlCssJsCode?: string | null,
  groupQuestionID?: string | null,
  questionCode?: string | null,
  tags?: Array< string | null > | null,
};

export type OptionInput = {
  isPartialCorrect: boolean,
  correctAnswer: boolean,
  optionNumber?: number | null,
  weightage?: number | null,
  answer: string,
  negMarks?: number | null,
  splitMarksEqually?: boolean | null,
  fullMarksIfAnyCorrect?: boolean | null,
  fullMarksOnlyIfAllCorrect?: boolean | null,
};

export type SolutionInput = {
  answer?: string | null,
  optionNumber?: number | null,
  bestSolution?: boolean | null,
};

export type HintInput = {
  optionNumber?: number | null,
  hint?: string | null,
};

export type CompetencyInput = {
  progSub?: string | null,
  progTopic?: string | null,
  progLevel?: string | null,
};

export type AnswerInput = {
  splitMarksEqually?: string | null,
  weightage?: number | null,
  answer?: string | null,
  alternateAns?: Array< string | null > | null,
};

export type ModelQuestionsConditionInput = {
  standardInputs?: ModelStringInput | null,
  questionBankID?: ModelIDInput | null,
  questionType?: ModelStringInput | null,
  questionSubType?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  topicId?: ModelIDInput | null,
  directions?: ModelStringInput | null,
  codeEditor?: ModelStringInput | null,
  textEditor?: ModelStringInput | null,
  media?: ModelStringInput | null,
  questionName?: ModelStringInput | null,
  wordLimit?: ModelIntInput | null,
  videoSolution?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  concepts?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  blanksCount?: ModelIntInput | null,
  caseSensitive?: ModelBooleanInput | null,
  QuesDependency?: ModelStringInput | null,
  languages?: ModelIDInput | null,
  SingleLanguage?: ModelStringInput | null,
  inputFormat?: ModelStringInput | null,
  outputFormat?: ModelStringInput | null,
  enableCustomInput?: ModelBooleanInput | null,
  enableAPITesting?: ModelBooleanInput | null,
  codeConstraints?: ModelStringInput | null,
  evaluationTime?: ModelBooleanInput | null,
  timeLimit?: ModelStringInput | null,
  memoryLimit?: ModelStringInput | null,
  outputLimit?: ModelStringInput | null,
  codeSize?: ModelStringInput | null,
  backgroundImg?: ModelStringInput | null,
  initialQuery?: ModelStringInput | null,
  fileCount?: ModelIntInput | null,
  fileCountMandatory?: ModelBooleanInput | null,
  fileFormats?: ModelStringInput | null,
  enableAutoRecord?: ModelBooleanInput | null,
  minRecording?: ModelIntInput | null,
  maxRecording?: ModelIntInput | null,
  attemptsToRecord?: ModelIntInput | null,
  autoEvaluation?: ModelBooleanInput | null,
  cloudProvider?: ModelStringInput | null,
  startTime?: ModelIntInput | null,
  ZipFile?: ModelStringInput | null,
  themes?: ModelStringInput | null,
  fileSizes?: ModelStringInput | null,
  techStack?: ModelIDInput | null,
  instanceSize?: ModelIDInput | null,
  explaination?: ModelStringInput | null,
  compilerOutput?: ModelStringInput | null,
  compilerLanguage?: ModelStringInput | null,
  compilerProgram?: ModelStringInput | null,
  htmlCssJsCode?: ModelStringInput | null,
  groupQuestionID?: ModelIDInput | null,
  questionCode?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelQuestionsConditionInput | null > | null,
  or?: Array< ModelQuestionsConditionInput | null > | null,
  not?: ModelQuestionsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Questions = {
  __typename: "Questions",
  id: string,
  standardInputs?: string | null,
  questionBankID: string,
  questionType: string,
  questionSubType: string,
  subject: string,
  difficulty: string,
  topicId: string,
  directions?: string | null,
  codeEditor?: string | null,
  textEditor?: string | null,
  options?:  Array<option | null > | null,
  solution?:  Array<solution | null > | null,
  hint?:  Array<hint | null > | null,
  media?: string | null,
  questionName?: string | null,
  wordLimit?: number | null,
  videoSolution?: string | null,
  competency?:  Array<competency | null > | null,
  subTopic?: string | null,
  concepts?: string | null,
  adminID?: string | null,
  userID: string,
  blanksCount?: number | null,
  caseSensitive?: boolean | null,
  QuesDependency?: string | null,
  fillUpanswer?:  Array<answer | null > | null,
  languages?: Array< string | null > | null,
  SingleLanguage?: string | null,
  inputFormat?: string | null,
  outputFormat?: string | null,
  enableCustomInput?: boolean | null,
  enableAPITesting?: boolean | null,
  codeConstraints?: string | null,
  evaluationTime?: boolean | null,
  timeLimit?: string | null,
  memoryLimit?: string | null,
  outputLimit?: string | null,
  codeSize?: string | null,
  sample?:  Array<solution | null > | null,
  backgroundImg?: string | null,
  initialQuery?: string | null,
  fileCount?: number | null,
  fileCountMandatory?: boolean | null,
  fileFormats?: Array< string | null > | null,
  enableAutoRecord?: boolean | null,
  minRecording?: number | null,
  maxRecording?: number | null,
  attemptsToRecord?: number | null,
  autoEvaluation?: boolean | null,
  cloudProvider?: string | null,
  startTime?: number | null,
  ZipFile?: string | null,
  themes?: Array< string | null > | null,
  fileSizes?: Array< string | null > | null,
  techStack?: string | null,
  instanceSize?: string | null,
  explaination?: string | null,
  compilerOutput?: string | null,
  compilerLanguage?: string | null,
  compilerProgram?: string | null,
  htmlCssJsCode?: string | null,
  groupQuestionID?: string | null,
  questionCode?: string | null,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type option = {
  __typename: "option",
  isPartialCorrect: boolean,
  correctAnswer: boolean,
  optionNumber?: number | null,
  weightage?: number | null,
  answer: string,
  negMarks?: number | null,
  splitMarksEqually?: boolean | null,
  fullMarksIfAnyCorrect?: boolean | null,
  fullMarksOnlyIfAllCorrect?: boolean | null,
};

export type solution = {
  __typename: "solution",
  answer?: string | null,
  optionNumber?: number | null,
  bestSolution?: boolean | null,
};

export type hint = {
  __typename: "hint",
  optionNumber?: number | null,
  hint?: string | null,
};

export type competency = {
  __typename: "competency",
  progSub?: string | null,
  progTopic?: string | null,
  progLevel?: string | null,
};

export type answer = {
  __typename: "answer",
  splitMarksEqually?: string | null,
  weightage?: number | null,
  answer?: string | null,
  alternateAns?: Array< string | null > | null,
};

export type UpdateQuestionsInput = {
  id: string,
  standardInputs?: string | null,
  questionBankID?: string | null,
  questionType?: string | null,
  questionSubType?: string | null,
  subject?: string | null,
  difficulty?: string | null,
  topicId?: string | null,
  directions?: string | null,
  codeEditor?: string | null,
  textEditor?: string | null,
  options?: Array< OptionInput | null > | null,
  solution?: Array< SolutionInput | null > | null,
  hint?: Array< HintInput | null > | null,
  media?: string | null,
  questionName?: string | null,
  wordLimit?: number | null,
  videoSolution?: string | null,
  competency?: Array< CompetencyInput | null > | null,
  subTopic?: string | null,
  concepts?: string | null,
  adminID?: string | null,
  userID?: string | null,
  blanksCount?: number | null,
  caseSensitive?: boolean | null,
  QuesDependency?: string | null,
  fillUpanswer?: Array< AnswerInput | null > | null,
  languages?: Array< string | null > | null,
  SingleLanguage?: string | null,
  inputFormat?: string | null,
  outputFormat?: string | null,
  enableCustomInput?: boolean | null,
  enableAPITesting?: boolean | null,
  codeConstraints?: string | null,
  evaluationTime?: boolean | null,
  timeLimit?: string | null,
  memoryLimit?: string | null,
  outputLimit?: string | null,
  codeSize?: string | null,
  sample?: Array< SolutionInput | null > | null,
  backgroundImg?: string | null,
  initialQuery?: string | null,
  fileCount?: number | null,
  fileCountMandatory?: boolean | null,
  fileFormats?: Array< string | null > | null,
  enableAutoRecord?: boolean | null,
  minRecording?: number | null,
  maxRecording?: number | null,
  attemptsToRecord?: number | null,
  autoEvaluation?: boolean | null,
  cloudProvider?: string | null,
  startTime?: number | null,
  ZipFile?: string | null,
  themes?: Array< string | null > | null,
  fileSizes?: Array< string | null > | null,
  techStack?: string | null,
  instanceSize?: string | null,
  explaination?: string | null,
  compilerOutput?: string | null,
  compilerLanguage?: string | null,
  compilerProgram?: string | null,
  htmlCssJsCode?: string | null,
  groupQuestionID?: string | null,
  questionCode?: string | null,
  tags?: Array< string | null > | null,
};

export type DeleteQuestionsInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  courseName?: string | null,
  courseCode?: string | null,
  PublishingText?: string | null,
  description?: string | null,
  file?: string | null,
  showLeaderBoard?: string | null,
  adminID?: Array< string | null > | null,
  visibility?: string | null,
  department?: Array< string | null > | null,
  batch?: Array< string | null > | null,
  category?: string | null,
  tags?: boolean | null,
  adminID1?: string | null,
  department1?: string | null,
  batch1?: string | null,
  degree?: string | null,
  skuCode?: string | null,
  userID?: string | null,
  hodID?: string | null,
  mediaInputType?: string | null,
  subject?: string | null,
  topicId?: string | null,
  subTopic?: string | null,
  courseValidity?: Array< CourseValidityInput | null > | null,
};

export type CourseValidityInput = {
  months?: string | null,
  price?: string | null,
};

export type ModelCourseConditionInput = {
  courseName?: ModelStringInput | null,
  courseCode?: ModelStringInput | null,
  PublishingText?: ModelStringInput | null,
  description?: ModelStringInput | null,
  file?: ModelStringInput | null,
  showLeaderBoard?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelStringInput | null,
  batch?: ModelStringInput | null,
  category?: ModelStringInput | null,
  tags?: ModelBooleanInput | null,
  adminID1?: ModelStringInput | null,
  department1?: ModelStringInput | null,
  batch1?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  skuCode?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  hodID?: ModelIDInput | null,
  mediaInputType?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  topicId?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type course = {
  __typename: "course",
  id: string,
  courseName?: string | null,
  courseCode?: string | null,
  PublishingText?: string | null,
  description?: string | null,
  file?: string | null,
  showLeaderBoard?: string | null,
  adminID?: Array< string | null > | null,
  visibility?: string | null,
  department?: Array< string | null > | null,
  batch?: Array< string | null > | null,
  category?: string | null,
  tags?: boolean | null,
  adminID1?: string | null,
  department1?: string | null,
  batch1?: string | null,
  degree?: string | null,
  skuCode?: string | null,
  userID?: string | null,
  hodID?: string | null,
  mediaInputType?: string | null,
  subject?: string | null,
  topicId?: string | null,
  subTopic?: string | null,
  courseValidity?:  Array<courseValidity | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type courseValidity = {
  __typename: "courseValidity",
  months?: string | null,
  price?: string | null,
};

export type UpdateCourseInput = {
  id: string,
  courseName?: string | null,
  courseCode?: string | null,
  PublishingText?: string | null,
  description?: string | null,
  file?: string | null,
  showLeaderBoard?: string | null,
  adminID?: Array< string | null > | null,
  visibility?: string | null,
  department?: Array< string | null > | null,
  batch?: Array< string | null > | null,
  category?: string | null,
  tags?: boolean | null,
  adminID1?: string | null,
  department1?: string | null,
  batch1?: string | null,
  degree?: string | null,
  skuCode?: string | null,
  userID?: string | null,
  hodID?: string | null,
  mediaInputType?: string | null,
  subject?: string | null,
  topicId?: string | null,
  subTopic?: string | null,
  courseValidity?: Array< CourseValidityInput | null > | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateCourseCategoryInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCourseCategoryConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseCategoryConditionInput | null > | null,
  or?: Array< ModelCourseCategoryConditionInput | null > | null,
  not?: ModelCourseCategoryConditionInput | null,
};

export type courseCategory = {
  __typename: "courseCategory",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCourseCategoryInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCourseCategoryInput = {
  id: string,
};

export type CreateTestContentInput = {
  id?: string | null,
  courseID?: string | null,
  testID?: string | null,
  contentID?: string | null,
  description?: string | null,
  timeZone?: string | null,
  fromDate?: string | null,
  toDate?: string | null,
  shuffleQues?: boolean | null,
  shuffleOptions?: boolean | null,
  analyticsReport?: boolean | null,
  hint?: boolean | null,
  result?: boolean | null,
  expectedOutput?: boolean | null,
  testCase?: boolean | null,
  submitCount?: boolean | null,
  lockTest?: boolean | null,
  prevButton?: boolean | null,
  choice?: boolean | null,
  maxQuesMarks?: number | null,
  negMarks?: number | null,
  maxAttend?: boolean | null,
  cutoffMarks?: string | null,
  ruleType?: string | null,
  percentageCondition?: string | null,
  testPercentage?: number | null,
  lockContent?: boolean | null,
  allowDownload?: boolean | null,
  freePreview?: boolean | null,
  limit?: string | null,
  resultPercentage?: number | null,
  maxQuesAttended?: number | null,
  type?: string | null,
  displayQuestions?: string | null,
  timer?: TimerInput | null,
  sectionWiseMarks?: Array< SectionWiseMarksInput | null > | null,
  QuestionWiseMarks?: Array< QuestionWiseMarksInput | null > | null,
  marksType?: string | null,
  actualMarks?: string | null,
  status?: number | null,
};

export type TimerInput = {
  hours?: number | null,
  minutes?: number | null,
  seconds?: number | null,
};

export type SectionWiseMarksInput = {
  sectionID?: string | null,
  cutoffMarks?: string | null,
  actualMarks?: string | null,
};

export type QuestionWiseMarksInput = {
  sectionID?: string | null,
  questionID?: string | null,
  cutoffMarks?: string | null,
  actualMarks?: string | null,
};

export type ModelTestContentConditionInput = {
  courseID?: ModelIDInput | null,
  testID?: ModelIDInput | null,
  contentID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  timeZone?: ModelStringInput | null,
  fromDate?: ModelStringInput | null,
  toDate?: ModelStringInput | null,
  shuffleQues?: ModelBooleanInput | null,
  shuffleOptions?: ModelBooleanInput | null,
  analyticsReport?: ModelBooleanInput | null,
  hint?: ModelBooleanInput | null,
  result?: ModelBooleanInput | null,
  expectedOutput?: ModelBooleanInput | null,
  testCase?: ModelBooleanInput | null,
  submitCount?: ModelBooleanInput | null,
  lockTest?: ModelBooleanInput | null,
  prevButton?: ModelBooleanInput | null,
  choice?: ModelBooleanInput | null,
  maxQuesMarks?: ModelIntInput | null,
  negMarks?: ModelIntInput | null,
  maxAttend?: ModelBooleanInput | null,
  cutoffMarks?: ModelStringInput | null,
  ruleType?: ModelStringInput | null,
  percentageCondition?: ModelStringInput | null,
  testPercentage?: ModelIntInput | null,
  lockContent?: ModelBooleanInput | null,
  allowDownload?: ModelBooleanInput | null,
  freePreview?: ModelBooleanInput | null,
  limit?: ModelStringInput | null,
  resultPercentage?: ModelIntInput | null,
  maxQuesAttended?: ModelIntInput | null,
  type?: ModelStringInput | null,
  displayQuestions?: ModelStringInput | null,
  marksType?: ModelStringInput | null,
  actualMarks?: ModelStringInput | null,
  status?: ModelIntInput | null,
  and?: Array< ModelTestContentConditionInput | null > | null,
  or?: Array< ModelTestContentConditionInput | null > | null,
  not?: ModelTestContentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type testContent = {
  __typename: "testContent",
  id: string,
  courseID?: string | null,
  testID?: string | null,
  contentID?: string | null,
  description?: string | null,
  timeZone?: string | null,
  fromDate?: string | null,
  toDate?: string | null,
  shuffleQues?: boolean | null,
  shuffleOptions?: boolean | null,
  analyticsReport?: boolean | null,
  hint?: boolean | null,
  result?: boolean | null,
  expectedOutput?: boolean | null,
  testCase?: boolean | null,
  submitCount?: boolean | null,
  lockTest?: boolean | null,
  prevButton?: boolean | null,
  choice?: boolean | null,
  maxQuesMarks?: number | null,
  negMarks?: number | null,
  maxAttend?: boolean | null,
  cutoffMarks?: string | null,
  ruleType?: string | null,
  percentageCondition?: string | null,
  testPercentage?: number | null,
  lockContent?: boolean | null,
  allowDownload?: boolean | null,
  freePreview?: boolean | null,
  limit?: string | null,
  resultPercentage?: number | null,
  maxQuesAttended?: number | null,
  type?: string | null,
  displayQuestions?: string | null,
  timer?: Timer | null,
  sectionWiseMarks?:  Array<sectionWiseMarks | null > | null,
  QuestionWiseMarks?:  Array<QuestionWiseMarks | null > | null,
  marksType?: string | null,
  actualMarks?: string | null,
  status?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type Timer = {
  __typename: "Timer",
  hours?: number | null,
  minutes?: number | null,
  seconds?: number | null,
};

export type sectionWiseMarks = {
  __typename: "sectionWiseMarks",
  sectionID?: string | null,
  cutoffMarks?: string | null,
  actualMarks?: string | null,
};

export type QuestionWiseMarks = {
  __typename: "QuestionWiseMarks",
  sectionID?: string | null,
  questionID?: string | null,
  cutoffMarks?: string | null,
  actualMarks?: string | null,
};

export type UpdateTestContentInput = {
  id: string,
  courseID?: string | null,
  testID?: string | null,
  contentID?: string | null,
  description?: string | null,
  timeZone?: string | null,
  fromDate?: string | null,
  toDate?: string | null,
  shuffleQues?: boolean | null,
  shuffleOptions?: boolean | null,
  analyticsReport?: boolean | null,
  hint?: boolean | null,
  result?: boolean | null,
  expectedOutput?: boolean | null,
  testCase?: boolean | null,
  submitCount?: boolean | null,
  lockTest?: boolean | null,
  prevButton?: boolean | null,
  choice?: boolean | null,
  maxQuesMarks?: number | null,
  negMarks?: number | null,
  maxAttend?: boolean | null,
  cutoffMarks?: string | null,
  ruleType?: string | null,
  percentageCondition?: string | null,
  testPercentage?: number | null,
  lockContent?: boolean | null,
  allowDownload?: boolean | null,
  freePreview?: boolean | null,
  limit?: string | null,
  resultPercentage?: number | null,
  maxQuesAttended?: number | null,
  type?: string | null,
  displayQuestions?: string | null,
  timer?: TimerInput | null,
  sectionWiseMarks?: Array< SectionWiseMarksInput | null > | null,
  QuestionWiseMarks?: Array< QuestionWiseMarksInput | null > | null,
  marksType?: string | null,
  actualMarks?: string | null,
  status?: number | null,
};

export type DeleteTestContentInput = {
  id: string,
};

export type CreateStudentTestInput = {
  id?: string | null,
  studentID?: string | null,
  testContentID?: string | null,
  courseID?: string | null,
  percentage?: string | null,
  totalMarks?: string | null,
  ScoredMarks?: string | null,
};

export type ModelStudentTestConditionInput = {
  studentID?: ModelIDInput | null,
  testContentID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  percentage?: ModelStringInput | null,
  totalMarks?: ModelStringInput | null,
  ScoredMarks?: ModelStringInput | null,
  and?: Array< ModelStudentTestConditionInput | null > | null,
  or?: Array< ModelStudentTestConditionInput | null > | null,
  not?: ModelStudentTestConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type studentTest = {
  __typename: "studentTest",
  id: string,
  studentID?: string | null,
  testContentID?: string | null,
  courseID?: string | null,
  percentage?: string | null,
  totalMarks?: string | null,
  ScoredMarks?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStudentTestInput = {
  id: string,
  studentID?: string | null,
  testContentID?: string | null,
  courseID?: string | null,
  percentage?: string | null,
  totalMarks?: string | null,
  ScoredMarks?: string | null,
};

export type DeleteStudentTestInput = {
  id: string,
};

export type CreateStudentTestQuestionsInput = {
  id?: string | null,
  studentTest?: string | null,
  sectionID?: string | null,
  questionID?: string | null,
  answerOption?: string | null,
  actualMarks?: string | null,
  negativeMarks?: string | null,
  result?: string | null,
  compilerOutput?: string | null,
  compilerLanguage?: string | null,
  compilerProgram?: string | null,
};

export type ModelStudentTestQuestionsConditionInput = {
  studentTest?: ModelIDInput | null,
  sectionID?: ModelIDInput | null,
  questionID?: ModelIDInput | null,
  answerOption?: ModelStringInput | null,
  actualMarks?: ModelStringInput | null,
  negativeMarks?: ModelStringInput | null,
  result?: ModelStringInput | null,
  compilerOutput?: ModelStringInput | null,
  compilerLanguage?: ModelStringInput | null,
  compilerProgram?: ModelStringInput | null,
  and?: Array< ModelStudentTestQuestionsConditionInput | null > | null,
  or?: Array< ModelStudentTestQuestionsConditionInput | null > | null,
  not?: ModelStudentTestQuestionsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type studentTestQuestions = {
  __typename: "studentTestQuestions",
  id: string,
  studentTest?: string | null,
  sectionID?: string | null,
  questionID?: string | null,
  answerOption?: string | null,
  actualMarks?: string | null,
  negativeMarks?: string | null,
  result?: string | null,
  compilerOutput?: string | null,
  compilerLanguage?: string | null,
  compilerProgram?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStudentTestQuestionsInput = {
  id: string,
  studentTest?: string | null,
  sectionID?: string | null,
  questionID?: string | null,
  answerOption?: string | null,
  actualMarks?: string | null,
  negativeMarks?: string | null,
  result?: string | null,
  compilerOutput?: string | null,
  compilerLanguage?: string | null,
  compilerProgram?: string | null,
};

export type DeleteStudentTestQuestionsInput = {
  id: string,
};

export type CreateTestInput = {
  id?: string | null,
  nameOfTest?: string | null,
  testCode?: string | null,
  testDescription?: string | null,
  testType?: string | null,
  adminID?: Array< string | null > | null,
  hodID?: Array< string | null > | null,
  visibility?: string | null,
  department?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  section?: Array< TestSectionInput | null > | null,
  userID?: string | null,
  manualEvaluation?: boolean | null,
};

export type TestSectionInput = {
  id?: string | null,
  sectionName?: string | null,
  additionalInformation?: string | null,
};

export type ModelTestConditionInput = {
  nameOfTest?: ModelStringInput | null,
  testCode?: ModelStringInput | null,
  testDescription?: ModelStringInput | null,
  testType?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  hodID?: ModelStringInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  manualEvaluation?: ModelBooleanInput | null,
  and?: Array< ModelTestConditionInput | null > | null,
  or?: Array< ModelTestConditionInput | null > | null,
  not?: ModelTestConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Test = {
  __typename: "Test",
  id: string,
  nameOfTest?: string | null,
  testCode?: string | null,
  testDescription?: string | null,
  testType?: string | null,
  adminID?: Array< string | null > | null,
  hodID?: Array< string | null > | null,
  visibility?: string | null,
  department?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  section?:  Array<testSection | null > | null,
  userID?: string | null,
  manualEvaluation?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type testSection = {
  __typename: "testSection",
  id?: string | null,
  sectionName?: string | null,
  additionalInformation?: string | null,
};

export type UpdateTestInput = {
  id: string,
  nameOfTest?: string | null,
  testCode?: string | null,
  testDescription?: string | null,
  testType?: string | null,
  adminID?: Array< string | null > | null,
  hodID?: Array< string | null > | null,
  visibility?: string | null,
  department?: Array< string | null > | null,
  tags?: Array< string | null > | null,
  section?: Array< TestSectionInput | null > | null,
  userID?: string | null,
  manualEvaluation?: boolean | null,
};

export type DeleteTestInput = {
  id: string,
};

export type CreateTestQuestionInput = {
  id?: string | null,
  testID: string,
  sectionID?: string | null,
  questionID: string,
};

export type ModelTestQuestionConditionInput = {
  testID?: ModelIDInput | null,
  sectionID?: ModelIDInput | null,
  questionID?: ModelIDInput | null,
  and?: Array< ModelTestQuestionConditionInput | null > | null,
  or?: Array< ModelTestQuestionConditionInput | null > | null,
  not?: ModelTestQuestionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type TestQuestion = {
  __typename: "TestQuestion",
  id: string,
  testID: string,
  sectionID?: string | null,
  questionID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTestQuestionInput = {
  id: string,
  testID?: string | null,
  sectionID?: string | null,
  questionID?: string | null,
};

export type DeleteTestQuestionInput = {
  id: string,
};

export type CreateContentBankDetailsInput = {
  id?: string | null,
  name: string,
  description: string,
  adminID: string,
  visibility: string,
  groups: Array< string | null >,
  userID: string,
  status: number,
  subject?: string | null,
  topicId?: string | null,
  subTopic?: string | null,
};

export type ModelContentBankDetailsConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  visibility?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  status?: ModelIntInput | null,
  subject?: ModelStringInput | null,
  topicId?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  and?: Array< ModelContentBankDetailsConditionInput | null > | null,
  or?: Array< ModelContentBankDetailsConditionInput | null > | null,
  not?: ModelContentBankDetailsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ContentBankDetails = {
  __typename: "ContentBankDetails",
  id: string,
  name: string,
  description: string,
  adminID: string,
  visibility: string,
  groups: Array< string | null >,
  userID: string,
  status: number,
  subject?: string | null,
  topicId?: string | null,
  subTopic?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentBankDetailsInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  adminID?: string | null,
  visibility?: string | null,
  groups?: Array< string | null > | null,
  userID?: string | null,
  status?: number | null,
  subject?: string | null,
  topicId?: string | null,
  subTopic?: string | null,
};

export type DeleteContentBankDetailsInput = {
  id: string,
};

export type CreateContentInput = {
  id?: string | null,
  contentBankID: string,
  contentType: string,
  contentsubType: string,
  contentName: string,
  subTopic: string,
  topicId: string,
  subject: string,
  content: string,
  averageReadTime: string,
  additionalInformation: string,
  adminID: string,
  userID: string,
};

export type ModelContentConditionInput = {
  contentBankID?: ModelIDInput | null,
  contentType?: ModelStringInput | null,
  contentsubType?: ModelStringInput | null,
  contentName?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  topicId?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  content?: ModelStringInput | null,
  averageReadTime?: ModelStringInput | null,
  additionalInformation?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelContentConditionInput | null > | null,
  or?: Array< ModelContentConditionInput | null > | null,
  not?: ModelContentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type content = {
  __typename: "content",
  id: string,
  contentBankID: string,
  contentType: string,
  contentsubType: string,
  contentName: string,
  subTopic: string,
  topicId: string,
  subject: string,
  content: string,
  averageReadTime: string,
  additionalInformation: string,
  adminID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentInput = {
  id: string,
  contentBankID?: string | null,
  contentType?: string | null,
  contentsubType?: string | null,
  contentName?: string | null,
  subTopic?: string | null,
  topicId?: string | null,
  subject?: string | null,
  content?: string | null,
  averageReadTime?: string | null,
  additionalInformation?: string | null,
  adminID?: string | null,
  userID?: string | null,
};

export type DeleteContentInput = {
  id: string,
};

export type CreateMyTable2Input = {
  id?: string | null,
  title: string,
  gender: string,
  address: string,
  age: number,
};

export type ModelMyTable2ConditionInput = {
  title?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  address?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelMyTable2ConditionInput | null > | null,
  or?: Array< ModelMyTable2ConditionInput | null > | null,
  not?: ModelMyTable2ConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type myTable2 = {
  __typename: "myTable2",
  id: string,
  title: string,
  gender: string,
  address: string,
  age: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMyTable2Input = {
  id: string,
  title?: string | null,
  gender?: string | null,
  address?: string | null,
  age?: number | null,
};

export type DeleteMyTable2Input = {
  id: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  name: string,
  status: number,
  userID: string,
  adminID: string,
  code: string,
};

export type ModelSubjectConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type subject = {
  __typename: "subject",
  id: string,
  name: string,
  status: number,
  userID: string,
  adminID: string,
  code: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSubjectInput = {
  id: string,
  name?: string | null,
  status?: number | null,
  userID?: string | null,
  adminID?: string | null,
  code?: string | null,
};

export type DeleteSubjectInput = {
  id: string,
};

export type CreateTopicInput = {
  id?: string | null,
  subjectID: string,
  name: string,
  status: number,
  userID: string,
  code: string,
  adminID?: string | null,
};

export type ModelTopicConditionInput = {
  subjectID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  code?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type topic = {
  __typename: "topic",
  id: string,
  subjectID: string,
  name: string,
  status: number,
  userID: string,
  code: string,
  adminID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTopicInput = {
  id: string,
  subjectID?: string | null,
  name?: string | null,
  status?: number | null,
  userID?: string | null,
  code?: string | null,
  adminID?: string | null,
};

export type DeleteTopicInput = {
  id: string,
};

export type CreateSubTopicInput = {
  id?: string | null,
  topicID: string,
  name: string,
  status: number,
  userID: string,
  code: string,
  adminID?: string | null,
};

export type ModelSubTopicConditionInput = {
  topicID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  code?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  and?: Array< ModelSubTopicConditionInput | null > | null,
  or?: Array< ModelSubTopicConditionInput | null > | null,
  not?: ModelSubTopicConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type subTopic = {
  __typename: "subTopic",
  id: string,
  topicID: string,
  name: string,
  status: number,
  userID: string,
  code: string,
  adminID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSubTopicInput = {
  id: string,
  topicID?: string | null,
  name?: string | null,
  status?: number | null,
  userID?: string | null,
  code?: string | null,
  adminID?: string | null,
};

export type DeleteSubTopicInput = {
  id: string,
};

export type CreateStudentJobAppliedJobInput = {
  id?: string | null,
  studentID: string,
  jobID: string,
  status?: string | null,
  adminID?: string | null,
};

export type ModelStudentJobAppliedJobConditionInput = {
  studentID?: ModelIDInput | null,
  jobID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  and?: Array< ModelStudentJobAppliedJobConditionInput | null > | null,
  or?: Array< ModelStudentJobAppliedJobConditionInput | null > | null,
  not?: ModelStudentJobAppliedJobConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type studentJobAppliedJob = {
  __typename: "studentJobAppliedJob",
  id: string,
  studentID: string,
  jobID: string,
  status?: string | null,
  adminID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStudentJobAppliedJobInput = {
  id: string,
  studentID?: string | null,
  jobID?: string | null,
  status?: string | null,
  adminID?: string | null,
};

export type DeleteStudentJobAppliedJobInput = {
  id: string,
};

export type CreateGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type group = {
  __typename: "group",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateBranchInput = {
  id?: string | null,
  name: string,
};

export type ModelBranchConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBranchConditionInput | null > | null,
  or?: Array< ModelBranchConditionInput | null > | null,
  not?: ModelBranchConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type branch = {
  __typename: "branch",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBranchInput = {
  id: string,
  name?: string | null,
};

export type DeleteBranchInput = {
  id: string,
};

export type CreateYearInput = {
  id?: string | null,
  name: string,
};

export type ModelYearConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelYearConditionInput | null > | null,
  or?: Array< ModelYearConditionInput | null > | null,
  not?: ModelYearConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type year = {
  __typename: "year",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateYearInput = {
  id: string,
  name?: string | null,
};

export type DeleteYearInput = {
  id: string,
};

export type CreateSectionInput = {
  id?: string | null,
  name: string,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type section = {
  __typename: "section",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSectionInput = {
  id: string,
  name?: string | null,
};

export type DeleteSectionInput = {
  id: string,
};

export type CreateSkillInput = {
  id?: string | null,
  name: string,
};

export type ModelSkillConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type skill = {
  __typename: "skill",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSkillInput = {
  id: string,
  name?: string | null,
};

export type DeleteSkillInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type tag = {
  __typename: "tag",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateBlogCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogCategoryConditionInput | null > | null,
  or?: Array< ModelBlogCategoryConditionInput | null > | null,
  not?: ModelBlogCategoryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type blogCategory = {
  __typename: "blogCategory",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogCategoryInput = {
  id: string,
};

export type CreateThemesInput = {
  id?: string | null,
  name: string,
};

export type ModelThemesConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelThemesConditionInput | null > | null,
  or?: Array< ModelThemesConditionInput | null > | null,
  not?: ModelThemesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type themes = {
  __typename: "themes",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateThemesInput = {
  id: string,
  name?: string | null,
};

export type DeleteThemesInput = {
  id: string,
};

export type CreateLanguageInput = {
  id?: string | null,
  name: string,
};

export type ModelLanguageConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelLanguageConditionInput | null > | null,
  or?: Array< ModelLanguageConditionInput | null > | null,
  not?: ModelLanguageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Language = {
  __typename: "Language",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLanguageInput = {
  id: string,
  name?: string | null,
};

export type DeleteLanguageInput = {
  id: string,
};

export type CreateBatchInput = {
  id?: string | null,
  name: string,
};

export type ModelBatchConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBatchConditionInput | null > | null,
  or?: Array< ModelBatchConditionInput | null > | null,
  not?: ModelBatchConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type batch = {
  __typename: "batch",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBatchInput = {
  id: string,
  name?: string | null,
};

export type DeleteBatchInput = {
  id: string,
};

export type CreateStateInput = {
  id?: string | null,
  name: string,
};

export type ModelStateConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStateConditionInput | null > | null,
  or?: Array< ModelStateConditionInput | null > | null,
  not?: ModelStateConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type state = {
  __typename: "state",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStateInput = {
  id: string,
  name?: string | null,
};

export type DeleteStateInput = {
  id: string,
};

export type CreateDistrictInput = {
  id?: string | null,
  name: string,
};

export type ModelDistrictConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDistrictConditionInput | null > | null,
  or?: Array< ModelDistrictConditionInput | null > | null,
  not?: ModelDistrictConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type district = {
  __typename: "district",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDistrictInput = {
  id: string,
  name?: string | null,
};

export type DeleteDistrictInput = {
  id: string,
};

export type CreateSpecializationInput = {
  id?: string | null,
  name: string,
};

export type ModelSpecializationConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSpecializationConditionInput | null > | null,
  or?: Array< ModelSpecializationConditionInput | null > | null,
  not?: ModelSpecializationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type specialization = {
  __typename: "specialization",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSpecializationInput = {
  id: string,
  name?: string | null,
};

export type DeleteSpecializationInput = {
  id: string,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type department = {
  __typename: "department",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
};

export type DeleteDepartmentInput = {
  id: string,
};

export type CreateTechStackInput = {
  id?: string | null,
  name: string,
};

export type ModelTechStackConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTechStackConditionInput | null > | null,
  or?: Array< ModelTechStackConditionInput | null > | null,
  not?: ModelTechStackConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type techStack = {
  __typename: "techStack",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTechStackInput = {
  id: string,
  name?: string | null,
};

export type DeleteTechStackInput = {
  id: string,
};

export type CreateInstanceSizeInput = {
  id?: string | null,
  name: string,
};

export type ModelInstanceSizeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelInstanceSizeConditionInput | null > | null,
  or?: Array< ModelInstanceSizeConditionInput | null > | null,
  not?: ModelInstanceSizeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type instanceSize = {
  __typename: "instanceSize",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateInstanceSizeInput = {
  id: string,
  name?: string | null,
};

export type DeleteInstanceSizeInput = {
  id: string,
};

export type CreateProgrammerSubjectInput = {
  id?: string | null,
  name: string,
};

export type ModelProgrammerSubjectConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerSubjectConditionInput | null > | null,
  or?: Array< ModelProgrammerSubjectConditionInput | null > | null,
  not?: ModelProgrammerSubjectConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type programmerSubject = {
  __typename: "programmerSubject",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProgrammerSubjectInput = {
  id: string,
  name?: string | null,
};

export type DeleteProgrammerSubjectInput = {
  id: string,
};

export type CreateProgrammerTopicInput = {
  id?: string | null,
  name: string,
};

export type ModelProgrammerTopicConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerTopicConditionInput | null > | null,
  or?: Array< ModelProgrammerTopicConditionInput | null > | null,
  not?: ModelProgrammerTopicConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type programmerTopic = {
  __typename: "programmerTopic",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProgrammerTopicInput = {
  id: string,
  name?: string | null,
};

export type DeleteProgrammerTopicInput = {
  id: string,
};

export type CreateProgrammerLevelInput = {
  id?: string | null,
  name: string,
};

export type ModelProgrammerLevelConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProgrammerLevelConditionInput | null > | null,
  or?: Array< ModelProgrammerLevelConditionInput | null > | null,
  not?: ModelProgrammerLevelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type programmerLevel = {
  __typename: "programmerLevel",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProgrammerLevelInput = {
  id: string,
  name?: string | null,
};

export type DeleteProgrammerLevelInput = {
  id: string,
};

export type CreateStudentSectionInput = {
  id?: string | null,
  name: string,
};

export type ModelStudentSectionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStudentSectionConditionInput | null > | null,
  or?: Array< ModelStudentSectionConditionInput | null > | null,
  not?: ModelStudentSectionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type StudentSection = {
  __typename: "StudentSection",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStudentSectionInput = {
  id: string,
  name?: string | null,
};

export type DeleteStudentSectionInput = {
  id: string,
};

export type CreateBlogInput = {
  id?: string | null,
  catergory?: Array< string | null > | null,
  title: string,
  description: string,
  status: number,
  userID: string,
  adminID?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
};

export type ModelBlogConditionInput = {
  catergory?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  hodID?: ModelIDInput | null,
  tutorID?: ModelIDInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type blog = {
  __typename: "blog",
  id: string,
  catergory?: Array< string | null > | null,
  title: string,
  description: string,
  status: number,
  userID: string,
  adminID?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBlogInput = {
  id: string,
  catergory?: Array< string | null > | null,
  title?: string | null,
  description?: string | null,
  status?: number | null,
  userID?: string | null,
  adminID?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreateJobDriveInput = {
  id?: string | null,
  driveObjective: string,
  campus: Array< string | null >,
  division?: string | null,
  driveName?: string | null,
  companyName?: string | null,
  companyDomainURL?: string | null,
  location?: string | null,
  internshipDuration?: number | null,
  weeksMonths?: string | null,
  jobDescription?: string | null,
  skills?: Array< string | null > | null,
  jobRole?: string | null,
  department?: Array< string | null > | null,
  XthPercentage?: number | null,
  IntermediatePercentage?: number | null,
  DiplomaPercentage?: number | null,
  GraduationPercentage?: number | null,
  year?: Array< string | null > | null,
  SelectionProcess?: string | null,
  DateofDrive?: string | null,
  ReportingTime?: string | null,
  aboutCompany?: string | null,
  additionalInformation?: string | null,
  payType?: string | null,
  payRole?: string | null,
  payAmount?: number | null,
  newResume?: boolean | null,
  userID?: string | null,
  adminID?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  round?: Array< JobRoundInput | null > | null,
};

export type JobRoundInput = {
  input?: string | null,
};

export type ModelJobDriveConditionInput = {
  driveObjective?: ModelStringInput | null,
  campus?: ModelStringInput | null,
  division?: ModelStringInput | null,
  driveName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  companyDomainURL?: ModelStringInput | null,
  location?: ModelStringInput | null,
  internshipDuration?: ModelIntInput | null,
  weeksMonths?: ModelStringInput | null,
  jobDescription?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  jobRole?: ModelStringInput | null,
  department?: ModelStringInput | null,
  XthPercentage?: ModelIntInput | null,
  IntermediatePercentage?: ModelIntInput | null,
  DiplomaPercentage?: ModelIntInput | null,
  GraduationPercentage?: ModelIntInput | null,
  year?: ModelStringInput | null,
  SelectionProcess?: ModelStringInput | null,
  DateofDrive?: ModelStringInput | null,
  ReportingTime?: ModelStringInput | null,
  aboutCompany?: ModelStringInput | null,
  additionalInformation?: ModelStringInput | null,
  payType?: ModelStringInput | null,
  payRole?: ModelStringInput | null,
  payAmount?: ModelIntInput | null,
  newResume?: ModelBooleanInput | null,
  userID?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  hodID?: ModelStringInput | null,
  tutorID?: ModelStringInput | null,
  and?: Array< ModelJobDriveConditionInput | null > | null,
  or?: Array< ModelJobDriveConditionInput | null > | null,
  not?: ModelJobDriveConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type jobDrive = {
  __typename: "jobDrive",
  id: string,
  driveObjective: string,
  campus: Array< string | null >,
  division?: string | null,
  driveName?: string | null,
  companyName?: string | null,
  companyDomainURL?: string | null,
  location?: string | null,
  internshipDuration?: number | null,
  weeksMonths?: string | null,
  jobDescription?: string | null,
  skills?: Array< string | null > | null,
  jobRole?: string | null,
  department?: Array< string | null > | null,
  XthPercentage?: number | null,
  IntermediatePercentage?: number | null,
  DiplomaPercentage?: number | null,
  GraduationPercentage?: number | null,
  year?: Array< string | null > | null,
  SelectionProcess?: string | null,
  DateofDrive?: string | null,
  ReportingTime?: string | null,
  aboutCompany?: string | null,
  additionalInformation?: string | null,
  payType?: string | null,
  payRole?: string | null,
  payAmount?: number | null,
  newResume?: boolean | null,
  userID?: string | null,
  adminID?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  round?:  Array<jobRound | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type jobRound = {
  __typename: "jobRound",
  input?: string | null,
};

export type UpdateJobDriveInput = {
  id: string,
  driveObjective?: string | null,
  campus?: Array< string | null > | null,
  division?: string | null,
  driveName?: string | null,
  companyName?: string | null,
  companyDomainURL?: string | null,
  location?: string | null,
  internshipDuration?: number | null,
  weeksMonths?: string | null,
  jobDescription?: string | null,
  skills?: Array< string | null > | null,
  jobRole?: string | null,
  department?: Array< string | null > | null,
  XthPercentage?: number | null,
  IntermediatePercentage?: number | null,
  DiplomaPercentage?: number | null,
  GraduationPercentage?: number | null,
  year?: Array< string | null > | null,
  SelectionProcess?: string | null,
  DateofDrive?: string | null,
  ReportingTime?: string | null,
  aboutCompany?: string | null,
  additionalInformation?: string | null,
  payType?: string | null,
  payRole?: string | null,
  payAmount?: number | null,
  newResume?: boolean | null,
  userID?: string | null,
  adminID?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  round?: Array< JobRoundInput | null > | null,
};

export type DeleteJobDriveInput = {
  id: string,
};

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type company = {
  __typename: "company",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
};

export type DeleteCompanyInput = {
  id: string,
};

export type CreateStudentJobNotificationInput = {
  id?: string | null,
  studentID: string,
  jobID: string,
  roundStatus?: Array< UpdateroundStatusInput | null > | null,
};

export type UpdateroundStatusInput = {
  name?: string | null,
  status?: number | null,
};

export type ModelStudentJobNotificationConditionInput = {
  studentID?: ModelIDInput | null,
  jobID?: ModelIDInput | null,
  and?: Array< ModelStudentJobNotificationConditionInput | null > | null,
  or?: Array< ModelStudentJobNotificationConditionInput | null > | null,
  not?: ModelStudentJobNotificationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type studentJobNotification = {
  __typename: "studentJobNotification",
  id: string,
  studentID: string,
  jobID: string,
  roundStatus?:  Array<updateroundStatus | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type updateroundStatus = {
  __typename: "updateroundStatus",
  name?: string | null,
  status?: number | null,
};

export type UpdateStudentJobNotificationInput = {
  id: string,
  studentID?: string | null,
  jobID?: string | null,
  roundStatus?: Array< UpdateroundStatusInput | null > | null,
};

export type DeleteStudentJobNotificationInput = {
  id: string,
};

export type CreateAssignMeetingStudentsInput = {
  id?: string | null,
  studentID: string,
  meetingID: string,
  attendanceStatus?: number | null,
};

export type ModelAssignMeetingStudentsConditionInput = {
  studentID?: ModelIDInput | null,
  meetingID?: ModelIDInput | null,
  attendanceStatus?: ModelIntInput | null,
  and?: Array< ModelAssignMeetingStudentsConditionInput | null > | null,
  or?: Array< ModelAssignMeetingStudentsConditionInput | null > | null,
  not?: ModelAssignMeetingStudentsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AssignMeetingStudents = {
  __typename: "AssignMeetingStudents",
  id: string,
  studentID: string,
  meetingID: string,
  attendanceStatus?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAssignMeetingStudentsInput = {
  id: string,
  studentID?: string | null,
  meetingID?: string | null,
  attendanceStatus?: number | null,
};

export type DeleteAssignMeetingStudentsInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  rollno?: string | null,
  gender?: string | null,
  DOB?: string | null,
  email: string,
  password: string,
  MobNumber: string,
  username: string,
  role: string,
  status: number,
  permissions?: PermissionsInput | null,
  adminID: string,
  type?: string | null,
  uploadType?: string | null,
  groups?: Array< string | null > | null,
  userID?: string | null,
  organisation?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  Batch?: string | null,
  department?: Array< string | null > | null,
  specialization?: string | null,
  course?: Array< string | null > | null,
  resume?: string | null,
  address?: string | null,
  personName: string,
  personDesignation: string,
  OTP?: string | null,
  branch?: string | null,
  section?: string | null,
  yearOfPassout?: string | null,
  yearOfJoining?: string | null,
  tenthPercentage?: number | null,
  InterPercentage?: number | null,
  diplomaPercentage?: number | null,
  graduationPercentage?: number | null,
  postGraduationPercentage?: number | null,
  Organizationcode?: string | null,
  State?: string | null,
  District?: string | null,
  Pincode?: string | null,
  Website?: string | null,
};

export type PermissionsInput = {
  Jobs: PermissionDetailsInput,
  Courses: PermissionDetailsInput,
  Exams: PermissionDetailsInput,
  Results: PermissionDetailsInput,
  QuestionBank: PermissionDetailsInput,
  Questions: PermissionDetailsInput,
  ContentBank: PermissionDetailsInput,
  Content: PermissionDetailsInput,
  Groups: PermissionDetailsInput,
  Tests: PermissionDetailsInput,
  Drives: PermissionDetailsInput,
  Student: PermissionDetailsInput,
  Reports: PermissionDetailsInput,
  StudentApprove: PermissionDetailsInput,
  StudentReject: PermissionDetailsInput,
  Tutor: PermissionDetailsInput,
  Attendance: PermissionDetailsInput,
  LeaderBoard: PermissionDetailsInput,
};

export type PermissionDetailsInput = {
  showInMenu: string,
  create: string,
  edit: string,
  view: string,
  publisher: string,
  proctorAdmin: string,
  evaluator: string,
  download: string,
  allow: string,
  notallow: string,
};

export type ModelUserConditionInput = {
  rollno?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  DOB?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  MobNumber?: ModelStringInput | null,
  username?: ModelStringInput | null,
  role?: ModelStringInput | null,
  status?: ModelIntInput | null,
  adminID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  uploadType?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  organisation?: ModelStringInput | null,
  hodID?: ModelIDInput | null,
  tutorID?: ModelIDInput | null,
  Batch?: ModelStringInput | null,
  department?: ModelIDInput | null,
  specialization?: ModelStringInput | null,
  course?: ModelIDInput | null,
  resume?: ModelStringInput | null,
  address?: ModelStringInput | null,
  personName?: ModelStringInput | null,
  personDesignation?: ModelStringInput | null,
  OTP?: ModelStringInput | null,
  branch?: ModelStringInput | null,
  section?: ModelStringInput | null,
  yearOfPassout?: ModelStringInput | null,
  yearOfJoining?: ModelStringInput | null,
  tenthPercentage?: ModelIntInput | null,
  InterPercentage?: ModelIntInput | null,
  diplomaPercentage?: ModelIntInput | null,
  graduationPercentage?: ModelIntInput | null,
  postGraduationPercentage?: ModelIntInput | null,
  Organizationcode?: ModelStringInput | null,
  State?: ModelStringInput | null,
  District?: ModelStringInput | null,
  Pincode?: ModelStringInput | null,
  Website?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type user = {
  __typename: "user",
  id: string,
  rollno?: string | null,
  gender?: string | null,
  DOB?: string | null,
  email: string,
  password: string,
  MobNumber: string,
  username: string,
  role: string,
  status: number,
  permissions?: Permissions | null,
  adminID: string,
  type?: string | null,
  uploadType?: string | null,
  groups?: Array< string | null > | null,
  userID?: string | null,
  organisation?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  Batch?: string | null,
  department?: Array< string | null > | null,
  specialization?: string | null,
  course?: Array< string | null > | null,
  resume?: string | null,
  address?: string | null,
  personName: string,
  personDesignation: string,
  OTP?: string | null,
  branch?: string | null,
  section?: string | null,
  yearOfPassout?: string | null,
  yearOfJoining?: string | null,
  tenthPercentage?: number | null,
  InterPercentage?: number | null,
  diplomaPercentage?: number | null,
  graduationPercentage?: number | null,
  postGraduationPercentage?: number | null,
  Organizationcode?: string | null,
  State?: string | null,
  District?: string | null,
  Pincode?: string | null,
  Website?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Permissions = {
  __typename: "Permissions",
  Jobs: PermissionDetails,
  Courses: PermissionDetails,
  Exams: PermissionDetails,
  Results: PermissionDetails,
  QuestionBank: PermissionDetails,
  Questions: PermissionDetails,
  ContentBank: PermissionDetails,
  Content: PermissionDetails,
  Groups: PermissionDetails,
  Tests: PermissionDetails,
  Drives: PermissionDetails,
  Student: PermissionDetails,
  Reports: PermissionDetails,
  StudentApprove: PermissionDetails,
  StudentReject: PermissionDetails,
  Tutor: PermissionDetails,
  Attendance: PermissionDetails,
  LeaderBoard: PermissionDetails,
};

export type PermissionDetails = {
  __typename: "PermissionDetails",
  showInMenu: string,
  create: string,
  edit: string,
  view: string,
  publisher: string,
  proctorAdmin: string,
  evaluator: string,
  download: string,
  allow: string,
  notallow: string,
};

export type UpdateUserInput = {
  id: string,
  rollno?: string | null,
  gender?: string | null,
  DOB?: string | null,
  email?: string | null,
  password?: string | null,
  MobNumber?: string | null,
  username?: string | null,
  role?: string | null,
  status?: number | null,
  permissions?: PermissionsInput | null,
  adminID?: string | null,
  type?: string | null,
  uploadType?: string | null,
  groups?: Array< string | null > | null,
  userID?: string | null,
  organisation?: string | null,
  hodID?: string | null,
  tutorID?: string | null,
  Batch?: string | null,
  department?: Array< string | null > | null,
  specialization?: string | null,
  course?: Array< string | null > | null,
  resume?: string | null,
  address?: string | null,
  personName?: string | null,
  personDesignation?: string | null,
  OTP?: string | null,
  branch?: string | null,
  section?: string | null,
  yearOfPassout?: string | null,
  yearOfJoining?: string | null,
  tenthPercentage?: number | null,
  InterPercentage?: number | null,
  diplomaPercentage?: number | null,
  graduationPercentage?: number | null,
  postGraduationPercentage?: number | null,
  Organizationcode?: string | null,
  State?: string | null,
  District?: string | null,
  Pincode?: string | null,
  Website?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateMeetingsInput = {
  id?: string | null,
  title: string,
  meetingLink: string,
  dateTime: string,
  otp: number,
  userID: string,
  campusID: string,
};

export type ModelMeetingsConditionInput = {
  title?: ModelStringInput | null,
  meetingLink?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  otp?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  campusID?: ModelIDInput | null,
  and?: Array< ModelMeetingsConditionInput | null > | null,
  or?: Array< ModelMeetingsConditionInput | null > | null,
  not?: ModelMeetingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type meetings = {
  __typename: "meetings",
  id: string,
  title: string,
  meetingLink: string,
  dateTime: string,
  otp: number,
  userID: string,
  campusID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMeetingsInput = {
  id: string,
  title?: string | null,
  meetingLink?: string | null,
  dateTime?: string | null,
  otp?: number | null,
  userID?: string | null,
  campusID?: string | null,
};

export type DeleteMeetingsInput = {
  id: string,
};

export type CreateAssignStudentToCourseInput = {
  id?: string | null,
  studentID: string,
  courseID: string,
  type: string,
  amountPaid?: string | null,
  months?: string | null,
  transactionDate?: string | null,
};

export type ModelAssignStudentToCourseConditionInput = {
  studentID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  amountPaid?: ModelStringInput | null,
  months?: ModelStringInput | null,
  transactionDate?: ModelStringInput | null,
  and?: Array< ModelAssignStudentToCourseConditionInput | null > | null,
  or?: Array< ModelAssignStudentToCourseConditionInput | null > | null,
  not?: ModelAssignStudentToCourseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AssignStudentToCourse = {
  __typename: "AssignStudentToCourse",
  id: string,
  studentID: string,
  courseID: string,
  type: string,
  amountPaid?: string | null,
  months?: string | null,
  transactionDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAssignStudentToCourseInput = {
  id: string,
  studentID?: string | null,
  courseID?: string | null,
  type?: string | null,
  amountPaid?: string | null,
  months?: string | null,
  transactionDate?: string | null,
};

export type DeleteAssignStudentToCourseInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelQuestionBankDetailsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  status?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuestionBankDetailsFilterInput | null > | null,
  or?: Array< ModelQuestionBankDetailsFilterInput | null > | null,
  not?: ModelQuestionBankDetailsFilterInput | null,
};

export type ModelQuestionBankDetailsConnection = {
  __typename: "ModelQuestionBankDetailsConnection",
  items:  Array<QuestionBankDetails | null >,
  nextToken?: string | null,
};

export type ModelGroupQuestionsFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  questionBankID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupQuestionsFilterInput | null > | null,
  or?: Array< ModelGroupQuestionsFilterInput | null > | null,
  not?: ModelGroupQuestionsFilterInput | null,
};

export type ModelGroupQuestionsConnection = {
  __typename: "ModelGroupQuestionsConnection",
  items:  Array<GroupQuestions | null >,
  nextToken?: string | null,
};

export type ModelAssessmentFilterInput = {
  id?: ModelIDInput | null,
  testName?: ModelStringInput | null,
  testCode?: ModelStringInput | null,
  testDescription?: ModelStringInput | null,
  testType?: ModelStringInput | null,
  campus?: ModelStringInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAssessmentFilterInput | null > | null,
  or?: Array< ModelAssessmentFilterInput | null > | null,
  not?: ModelAssessmentFilterInput | null,
};

export type ModelAssessmentConnection = {
  __typename: "ModelAssessmentConnection",
  items:  Array<Assessment | null >,
  nextToken?: string | null,
};

export type ModelAssessmentsectionFilterInput = {
  id?: ModelIDInput | null,
  sectionId?: ModelIDInput | null,
  duration?: ModelStringInput | null,
  additionalInformation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAssessmentsectionFilterInput | null > | null,
  or?: Array< ModelAssessmentsectionFilterInput | null > | null,
  not?: ModelAssessmentsectionFilterInput | null,
};

export type ModelAssessmentsectionConnection = {
  __typename: "ModelAssessmentsectionConnection",
  items:  Array<Assessmentsection | null >,
  nextToken?: string | null,
};

export type ModelQuestionsFilterInput = {
  id?: ModelIDInput | null,
  standardInputs?: ModelStringInput | null,
  questionBankID?: ModelIDInput | null,
  questionType?: ModelStringInput | null,
  questionSubType?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  topicId?: ModelIDInput | null,
  directions?: ModelStringInput | null,
  codeEditor?: ModelStringInput | null,
  textEditor?: ModelStringInput | null,
  media?: ModelStringInput | null,
  questionName?: ModelStringInput | null,
  wordLimit?: ModelIntInput | null,
  videoSolution?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  concepts?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  blanksCount?: ModelIntInput | null,
  caseSensitive?: ModelBooleanInput | null,
  QuesDependency?: ModelStringInput | null,
  languages?: ModelIDInput | null,
  SingleLanguage?: ModelStringInput | null,
  inputFormat?: ModelStringInput | null,
  outputFormat?: ModelStringInput | null,
  enableCustomInput?: ModelBooleanInput | null,
  enableAPITesting?: ModelBooleanInput | null,
  codeConstraints?: ModelStringInput | null,
  evaluationTime?: ModelBooleanInput | null,
  timeLimit?: ModelStringInput | null,
  memoryLimit?: ModelStringInput | null,
  outputLimit?: ModelStringInput | null,
  codeSize?: ModelStringInput | null,
  backgroundImg?: ModelStringInput | null,
  initialQuery?: ModelStringInput | null,
  fileCount?: ModelIntInput | null,
  fileCountMandatory?: ModelBooleanInput | null,
  fileFormats?: ModelStringInput | null,
  enableAutoRecord?: ModelBooleanInput | null,
  minRecording?: ModelIntInput | null,
  maxRecording?: ModelIntInput | null,
  attemptsToRecord?: ModelIntInput | null,
  autoEvaluation?: ModelBooleanInput | null,
  cloudProvider?: ModelStringInput | null,
  startTime?: ModelIntInput | null,
  ZipFile?: ModelStringInput | null,
  themes?: ModelStringInput | null,
  fileSizes?: ModelStringInput | null,
  techStack?: ModelIDInput | null,
  instanceSize?: ModelIDInput | null,
  explaination?: ModelStringInput | null,
  compilerOutput?: ModelStringInput | null,
  compilerLanguage?: ModelStringInput | null,
  compilerProgram?: ModelStringInput | null,
  htmlCssJsCode?: ModelStringInput | null,
  groupQuestionID?: ModelIDInput | null,
  questionCode?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuestionsFilterInput | null > | null,
  or?: Array< ModelQuestionsFilterInput | null > | null,
  not?: ModelQuestionsFilterInput | null,
};

export type ModelQuestionsConnection = {
  __typename: "ModelQuestionsConnection",
  items:  Array<Questions | null >,
  nextToken?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  courseName?: ModelStringInput | null,
  courseCode?: ModelStringInput | null,
  PublishingText?: ModelStringInput | null,
  description?: ModelStringInput | null,
  file?: ModelStringInput | null,
  showLeaderBoard?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelStringInput | null,
  batch?: ModelStringInput | null,
  category?: ModelStringInput | null,
  tags?: ModelBooleanInput | null,
  adminID1?: ModelStringInput | null,
  department1?: ModelStringInput | null,
  batch1?: ModelStringInput | null,
  degree?: ModelStringInput | null,
  skuCode?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  hodID?: ModelIDInput | null,
  mediaInputType?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  topicId?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<course | null >,
  nextToken?: string | null,
};

export type ModelCourseCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseCategoryFilterInput | null > | null,
  or?: Array< ModelCourseCategoryFilterInput | null > | null,
  not?: ModelCourseCategoryFilterInput | null,
};

export type ModelCourseCategoryConnection = {
  __typename: "ModelCourseCategoryConnection",
  items:  Array<courseCategory | null >,
  nextToken?: string | null,
};

export type ModelTestContentFilterInput = {
  id?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  testID?: ModelIDInput | null,
  contentID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  timeZone?: ModelStringInput | null,
  fromDate?: ModelStringInput | null,
  toDate?: ModelStringInput | null,
  shuffleQues?: ModelBooleanInput | null,
  shuffleOptions?: ModelBooleanInput | null,
  analyticsReport?: ModelBooleanInput | null,
  hint?: ModelBooleanInput | null,
  result?: ModelBooleanInput | null,
  expectedOutput?: ModelBooleanInput | null,
  testCase?: ModelBooleanInput | null,
  submitCount?: ModelBooleanInput | null,
  lockTest?: ModelBooleanInput | null,
  prevButton?: ModelBooleanInput | null,
  choice?: ModelBooleanInput | null,
  maxQuesMarks?: ModelIntInput | null,
  negMarks?: ModelIntInput | null,
  maxAttend?: ModelBooleanInput | null,
  cutoffMarks?: ModelStringInput | null,
  ruleType?: ModelStringInput | null,
  percentageCondition?: ModelStringInput | null,
  testPercentage?: ModelIntInput | null,
  lockContent?: ModelBooleanInput | null,
  allowDownload?: ModelBooleanInput | null,
  freePreview?: ModelBooleanInput | null,
  limit?: ModelStringInput | null,
  resultPercentage?: ModelIntInput | null,
  maxQuesAttended?: ModelIntInput | null,
  type?: ModelStringInput | null,
  displayQuestions?: ModelStringInput | null,
  marksType?: ModelStringInput | null,
  actualMarks?: ModelStringInput | null,
  status?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTestContentFilterInput | null > | null,
  or?: Array< ModelTestContentFilterInput | null > | null,
  not?: ModelTestContentFilterInput | null,
};

export type ModelTestContentConnection = {
  __typename: "ModelTestContentConnection",
  items:  Array<testContent | null >,
  nextToken?: string | null,
};

export type ModelStudentTestFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  testContentID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  percentage?: ModelStringInput | null,
  totalMarks?: ModelStringInput | null,
  ScoredMarks?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentTestFilterInput | null > | null,
  or?: Array< ModelStudentTestFilterInput | null > | null,
  not?: ModelStudentTestFilterInput | null,
};

export type ModelStudentTestConnection = {
  __typename: "ModelStudentTestConnection",
  items:  Array<studentTest | null >,
  nextToken?: string | null,
};

export type ModelStudentTestQuestionsFilterInput = {
  id?: ModelIDInput | null,
  studentTest?: ModelIDInput | null,
  sectionID?: ModelIDInput | null,
  questionID?: ModelIDInput | null,
  answerOption?: ModelStringInput | null,
  actualMarks?: ModelStringInput | null,
  negativeMarks?: ModelStringInput | null,
  result?: ModelStringInput | null,
  compilerOutput?: ModelStringInput | null,
  compilerLanguage?: ModelStringInput | null,
  compilerProgram?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentTestQuestionsFilterInput | null > | null,
  or?: Array< ModelStudentTestQuestionsFilterInput | null > | null,
  not?: ModelStudentTestQuestionsFilterInput | null,
};

export type ModelStudentTestQuestionsConnection = {
  __typename: "ModelStudentTestQuestionsConnection",
  items:  Array<studentTestQuestions | null >,
  nextToken?: string | null,
};

export type ModelTestFilterInput = {
  id?: ModelIDInput | null,
  nameOfTest?: ModelStringInput | null,
  testCode?: ModelStringInput | null,
  testDescription?: ModelStringInput | null,
  testType?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  hodID?: ModelStringInput | null,
  visibility?: ModelStringInput | null,
  department?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  manualEvaluation?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTestFilterInput | null > | null,
  or?: Array< ModelTestFilterInput | null > | null,
  not?: ModelTestFilterInput | null,
};

export type ModelTestConnection = {
  __typename: "ModelTestConnection",
  items:  Array<Test | null >,
  nextToken?: string | null,
};

export type ModelTestQuestionFilterInput = {
  id?: ModelIDInput | null,
  testID?: ModelIDInput | null,
  sectionID?: ModelIDInput | null,
  questionID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTestQuestionFilterInput | null > | null,
  or?: Array< ModelTestQuestionFilterInput | null > | null,
  not?: ModelTestQuestionFilterInput | null,
};

export type ModelTestQuestionConnection = {
  __typename: "ModelTestQuestionConnection",
  items:  Array<TestQuestion | null >,
  nextToken?: string | null,
};

export type ModelContentBankDetailsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  visibility?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  status?: ModelIntInput | null,
  subject?: ModelStringInput | null,
  topicId?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentBankDetailsFilterInput | null > | null,
  or?: Array< ModelContentBankDetailsFilterInput | null > | null,
  not?: ModelContentBankDetailsFilterInput | null,
};

export type ModelContentBankDetailsConnection = {
  __typename: "ModelContentBankDetailsConnection",
  items:  Array<ContentBankDetails | null >,
  nextToken?: string | null,
};

export type ModelContentFilterInput = {
  id?: ModelIDInput | null,
  contentBankID?: ModelIDInput | null,
  contentType?: ModelStringInput | null,
  contentsubType?: ModelStringInput | null,
  contentName?: ModelStringInput | null,
  subTopic?: ModelStringInput | null,
  topicId?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  content?: ModelStringInput | null,
  averageReadTime?: ModelStringInput | null,
  additionalInformation?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentFilterInput | null > | null,
  or?: Array< ModelContentFilterInput | null > | null,
  not?: ModelContentFilterInput | null,
};

export type ModelContentConnection = {
  __typename: "ModelContentConnection",
  items:  Array<content | null >,
  nextToken?: string | null,
};

export type ModelMyTable2FilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  address?: ModelStringInput | null,
  age?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMyTable2FilterInput | null > | null,
  or?: Array< ModelMyTable2FilterInput | null > | null,
  not?: ModelMyTable2FilterInput | null,
};

export type ModelMyTable2Connection = {
  __typename: "ModelMyTable2Connection",
  items:  Array<myTable2 | null >,
  nextToken?: string | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items:  Array<subject | null >,
  nextToken?: string | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  code?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection",
  items:  Array<topic | null >,
  nextToken?: string | null,
};

export type ModelSubTopicFilterInput = {
  id?: ModelIDInput | null,
  topicID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  code?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubTopicFilterInput | null > | null,
  or?: Array< ModelSubTopicFilterInput | null > | null,
  not?: ModelSubTopicFilterInput | null,
};

export type ModelSubTopicConnection = {
  __typename: "ModelSubTopicConnection",
  items:  Array<subTopic | null >,
  nextToken?: string | null,
};

export type ModelStudentJobAppliedJobFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  jobID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  adminID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentJobAppliedJobFilterInput | null > | null,
  or?: Array< ModelStudentJobAppliedJobFilterInput | null > | null,
  not?: ModelStudentJobAppliedJobFilterInput | null,
};

export type ModelStudentJobAppliedJobConnection = {
  __typename: "ModelStudentJobAppliedJobConnection",
  items:  Array<studentJobAppliedJob | null >,
  nextToken?: string | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<group | null >,
  nextToken?: string | null,
};

export type ModelBranchFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBranchFilterInput | null > | null,
  or?: Array< ModelBranchFilterInput | null > | null,
  not?: ModelBranchFilterInput | null,
};

export type ModelBranchConnection = {
  __typename: "ModelBranchConnection",
  items:  Array<branch | null >,
  nextToken?: string | null,
};

export type ModelYearFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelYearFilterInput | null > | null,
  or?: Array< ModelYearFilterInput | null > | null,
  not?: ModelYearFilterInput | null,
};

export type ModelYearConnection = {
  __typename: "ModelYearConnection",
  items:  Array<year | null >,
  nextToken?: string | null,
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection",
  items:  Array<section | null >,
  nextToken?: string | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<skill | null >,
  nextToken?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<tag | null >,
  nextToken?: string | null,
};

export type ModelBlogCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlogCategoryFilterInput | null > | null,
  or?: Array< ModelBlogCategoryFilterInput | null > | null,
  not?: ModelBlogCategoryFilterInput | null,
};

export type ModelBlogCategoryConnection = {
  __typename: "ModelBlogCategoryConnection",
  items:  Array<blogCategory | null >,
  nextToken?: string | null,
};

export type ModelThemesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelThemesFilterInput | null > | null,
  or?: Array< ModelThemesFilterInput | null > | null,
  not?: ModelThemesFilterInput | null,
};

export type ModelThemesConnection = {
  __typename: "ModelThemesConnection",
  items:  Array<themes | null >,
  nextToken?: string | null,
};

export type ModelLanguageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLanguageFilterInput | null > | null,
  or?: Array< ModelLanguageFilterInput | null > | null,
  not?: ModelLanguageFilterInput | null,
};

export type ModelLanguageConnection = {
  __typename: "ModelLanguageConnection",
  items:  Array<Language | null >,
  nextToken?: string | null,
};

export type ModelBatchFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBatchFilterInput | null > | null,
  or?: Array< ModelBatchFilterInput | null > | null,
  not?: ModelBatchFilterInput | null,
};

export type ModelBatchConnection = {
  __typename: "ModelBatchConnection",
  items:  Array<batch | null >,
  nextToken?: string | null,
};

export type ModelStateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStateFilterInput | null > | null,
  or?: Array< ModelStateFilterInput | null > | null,
  not?: ModelStateFilterInput | null,
};

export type ModelStateConnection = {
  __typename: "ModelStateConnection",
  items:  Array<state | null >,
  nextToken?: string | null,
};

export type ModelDistrictFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDistrictFilterInput | null > | null,
  or?: Array< ModelDistrictFilterInput | null > | null,
  not?: ModelDistrictFilterInput | null,
};

export type ModelDistrictConnection = {
  __typename: "ModelDistrictConnection",
  items:  Array<district | null >,
  nextToken?: string | null,
};

export type ModelSpecializationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSpecializationFilterInput | null > | null,
  or?: Array< ModelSpecializationFilterInput | null > | null,
  not?: ModelSpecializationFilterInput | null,
};

export type ModelSpecializationConnection = {
  __typename: "ModelSpecializationConnection",
  items:  Array<specialization | null >,
  nextToken?: string | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection",
  items:  Array<department | null >,
  nextToken?: string | null,
};

export type ModelTechStackFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTechStackFilterInput | null > | null,
  or?: Array< ModelTechStackFilterInput | null > | null,
  not?: ModelTechStackFilterInput | null,
};

export type ModelTechStackConnection = {
  __typename: "ModelTechStackConnection",
  items:  Array<techStack | null >,
  nextToken?: string | null,
};

export type ModelInstanceSizeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInstanceSizeFilterInput | null > | null,
  or?: Array< ModelInstanceSizeFilterInput | null > | null,
  not?: ModelInstanceSizeFilterInput | null,
};

export type ModelInstanceSizeConnection = {
  __typename: "ModelInstanceSizeConnection",
  items:  Array<instanceSize | null >,
  nextToken?: string | null,
};

export type ModelProgrammerSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProgrammerSubjectFilterInput | null > | null,
  or?: Array< ModelProgrammerSubjectFilterInput | null > | null,
  not?: ModelProgrammerSubjectFilterInput | null,
};

export type ModelProgrammerSubjectConnection = {
  __typename: "ModelProgrammerSubjectConnection",
  items:  Array<programmerSubject | null >,
  nextToken?: string | null,
};

export type ModelProgrammerTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProgrammerTopicFilterInput | null > | null,
  or?: Array< ModelProgrammerTopicFilterInput | null > | null,
  not?: ModelProgrammerTopicFilterInput | null,
};

export type ModelProgrammerTopicConnection = {
  __typename: "ModelProgrammerTopicConnection",
  items:  Array<programmerTopic | null >,
  nextToken?: string | null,
};

export type ModelProgrammerLevelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProgrammerLevelFilterInput | null > | null,
  or?: Array< ModelProgrammerLevelFilterInput | null > | null,
  not?: ModelProgrammerLevelFilterInput | null,
};

export type ModelProgrammerLevelConnection = {
  __typename: "ModelProgrammerLevelConnection",
  items:  Array<programmerLevel | null >,
  nextToken?: string | null,
};

export type ModelStudentSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentSectionFilterInput | null > | null,
  or?: Array< ModelStudentSectionFilterInput | null > | null,
  not?: ModelStudentSectionFilterInput | null,
};

export type ModelStudentSectionConnection = {
  __typename: "ModelStudentSectionConnection",
  items:  Array<StudentSection | null >,
  nextToken?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  catergory?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  adminID?: ModelIDInput | null,
  hodID?: ModelIDInput | null,
  tutorID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<blog | null >,
  nextToken?: string | null,
};

export type ModelJobDriveFilterInput = {
  id?: ModelIDInput | null,
  driveObjective?: ModelStringInput | null,
  campus?: ModelStringInput | null,
  division?: ModelStringInput | null,
  driveName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  companyDomainURL?: ModelStringInput | null,
  location?: ModelStringInput | null,
  internshipDuration?: ModelIntInput | null,
  weeksMonths?: ModelStringInput | null,
  jobDescription?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  jobRole?: ModelStringInput | null,
  department?: ModelStringInput | null,
  XthPercentage?: ModelIntInput | null,
  IntermediatePercentage?: ModelIntInput | null,
  DiplomaPercentage?: ModelIntInput | null,
  GraduationPercentage?: ModelIntInput | null,
  year?: ModelStringInput | null,
  SelectionProcess?: ModelStringInput | null,
  DateofDrive?: ModelStringInput | null,
  ReportingTime?: ModelStringInput | null,
  aboutCompany?: ModelStringInput | null,
  additionalInformation?: ModelStringInput | null,
  payType?: ModelStringInput | null,
  payRole?: ModelStringInput | null,
  payAmount?: ModelIntInput | null,
  newResume?: ModelBooleanInput | null,
  userID?: ModelStringInput | null,
  adminID?: ModelStringInput | null,
  hodID?: ModelStringInput | null,
  tutorID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJobDriveFilterInput | null > | null,
  or?: Array< ModelJobDriveFilterInput | null > | null,
  not?: ModelJobDriveFilterInput | null,
};

export type ModelJobDriveConnection = {
  __typename: "ModelJobDriveConnection",
  items:  Array<jobDrive | null >,
  nextToken?: string | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<company | null >,
  nextToken?: string | null,
};

export type ModelStudentJobNotificationFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  jobID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentJobNotificationFilterInput | null > | null,
  or?: Array< ModelStudentJobNotificationFilterInput | null > | null,
  not?: ModelStudentJobNotificationFilterInput | null,
};

export type ModelStudentJobNotificationConnection = {
  __typename: "ModelStudentJobNotificationConnection",
  items:  Array<studentJobNotification | null >,
  nextToken?: string | null,
};

export type ModelAssignMeetingStudentsFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  meetingID?: ModelIDInput | null,
  attendanceStatus?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAssignMeetingStudentsFilterInput | null > | null,
  or?: Array< ModelAssignMeetingStudentsFilterInput | null > | null,
  not?: ModelAssignMeetingStudentsFilterInput | null,
};

export type ModelAssignMeetingStudentsConnection = {
  __typename: "ModelAssignMeetingStudentsConnection",
  items:  Array<AssignMeetingStudents | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  rollno?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  DOB?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  MobNumber?: ModelStringInput | null,
  username?: ModelStringInput | null,
  role?: ModelStringInput | null,
  status?: ModelIntInput | null,
  adminID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  uploadType?: ModelStringInput | null,
  groups?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  organisation?: ModelStringInput | null,
  hodID?: ModelIDInput | null,
  tutorID?: ModelIDInput | null,
  Batch?: ModelStringInput | null,
  department?: ModelIDInput | null,
  specialization?: ModelStringInput | null,
  course?: ModelIDInput | null,
  resume?: ModelStringInput | null,
  address?: ModelStringInput | null,
  personName?: ModelStringInput | null,
  personDesignation?: ModelStringInput | null,
  OTP?: ModelStringInput | null,
  branch?: ModelStringInput | null,
  section?: ModelStringInput | null,
  yearOfPassout?: ModelStringInput | null,
  yearOfJoining?: ModelStringInput | null,
  tenthPercentage?: ModelIntInput | null,
  InterPercentage?: ModelIntInput | null,
  diplomaPercentage?: ModelIntInput | null,
  graduationPercentage?: ModelIntInput | null,
  postGraduationPercentage?: ModelIntInput | null,
  Organizationcode?: ModelStringInput | null,
  State?: ModelStringInput | null,
  District?: ModelStringInput | null,
  Pincode?: ModelStringInput | null,
  Website?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<user | null >,
  nextToken?: string | null,
};

export type ModelMeetingsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  meetingLink?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  otp?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  campusID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMeetingsFilterInput | null > | null,
  or?: Array< ModelMeetingsFilterInput | null > | null,
  not?: ModelMeetingsFilterInput | null,
};

export type ModelMeetingsConnection = {
  __typename: "ModelMeetingsConnection",
  items:  Array<meetings | null >,
  nextToken?: string | null,
};

export type ModelAssignStudentToCourseFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  courseID?: ModelIDInput | null,
  type?: ModelStringInput | null,
  amountPaid?: ModelStringInput | null,
  months?: ModelStringInput | null,
  transactionDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAssignStudentToCourseFilterInput | null > | null,
  or?: Array< ModelAssignStudentToCourseFilterInput | null > | null,
  not?: ModelAssignStudentToCourseFilterInput | null,
};

export type ModelAssignStudentToCourseConnection = {
  __typename: "ModelAssignStudentToCourseConnection",
  items:  Array<AssignStudentToCourse | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionQuestionBankDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuestionBankDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionBankDetailsFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionGroupQuestionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  questionBankID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupQuestionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupQuestionsFilterInput | null > | null,
};

export type ModelSubscriptionAssessmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  testName?: ModelSubscriptionStringInput | null,
  testCode?: ModelSubscriptionStringInput | null,
  testDescription?: ModelSubscriptionStringInput | null,
  testType?: ModelSubscriptionStringInput | null,
  campus?: ModelSubscriptionStringInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAssessmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssessmentFilterInput | null > | null,
};

export type ModelSubscriptionAssessmentsectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sectionId?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionStringInput | null,
  additionalInformation?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAssessmentsectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssessmentsectionFilterInput | null > | null,
};

export type ModelSubscriptionQuestionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  standardInputs?: ModelSubscriptionStringInput | null,
  questionBankID?: ModelSubscriptionIDInput | null,
  questionType?: ModelSubscriptionStringInput | null,
  questionSubType?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  topicId?: ModelSubscriptionIDInput | null,
  directions?: ModelSubscriptionStringInput | null,
  codeEditor?: ModelSubscriptionStringInput | null,
  textEditor?: ModelSubscriptionStringInput | null,
  media?: ModelSubscriptionStringInput | null,
  questionName?: ModelSubscriptionStringInput | null,
  wordLimit?: ModelSubscriptionIntInput | null,
  videoSolution?: ModelSubscriptionStringInput | null,
  subTopic?: ModelSubscriptionStringInput | null,
  concepts?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  blanksCount?: ModelSubscriptionIntInput | null,
  caseSensitive?: ModelSubscriptionBooleanInput | null,
  QuesDependency?: ModelSubscriptionStringInput | null,
  languages?: ModelSubscriptionIDInput | null,
  SingleLanguage?: ModelSubscriptionStringInput | null,
  inputFormat?: ModelSubscriptionStringInput | null,
  outputFormat?: ModelSubscriptionStringInput | null,
  enableCustomInput?: ModelSubscriptionBooleanInput | null,
  enableAPITesting?: ModelSubscriptionBooleanInput | null,
  codeConstraints?: ModelSubscriptionStringInput | null,
  evaluationTime?: ModelSubscriptionBooleanInput | null,
  timeLimit?: ModelSubscriptionStringInput | null,
  memoryLimit?: ModelSubscriptionStringInput | null,
  outputLimit?: ModelSubscriptionStringInput | null,
  codeSize?: ModelSubscriptionStringInput | null,
  backgroundImg?: ModelSubscriptionStringInput | null,
  initialQuery?: ModelSubscriptionStringInput | null,
  fileCount?: ModelSubscriptionIntInput | null,
  fileCountMandatory?: ModelSubscriptionBooleanInput | null,
  fileFormats?: ModelSubscriptionStringInput | null,
  enableAutoRecord?: ModelSubscriptionBooleanInput | null,
  minRecording?: ModelSubscriptionIntInput | null,
  maxRecording?: ModelSubscriptionIntInput | null,
  attemptsToRecord?: ModelSubscriptionIntInput | null,
  autoEvaluation?: ModelSubscriptionBooleanInput | null,
  cloudProvider?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionIntInput | null,
  ZipFile?: ModelSubscriptionStringInput | null,
  themes?: ModelSubscriptionStringInput | null,
  fileSizes?: ModelSubscriptionStringInput | null,
  techStack?: ModelSubscriptionIDInput | null,
  instanceSize?: ModelSubscriptionIDInput | null,
  explaination?: ModelSubscriptionStringInput | null,
  compilerOutput?: ModelSubscriptionStringInput | null,
  compilerLanguage?: ModelSubscriptionStringInput | null,
  compilerProgram?: ModelSubscriptionStringInput | null,
  htmlCssJsCode?: ModelSubscriptionStringInput | null,
  groupQuestionID?: ModelSubscriptionIDInput | null,
  questionCode?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuestionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  courseName?: ModelSubscriptionStringInput | null,
  courseCode?: ModelSubscriptionStringInput | null,
  PublishingText?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  file?: ModelSubscriptionStringInput | null,
  showLeaderBoard?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionStringInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionStringInput | null,
  batch?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionBooleanInput | null,
  adminID1?: ModelSubscriptionStringInput | null,
  department1?: ModelSubscriptionStringInput | null,
  batch1?: ModelSubscriptionStringInput | null,
  degree?: ModelSubscriptionStringInput | null,
  skuCode?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  hodID?: ModelSubscriptionIDInput | null,
  mediaInputType?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  topicId?: ModelSubscriptionStringInput | null,
  subTopic?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionCourseCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseCategoryFilterInput | null > | null,
};

export type ModelSubscriptionTestContentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  courseID?: ModelSubscriptionIDInput | null,
  testID?: ModelSubscriptionIDInput | null,
  contentID?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  timeZone?: ModelSubscriptionStringInput | null,
  fromDate?: ModelSubscriptionStringInput | null,
  toDate?: ModelSubscriptionStringInput | null,
  shuffleQues?: ModelSubscriptionBooleanInput | null,
  shuffleOptions?: ModelSubscriptionBooleanInput | null,
  analyticsReport?: ModelSubscriptionBooleanInput | null,
  hint?: ModelSubscriptionBooleanInput | null,
  result?: ModelSubscriptionBooleanInput | null,
  expectedOutput?: ModelSubscriptionBooleanInput | null,
  testCase?: ModelSubscriptionBooleanInput | null,
  submitCount?: ModelSubscriptionBooleanInput | null,
  lockTest?: ModelSubscriptionBooleanInput | null,
  prevButton?: ModelSubscriptionBooleanInput | null,
  choice?: ModelSubscriptionBooleanInput | null,
  maxQuesMarks?: ModelSubscriptionIntInput | null,
  negMarks?: ModelSubscriptionIntInput | null,
  maxAttend?: ModelSubscriptionBooleanInput | null,
  cutoffMarks?: ModelSubscriptionStringInput | null,
  ruleType?: ModelSubscriptionStringInput | null,
  percentageCondition?: ModelSubscriptionStringInput | null,
  testPercentage?: ModelSubscriptionIntInput | null,
  lockContent?: ModelSubscriptionBooleanInput | null,
  allowDownload?: ModelSubscriptionBooleanInput | null,
  freePreview?: ModelSubscriptionBooleanInput | null,
  limit?: ModelSubscriptionStringInput | null,
  resultPercentage?: ModelSubscriptionIntInput | null,
  maxQuesAttended?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  displayQuestions?: ModelSubscriptionStringInput | null,
  marksType?: ModelSubscriptionStringInput | null,
  actualMarks?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTestContentFilterInput | null > | null,
  or?: Array< ModelSubscriptionTestContentFilterInput | null > | null,
};

export type ModelSubscriptionStudentTestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  testContentID?: ModelSubscriptionIDInput | null,
  courseID?: ModelSubscriptionIDInput | null,
  percentage?: ModelSubscriptionStringInput | null,
  totalMarks?: ModelSubscriptionStringInput | null,
  ScoredMarks?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentTestFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentTestFilterInput | null > | null,
};

export type ModelSubscriptionStudentTestQuestionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentTest?: ModelSubscriptionIDInput | null,
  sectionID?: ModelSubscriptionIDInput | null,
  questionID?: ModelSubscriptionIDInput | null,
  answerOption?: ModelSubscriptionStringInput | null,
  actualMarks?: ModelSubscriptionStringInput | null,
  negativeMarks?: ModelSubscriptionStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  compilerOutput?: ModelSubscriptionStringInput | null,
  compilerLanguage?: ModelSubscriptionStringInput | null,
  compilerProgram?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentTestQuestionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentTestQuestionsFilterInput | null > | null,
};

export type ModelSubscriptionTestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nameOfTest?: ModelSubscriptionStringInput | null,
  testCode?: ModelSubscriptionStringInput | null,
  testDescription?: ModelSubscriptionStringInput | null,
  testType?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionStringInput | null,
  hodID?: ModelSubscriptionStringInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  manualEvaluation?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTestFilterInput | null > | null,
  or?: Array< ModelSubscriptionTestFilterInput | null > | null,
};

export type ModelSubscriptionTestQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  testID?: ModelSubscriptionIDInput | null,
  sectionID?: ModelSubscriptionIDInput | null,
  questionID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTestQuestionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTestQuestionFilterInput | null > | null,
};

export type ModelSubscriptionContentBankDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  groups?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionIntInput | null,
  subject?: ModelSubscriptionStringInput | null,
  topicId?: ModelSubscriptionStringInput | null,
  subTopic?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentBankDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentBankDetailsFilterInput | null > | null,
};

export type ModelSubscriptionContentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  contentBankID?: ModelSubscriptionIDInput | null,
  contentType?: ModelSubscriptionStringInput | null,
  contentsubType?: ModelSubscriptionStringInput | null,
  contentName?: ModelSubscriptionStringInput | null,
  subTopic?: ModelSubscriptionStringInput | null,
  topicId?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  averageReadTime?: ModelSubscriptionStringInput | null,
  additionalInformation?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentFilterInput | null > | null,
};

export type ModelSubscriptionMyTable2FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMyTable2FilterInput | null > | null,
  or?: Array< ModelSubscriptionMyTable2FilterInput | null > | null,
};

export type ModelSubscriptionSubjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  code?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubjectFilterInput | null > | null,
};

export type ModelSubscriptionTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  subjectID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  code?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionTopicFilterInput | null > | null,
};

export type ModelSubscriptionSubTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  topicID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  code?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubTopicFilterInput | null > | null,
};

export type ModelSubscriptionStudentJobAppliedJobFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  jobID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentJobAppliedJobFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentJobAppliedJobFilterInput | null > | null,
};

export type ModelSubscriptionGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionGroupFilterInput | null > | null,
};

export type ModelSubscriptionBranchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBranchFilterInput | null > | null,
  or?: Array< ModelSubscriptionBranchFilterInput | null > | null,
};

export type ModelSubscriptionYearFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionYearFilterInput | null > | null,
  or?: Array< ModelSubscriptionYearFilterInput | null > | null,
};

export type ModelSubscriptionSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSectionFilterInput | null > | null,
};

export type ModelSubscriptionSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillFilterInput | null > | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionBlogCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogCategoryFilterInput | null > | null,
};

export type ModelSubscriptionThemesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionThemesFilterInput | null > | null,
  or?: Array< ModelSubscriptionThemesFilterInput | null > | null,
};

export type ModelSubscriptionLanguageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLanguageFilterInput | null > | null,
  or?: Array< ModelSubscriptionLanguageFilterInput | null > | null,
};

export type ModelSubscriptionBatchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBatchFilterInput | null > | null,
  or?: Array< ModelSubscriptionBatchFilterInput | null > | null,
};

export type ModelSubscriptionStateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStateFilterInput | null > | null,
  or?: Array< ModelSubscriptionStateFilterInput | null > | null,
};

export type ModelSubscriptionDistrictFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDistrictFilterInput | null > | null,
  or?: Array< ModelSubscriptionDistrictFilterInput | null > | null,
};

export type ModelSubscriptionSpecializationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSpecializationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSpecializationFilterInput | null > | null,
};

export type ModelSubscriptionDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
};

export type ModelSubscriptionTechStackFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTechStackFilterInput | null > | null,
  or?: Array< ModelSubscriptionTechStackFilterInput | null > | null,
};

export type ModelSubscriptionInstanceSizeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInstanceSizeFilterInput | null > | null,
  or?: Array< ModelSubscriptionInstanceSizeFilterInput | null > | null,
};

export type ModelSubscriptionProgrammerSubjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgrammerSubjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgrammerSubjectFilterInput | null > | null,
};

export type ModelSubscriptionProgrammerTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgrammerTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgrammerTopicFilterInput | null > | null,
};

export type ModelSubscriptionProgrammerLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgrammerLevelFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgrammerLevelFilterInput | null > | null,
};

export type ModelSubscriptionStudentSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentSectionFilterInput | null > | null,
};

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  catergory?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  hodID?: ModelSubscriptionIDInput | null,
  tutorID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
};

export type ModelSubscriptionJobDriveFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  driveObjective?: ModelSubscriptionStringInput | null,
  campus?: ModelSubscriptionStringInput | null,
  division?: ModelSubscriptionStringInput | null,
  driveName?: ModelSubscriptionStringInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  companyDomainURL?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  internshipDuration?: ModelSubscriptionIntInput | null,
  weeksMonths?: ModelSubscriptionStringInput | null,
  jobDescription?: ModelSubscriptionStringInput | null,
  skills?: ModelSubscriptionStringInput | null,
  jobRole?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionStringInput | null,
  XthPercentage?: ModelSubscriptionIntInput | null,
  IntermediatePercentage?: ModelSubscriptionIntInput | null,
  DiplomaPercentage?: ModelSubscriptionIntInput | null,
  GraduationPercentage?: ModelSubscriptionIntInput | null,
  year?: ModelSubscriptionStringInput | null,
  SelectionProcess?: ModelSubscriptionStringInput | null,
  DateofDrive?: ModelSubscriptionStringInput | null,
  ReportingTime?: ModelSubscriptionStringInput | null,
  aboutCompany?: ModelSubscriptionStringInput | null,
  additionalInformation?: ModelSubscriptionStringInput | null,
  payType?: ModelSubscriptionStringInput | null,
  payRole?: ModelSubscriptionStringInput | null,
  payAmount?: ModelSubscriptionIntInput | null,
  newResume?: ModelSubscriptionBooleanInput | null,
  userID?: ModelSubscriptionStringInput | null,
  adminID?: ModelSubscriptionStringInput | null,
  hodID?: ModelSubscriptionStringInput | null,
  tutorID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJobDriveFilterInput | null > | null,
  or?: Array< ModelSubscriptionJobDriveFilterInput | null > | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
};

export type ModelSubscriptionStudentJobNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  jobID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentJobNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentJobNotificationFilterInput | null > | null,
};

export type ModelSubscriptionAssignMeetingStudentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  meetingID?: ModelSubscriptionIDInput | null,
  attendanceStatus?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAssignMeetingStudentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssignMeetingStudentsFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rollno?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  DOB?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  MobNumber?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionIntInput | null,
  adminID?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  uploadType?: ModelSubscriptionStringInput | null,
  groups?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  organisation?: ModelSubscriptionStringInput | null,
  hodID?: ModelSubscriptionIDInput | null,
  tutorID?: ModelSubscriptionIDInput | null,
  Batch?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionIDInput | null,
  specialization?: ModelSubscriptionStringInput | null,
  course?: ModelSubscriptionIDInput | null,
  resume?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  personName?: ModelSubscriptionStringInput | null,
  personDesignation?: ModelSubscriptionStringInput | null,
  OTP?: ModelSubscriptionStringInput | null,
  branch?: ModelSubscriptionStringInput | null,
  section?: ModelSubscriptionStringInput | null,
  yearOfPassout?: ModelSubscriptionStringInput | null,
  yearOfJoining?: ModelSubscriptionStringInput | null,
  tenthPercentage?: ModelSubscriptionIntInput | null,
  InterPercentage?: ModelSubscriptionIntInput | null,
  diplomaPercentage?: ModelSubscriptionIntInput | null,
  graduationPercentage?: ModelSubscriptionIntInput | null,
  postGraduationPercentage?: ModelSubscriptionIntInput | null,
  Organizationcode?: ModelSubscriptionStringInput | null,
  State?: ModelSubscriptionStringInput | null,
  District?: ModelSubscriptionStringInput | null,
  Pincode?: ModelSubscriptionStringInput | null,
  Website?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionMeetingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  meetingLink?: ModelSubscriptionStringInput | null,
  dateTime?: ModelSubscriptionStringInput | null,
  otp?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  campusID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMeetingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionMeetingsFilterInput | null > | null,
};

export type ModelSubscriptionAssignStudentToCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  courseID?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  amountPaid?: ModelSubscriptionStringInput | null,
  months?: ModelSubscriptionStringInput | null,
  transactionDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAssignStudentToCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionAssignStudentToCourseFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionBankDetailsMutationVariables = {
  input: CreateQuestionBankDetailsInput,
  condition?: ModelQuestionBankDetailsConditionInput | null,
};

export type CreateQuestionBankDetailsMutation = {
  createQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionBankDetailsMutationVariables = {
  input: UpdateQuestionBankDetailsInput,
  condition?: ModelQuestionBankDetailsConditionInput | null,
};

export type UpdateQuestionBankDetailsMutation = {
  updateQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionBankDetailsMutationVariables = {
  input: DeleteQuestionBankDetailsInput,
  condition?: ModelQuestionBankDetailsConditionInput | null,
};

export type DeleteQuestionBankDetailsMutation = {
  deleteQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupQuestionsMutationVariables = {
  input: CreateGroupQuestionsInput,
  condition?: ModelGroupQuestionsConditionInput | null,
};

export type CreateGroupQuestionsMutation = {
  createGroupQuestions?:  {
    __typename: "GroupQuestions",
    id: string,
    content: string,
    questionBankID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupQuestionsMutationVariables = {
  input: UpdateGroupQuestionsInput,
  condition?: ModelGroupQuestionsConditionInput | null,
};

export type UpdateGroupQuestionsMutation = {
  updateGroupQuestions?:  {
    __typename: "GroupQuestions",
    id: string,
    content: string,
    questionBankID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupQuestionsMutationVariables = {
  input: DeleteGroupQuestionsInput,
  condition?: ModelGroupQuestionsConditionInput | null,
};

export type DeleteGroupQuestionsMutation = {
  deleteGroupQuestions?:  {
    __typename: "GroupQuestions",
    id: string,
    content: string,
    questionBankID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssessmentMutationVariables = {
  input: CreateAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type CreateAssessmentMutation = {
  createAssessment?:  {
    __typename: "Assessment",
    id: string,
    testName: string,
    testCode?: string | null,
    testDescription?: string | null,
    testType: string,
    campus: Array< string | null >,
    visibility?: string | null,
    department?: string | null,
    tags: Array< string | null >,
    section?:  Array< {
      __typename: "Assessmentsection",
      id: string,
      sectionId: string,
      duration?: string | null,
      additionalInformation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssessmentMutationVariables = {
  input: UpdateAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type UpdateAssessmentMutation = {
  updateAssessment?:  {
    __typename: "Assessment",
    id: string,
    testName: string,
    testCode?: string | null,
    testDescription?: string | null,
    testType: string,
    campus: Array< string | null >,
    visibility?: string | null,
    department?: string | null,
    tags: Array< string | null >,
    section?:  Array< {
      __typename: "Assessmentsection",
      id: string,
      sectionId: string,
      duration?: string | null,
      additionalInformation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssessmentMutationVariables = {
  input: DeleteAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type DeleteAssessmentMutation = {
  deleteAssessment?:  {
    __typename: "Assessment",
    id: string,
    testName: string,
    testCode?: string | null,
    testDescription?: string | null,
    testType: string,
    campus: Array< string | null >,
    visibility?: string | null,
    department?: string | null,
    tags: Array< string | null >,
    section?:  Array< {
      __typename: "Assessmentsection",
      id: string,
      sectionId: string,
      duration?: string | null,
      additionalInformation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssessmentsectionMutationVariables = {
  input: CreateAssessmentsectionInput,
  condition?: ModelAssessmentsectionConditionInput | null,
};

export type CreateAssessmentsectionMutation = {
  createAssessmentsection?:  {
    __typename: "Assessmentsection",
    id: string,
    sectionId: string,
    duration?: string | null,
    additionalInformation?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssessmentsectionMutationVariables = {
  input: UpdateAssessmentsectionInput,
  condition?: ModelAssessmentsectionConditionInput | null,
};

export type UpdateAssessmentsectionMutation = {
  updateAssessmentsection?:  {
    __typename: "Assessmentsection",
    id: string,
    sectionId: string,
    duration?: string | null,
    additionalInformation?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssessmentsectionMutationVariables = {
  input: DeleteAssessmentsectionInput,
  condition?: ModelAssessmentsectionConditionInput | null,
};

export type DeleteAssessmentsectionMutation = {
  deleteAssessmentsection?:  {
    __typename: "Assessmentsection",
    id: string,
    sectionId: string,
    duration?: string | null,
    additionalInformation?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionsMutationVariables = {
  input: CreateQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type CreateQuestionsMutation = {
  createQuestions?:  {
    __typename: "Questions",
    id: string,
    standardInputs?: string | null,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topicId: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options?:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage?: number | null,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: boolean | null,
      fullMarksIfAnyCorrect?: boolean | null,
      fullMarksOnlyIfAllCorrect?: boolean | null,
    } | null > | null,
    solution?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    hint?:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null > | null,
    media?: string | null,
    questionName?: string | null,
    wordLimit?: number | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub?: string | null,
      progTopic?: string | null,
      progLevel?: string | null,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID?: string | null,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    explaination?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    htmlCssJsCode?: string | null,
    groupQuestionID?: string | null,
    questionCode?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionsMutationVariables = {
  input: UpdateQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type UpdateQuestionsMutation = {
  updateQuestions?:  {
    __typename: "Questions",
    id: string,
    standardInputs?: string | null,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topicId: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options?:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage?: number | null,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: boolean | null,
      fullMarksIfAnyCorrect?: boolean | null,
      fullMarksOnlyIfAllCorrect?: boolean | null,
    } | null > | null,
    solution?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    hint?:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null > | null,
    media?: string | null,
    questionName?: string | null,
    wordLimit?: number | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub?: string | null,
      progTopic?: string | null,
      progLevel?: string | null,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID?: string | null,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    explaination?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    htmlCssJsCode?: string | null,
    groupQuestionID?: string | null,
    questionCode?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionsMutationVariables = {
  input: DeleteQuestionsInput,
  condition?: ModelQuestionsConditionInput | null,
};

export type DeleteQuestionsMutation = {
  deleteQuestions?:  {
    __typename: "Questions",
    id: string,
    standardInputs?: string | null,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topicId: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options?:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage?: number | null,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: boolean | null,
      fullMarksIfAnyCorrect?: boolean | null,
      fullMarksOnlyIfAllCorrect?: boolean | null,
    } | null > | null,
    solution?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    hint?:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null > | null,
    media?: string | null,
    questionName?: string | null,
    wordLimit?: number | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub?: string | null,
      progTopic?: string | null,
      progLevel?: string | null,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID?: string | null,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    explaination?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    htmlCssJsCode?: string | null,
    groupQuestionID?: string | null,
    questionCode?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "course",
    id: string,
    courseName?: string | null,
    courseCode?: string | null,
    PublishingText?: string | null,
    description?: string | null,
    file?: string | null,
    showLeaderBoard?: string | null,
    adminID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    batch?: Array< string | null > | null,
    category?: string | null,
    tags?: boolean | null,
    adminID1?: string | null,
    department1?: string | null,
    batch1?: string | null,
    degree?: string | null,
    skuCode?: string | null,
    userID?: string | null,
    hodID?: string | null,
    mediaInputType?: string | null,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    courseValidity?:  Array< {
      __typename: "courseValidity",
      months?: string | null,
      price?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "course",
    id: string,
    courseName?: string | null,
    courseCode?: string | null,
    PublishingText?: string | null,
    description?: string | null,
    file?: string | null,
    showLeaderBoard?: string | null,
    adminID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    batch?: Array< string | null > | null,
    category?: string | null,
    tags?: boolean | null,
    adminID1?: string | null,
    department1?: string | null,
    batch1?: string | null,
    degree?: string | null,
    skuCode?: string | null,
    userID?: string | null,
    hodID?: string | null,
    mediaInputType?: string | null,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    courseValidity?:  Array< {
      __typename: "courseValidity",
      months?: string | null,
      price?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "course",
    id: string,
    courseName?: string | null,
    courseCode?: string | null,
    PublishingText?: string | null,
    description?: string | null,
    file?: string | null,
    showLeaderBoard?: string | null,
    adminID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    batch?: Array< string | null > | null,
    category?: string | null,
    tags?: boolean | null,
    adminID1?: string | null,
    department1?: string | null,
    batch1?: string | null,
    degree?: string | null,
    skuCode?: string | null,
    userID?: string | null,
    hodID?: string | null,
    mediaInputType?: string | null,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    courseValidity?:  Array< {
      __typename: "courseValidity",
      months?: string | null,
      price?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseCategoryMutationVariables = {
  input: CreateCourseCategoryInput,
  condition?: ModelCourseCategoryConditionInput | null,
};

export type CreateCourseCategoryMutation = {
  createCourseCategory?:  {
    __typename: "courseCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseCategoryMutationVariables = {
  input: UpdateCourseCategoryInput,
  condition?: ModelCourseCategoryConditionInput | null,
};

export type UpdateCourseCategoryMutation = {
  updateCourseCategory?:  {
    __typename: "courseCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseCategoryMutationVariables = {
  input: DeleteCourseCategoryInput,
  condition?: ModelCourseCategoryConditionInput | null,
};

export type DeleteCourseCategoryMutation = {
  deleteCourseCategory?:  {
    __typename: "courseCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTestContentMutationVariables = {
  input: CreateTestContentInput,
  condition?: ModelTestContentConditionInput | null,
};

export type CreateTestContentMutation = {
  createTestContent?:  {
    __typename: "testContent",
    id: string,
    courseID?: string | null,
    testID?: string | null,
    contentID?: string | null,
    description?: string | null,
    timeZone?: string | null,
    fromDate?: string | null,
    toDate?: string | null,
    shuffleQues?: boolean | null,
    shuffleOptions?: boolean | null,
    analyticsReport?: boolean | null,
    hint?: boolean | null,
    result?: boolean | null,
    expectedOutput?: boolean | null,
    testCase?: boolean | null,
    submitCount?: boolean | null,
    lockTest?: boolean | null,
    prevButton?: boolean | null,
    choice?: boolean | null,
    maxQuesMarks?: number | null,
    negMarks?: number | null,
    maxAttend?: boolean | null,
    cutoffMarks?: string | null,
    ruleType?: string | null,
    percentageCondition?: string | null,
    testPercentage?: number | null,
    lockContent?: boolean | null,
    allowDownload?: boolean | null,
    freePreview?: boolean | null,
    limit?: string | null,
    resultPercentage?: number | null,
    maxQuesAttended?: number | null,
    type?: string | null,
    displayQuestions?: string | null,
    timer?:  {
      __typename: "Timer",
      hours?: number | null,
      minutes?: number | null,
      seconds?: number | null,
    } | null,
    sectionWiseMarks?:  Array< {
      __typename: "sectionWiseMarks",
      sectionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    QuestionWiseMarks?:  Array< {
      __typename: "QuestionWiseMarks",
      sectionID?: string | null,
      questionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    marksType?: string | null,
    actualMarks?: string | null,
    status?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTestContentMutationVariables = {
  input: UpdateTestContentInput,
  condition?: ModelTestContentConditionInput | null,
};

export type UpdateTestContentMutation = {
  updateTestContent?:  {
    __typename: "testContent",
    id: string,
    courseID?: string | null,
    testID?: string | null,
    contentID?: string | null,
    description?: string | null,
    timeZone?: string | null,
    fromDate?: string | null,
    toDate?: string | null,
    shuffleQues?: boolean | null,
    shuffleOptions?: boolean | null,
    analyticsReport?: boolean | null,
    hint?: boolean | null,
    result?: boolean | null,
    expectedOutput?: boolean | null,
    testCase?: boolean | null,
    submitCount?: boolean | null,
    lockTest?: boolean | null,
    prevButton?: boolean | null,
    choice?: boolean | null,
    maxQuesMarks?: number | null,
    negMarks?: number | null,
    maxAttend?: boolean | null,
    cutoffMarks?: string | null,
    ruleType?: string | null,
    percentageCondition?: string | null,
    testPercentage?: number | null,
    lockContent?: boolean | null,
    allowDownload?: boolean | null,
    freePreview?: boolean | null,
    limit?: string | null,
    resultPercentage?: number | null,
    maxQuesAttended?: number | null,
    type?: string | null,
    displayQuestions?: string | null,
    timer?:  {
      __typename: "Timer",
      hours?: number | null,
      minutes?: number | null,
      seconds?: number | null,
    } | null,
    sectionWiseMarks?:  Array< {
      __typename: "sectionWiseMarks",
      sectionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    QuestionWiseMarks?:  Array< {
      __typename: "QuestionWiseMarks",
      sectionID?: string | null,
      questionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    marksType?: string | null,
    actualMarks?: string | null,
    status?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTestContentMutationVariables = {
  input: DeleteTestContentInput,
  condition?: ModelTestContentConditionInput | null,
};

export type DeleteTestContentMutation = {
  deleteTestContent?:  {
    __typename: "testContent",
    id: string,
    courseID?: string | null,
    testID?: string | null,
    contentID?: string | null,
    description?: string | null,
    timeZone?: string | null,
    fromDate?: string | null,
    toDate?: string | null,
    shuffleQues?: boolean | null,
    shuffleOptions?: boolean | null,
    analyticsReport?: boolean | null,
    hint?: boolean | null,
    result?: boolean | null,
    expectedOutput?: boolean | null,
    testCase?: boolean | null,
    submitCount?: boolean | null,
    lockTest?: boolean | null,
    prevButton?: boolean | null,
    choice?: boolean | null,
    maxQuesMarks?: number | null,
    negMarks?: number | null,
    maxAttend?: boolean | null,
    cutoffMarks?: string | null,
    ruleType?: string | null,
    percentageCondition?: string | null,
    testPercentage?: number | null,
    lockContent?: boolean | null,
    allowDownload?: boolean | null,
    freePreview?: boolean | null,
    limit?: string | null,
    resultPercentage?: number | null,
    maxQuesAttended?: number | null,
    type?: string | null,
    displayQuestions?: string | null,
    timer?:  {
      __typename: "Timer",
      hours?: number | null,
      minutes?: number | null,
      seconds?: number | null,
    } | null,
    sectionWiseMarks?:  Array< {
      __typename: "sectionWiseMarks",
      sectionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    QuestionWiseMarks?:  Array< {
      __typename: "QuestionWiseMarks",
      sectionID?: string | null,
      questionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    marksType?: string | null,
    actualMarks?: string | null,
    status?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentTestMutationVariables = {
  input: CreateStudentTestInput,
  condition?: ModelStudentTestConditionInput | null,
};

export type CreateStudentTestMutation = {
  createStudentTest?:  {
    __typename: "studentTest",
    id: string,
    studentID?: string | null,
    testContentID?: string | null,
    courseID?: string | null,
    percentage?: string | null,
    totalMarks?: string | null,
    ScoredMarks?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentTestMutationVariables = {
  input: UpdateStudentTestInput,
  condition?: ModelStudentTestConditionInput | null,
};

export type UpdateStudentTestMutation = {
  updateStudentTest?:  {
    __typename: "studentTest",
    id: string,
    studentID?: string | null,
    testContentID?: string | null,
    courseID?: string | null,
    percentage?: string | null,
    totalMarks?: string | null,
    ScoredMarks?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentTestMutationVariables = {
  input: DeleteStudentTestInput,
  condition?: ModelStudentTestConditionInput | null,
};

export type DeleteStudentTestMutation = {
  deleteStudentTest?:  {
    __typename: "studentTest",
    id: string,
    studentID?: string | null,
    testContentID?: string | null,
    courseID?: string | null,
    percentage?: string | null,
    totalMarks?: string | null,
    ScoredMarks?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentTestQuestionsMutationVariables = {
  input: CreateStudentTestQuestionsInput,
  condition?: ModelStudentTestQuestionsConditionInput | null,
};

export type CreateStudentTestQuestionsMutation = {
  createStudentTestQuestions?:  {
    __typename: "studentTestQuestions",
    id: string,
    studentTest?: string | null,
    sectionID?: string | null,
    questionID?: string | null,
    answerOption?: string | null,
    actualMarks?: string | null,
    negativeMarks?: string | null,
    result?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentTestQuestionsMutationVariables = {
  input: UpdateStudentTestQuestionsInput,
  condition?: ModelStudentTestQuestionsConditionInput | null,
};

export type UpdateStudentTestQuestionsMutation = {
  updateStudentTestQuestions?:  {
    __typename: "studentTestQuestions",
    id: string,
    studentTest?: string | null,
    sectionID?: string | null,
    questionID?: string | null,
    answerOption?: string | null,
    actualMarks?: string | null,
    negativeMarks?: string | null,
    result?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentTestQuestionsMutationVariables = {
  input: DeleteStudentTestQuestionsInput,
  condition?: ModelStudentTestQuestionsConditionInput | null,
};

export type DeleteStudentTestQuestionsMutation = {
  deleteStudentTestQuestions?:  {
    __typename: "studentTestQuestions",
    id: string,
    studentTest?: string | null,
    sectionID?: string | null,
    questionID?: string | null,
    answerOption?: string | null,
    actualMarks?: string | null,
    negativeMarks?: string | null,
    result?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTestMutationVariables = {
  input: CreateTestInput,
  condition?: ModelTestConditionInput | null,
};

export type CreateTestMutation = {
  createTest?:  {
    __typename: "Test",
    id: string,
    nameOfTest?: string | null,
    testCode?: string | null,
    testDescription?: string | null,
    testType?: string | null,
    adminID?: Array< string | null > | null,
    hodID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    section?:  Array< {
      __typename: "testSection",
      id?: string | null,
      sectionName?: string | null,
      additionalInformation?: string | null,
    } | null > | null,
    userID?: string | null,
    manualEvaluation?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTestMutationVariables = {
  input: UpdateTestInput,
  condition?: ModelTestConditionInput | null,
};

export type UpdateTestMutation = {
  updateTest?:  {
    __typename: "Test",
    id: string,
    nameOfTest?: string | null,
    testCode?: string | null,
    testDescription?: string | null,
    testType?: string | null,
    adminID?: Array< string | null > | null,
    hodID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    section?:  Array< {
      __typename: "testSection",
      id?: string | null,
      sectionName?: string | null,
      additionalInformation?: string | null,
    } | null > | null,
    userID?: string | null,
    manualEvaluation?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTestMutationVariables = {
  input: DeleteTestInput,
  condition?: ModelTestConditionInput | null,
};

export type DeleteTestMutation = {
  deleteTest?:  {
    __typename: "Test",
    id: string,
    nameOfTest?: string | null,
    testCode?: string | null,
    testDescription?: string | null,
    testType?: string | null,
    adminID?: Array< string | null > | null,
    hodID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    section?:  Array< {
      __typename: "testSection",
      id?: string | null,
      sectionName?: string | null,
      additionalInformation?: string | null,
    } | null > | null,
    userID?: string | null,
    manualEvaluation?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTestQuestionMutationVariables = {
  input: CreateTestQuestionInput,
  condition?: ModelTestQuestionConditionInput | null,
};

export type CreateTestQuestionMutation = {
  createTestQuestion?:  {
    __typename: "TestQuestion",
    id: string,
    testID: string,
    sectionID?: string | null,
    questionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTestQuestionMutationVariables = {
  input: UpdateTestQuestionInput,
  condition?: ModelTestQuestionConditionInput | null,
};

export type UpdateTestQuestionMutation = {
  updateTestQuestion?:  {
    __typename: "TestQuestion",
    id: string,
    testID: string,
    sectionID?: string | null,
    questionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTestQuestionMutationVariables = {
  input: DeleteTestQuestionInput,
  condition?: ModelTestQuestionConditionInput | null,
};

export type DeleteTestQuestionMutation = {
  deleteTestQuestion?:  {
    __typename: "TestQuestion",
    id: string,
    testID: string,
    sectionID?: string | null,
    questionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentBankDetailsMutationVariables = {
  input: CreateContentBankDetailsInput,
  condition?: ModelContentBankDetailsConditionInput | null,
};

export type CreateContentBankDetailsMutation = {
  createContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    groups: Array< string | null >,
    userID: string,
    status: number,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentBankDetailsMutationVariables = {
  input: UpdateContentBankDetailsInput,
  condition?: ModelContentBankDetailsConditionInput | null,
};

export type UpdateContentBankDetailsMutation = {
  updateContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    groups: Array< string | null >,
    userID: string,
    status: number,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentBankDetailsMutationVariables = {
  input: DeleteContentBankDetailsInput,
  condition?: ModelContentBankDetailsConditionInput | null,
};

export type DeleteContentBankDetailsMutation = {
  deleteContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    groups: Array< string | null >,
    userID: string,
    status: number,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentMutationVariables = {
  input: CreateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type CreateContentMutation = {
  createContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topicId: string,
    subject: string,
    content: string,
    averageReadTime: string,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentMutationVariables = {
  input: UpdateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type UpdateContentMutation = {
  updateContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topicId: string,
    subject: string,
    content: string,
    averageReadTime: string,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentMutationVariables = {
  input: DeleteContentInput,
  condition?: ModelContentConditionInput | null,
};

export type DeleteContentMutation = {
  deleteContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topicId: string,
    subject: string,
    content: string,
    averageReadTime: string,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMyTable2MutationVariables = {
  input: CreateMyTable2Input,
  condition?: ModelMyTable2ConditionInput | null,
};

export type CreateMyTable2Mutation = {
  createMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMyTable2MutationVariables = {
  input: UpdateMyTable2Input,
  condition?: ModelMyTable2ConditionInput | null,
};

export type UpdateMyTable2Mutation = {
  updateMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMyTable2MutationVariables = {
  input: DeleteMyTable2Input,
  condition?: ModelMyTable2ConditionInput | null,
};

export type DeleteMyTable2Mutation = {
  deleteMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubjectMutationVariables = {
  input: CreateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type CreateSubjectMutation = {
  createSubject?:  {
    __typename: "subject",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubjectMutationVariables = {
  input: UpdateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type UpdateSubjectMutation = {
  updateSubject?:  {
    __typename: "subject",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubjectMutationVariables = {
  input: DeleteSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type DeleteSubjectMutation = {
  deleteSubject?:  {
    __typename: "subject",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic?:  {
    __typename: "topic",
    id: string,
    subjectID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic?:  {
    __typename: "topic",
    id: string,
    subjectID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic?:  {
    __typename: "topic",
    id: string,
    subjectID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubTopicMutationVariables = {
  input: CreateSubTopicInput,
  condition?: ModelSubTopicConditionInput | null,
};

export type CreateSubTopicMutation = {
  createSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubTopicMutationVariables = {
  input: UpdateSubTopicInput,
  condition?: ModelSubTopicConditionInput | null,
};

export type UpdateSubTopicMutation = {
  updateSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubTopicMutationVariables = {
  input: DeleteSubTopicInput,
  condition?: ModelSubTopicConditionInput | null,
};

export type DeleteSubTopicMutation = {
  deleteSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentJobAppliedJobMutationVariables = {
  input: CreateStudentJobAppliedJobInput,
  condition?: ModelStudentJobAppliedJobConditionInput | null,
};

export type CreateStudentJobAppliedJobMutation = {
  createStudentJobAppliedJob?:  {
    __typename: "studentJobAppliedJob",
    id: string,
    studentID: string,
    jobID: string,
    status?: string | null,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentJobAppliedJobMutationVariables = {
  input: UpdateStudentJobAppliedJobInput,
  condition?: ModelStudentJobAppliedJobConditionInput | null,
};

export type UpdateStudentJobAppliedJobMutation = {
  updateStudentJobAppliedJob?:  {
    __typename: "studentJobAppliedJob",
    id: string,
    studentID: string,
    jobID: string,
    status?: string | null,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentJobAppliedJobMutationVariables = {
  input: DeleteStudentJobAppliedJobInput,
  condition?: ModelStudentJobAppliedJobConditionInput | null,
};

export type DeleteStudentJobAppliedJobMutation = {
  deleteStudentJobAppliedJob?:  {
    __typename: "studentJobAppliedJob",
    id: string,
    studentID: string,
    jobID: string,
    status?: string | null,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBranchMutationVariables = {
  input: CreateBranchInput,
  condition?: ModelBranchConditionInput | null,
};

export type CreateBranchMutation = {
  createBranch?:  {
    __typename: "branch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBranchMutationVariables = {
  input: UpdateBranchInput,
  condition?: ModelBranchConditionInput | null,
};

export type UpdateBranchMutation = {
  updateBranch?:  {
    __typename: "branch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBranchMutationVariables = {
  input: DeleteBranchInput,
  condition?: ModelBranchConditionInput | null,
};

export type DeleteBranchMutation = {
  deleteBranch?:  {
    __typename: "branch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateYearMutationVariables = {
  input: CreateYearInput,
  condition?: ModelYearConditionInput | null,
};

export type CreateYearMutation = {
  createYear?:  {
    __typename: "year",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateYearMutationVariables = {
  input: UpdateYearInput,
  condition?: ModelYearConditionInput | null,
};

export type UpdateYearMutation = {
  updateYear?:  {
    __typename: "year",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteYearMutationVariables = {
  input: DeleteYearInput,
  condition?: ModelYearConditionInput | null,
};

export type DeleteYearMutation = {
  deleteYear?:  {
    __typename: "year",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection?:  {
    __typename: "section",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection?:  {
    __typename: "section",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection?:  {
    __typename: "section",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "skill",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "skill",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "skill",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBlogCategoryMutationVariables = {
  input: CreateBlogCategoryInput,
  condition?: ModelBlogCategoryConditionInput | null,
};

export type CreateBlogCategoryMutation = {
  createBlogCategory?:  {
    __typename: "blogCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogCategoryMutationVariables = {
  input: UpdateBlogCategoryInput,
  condition?: ModelBlogCategoryConditionInput | null,
};

export type UpdateBlogCategoryMutation = {
  updateBlogCategory?:  {
    __typename: "blogCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogCategoryMutationVariables = {
  input: DeleteBlogCategoryInput,
  condition?: ModelBlogCategoryConditionInput | null,
};

export type DeleteBlogCategoryMutation = {
  deleteBlogCategory?:  {
    __typename: "blogCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateThemesMutationVariables = {
  input: CreateThemesInput,
  condition?: ModelThemesConditionInput | null,
};

export type CreateThemesMutation = {
  createThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateThemesMutationVariables = {
  input: UpdateThemesInput,
  condition?: ModelThemesConditionInput | null,
};

export type UpdateThemesMutation = {
  updateThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteThemesMutationVariables = {
  input: DeleteThemesInput,
  condition?: ModelThemesConditionInput | null,
};

export type DeleteThemesMutation = {
  deleteThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLanguageMutationVariables = {
  input: CreateLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type CreateLanguageMutation = {
  createLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLanguageMutationVariables = {
  input: UpdateLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type UpdateLanguageMutation = {
  updateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLanguageMutationVariables = {
  input: DeleteLanguageInput,
  condition?: ModelLanguageConditionInput | null,
};

export type DeleteLanguageMutation = {
  deleteLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBatchMutationVariables = {
  input: CreateBatchInput,
  condition?: ModelBatchConditionInput | null,
};

export type CreateBatchMutation = {
  createBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBatchMutationVariables = {
  input: UpdateBatchInput,
  condition?: ModelBatchConditionInput | null,
};

export type UpdateBatchMutation = {
  updateBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBatchMutationVariables = {
  input: DeleteBatchInput,
  condition?: ModelBatchConditionInput | null,
};

export type DeleteBatchMutation = {
  deleteBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStateMutationVariables = {
  input: CreateStateInput,
  condition?: ModelStateConditionInput | null,
};

export type CreateStateMutation = {
  createState?:  {
    __typename: "state",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStateMutationVariables = {
  input: UpdateStateInput,
  condition?: ModelStateConditionInput | null,
};

export type UpdateStateMutation = {
  updateState?:  {
    __typename: "state",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStateMutationVariables = {
  input: DeleteStateInput,
  condition?: ModelStateConditionInput | null,
};

export type DeleteStateMutation = {
  deleteState?:  {
    __typename: "state",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDistrictMutationVariables = {
  input: CreateDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type CreateDistrictMutation = {
  createDistrict?:  {
    __typename: "district",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDistrictMutationVariables = {
  input: UpdateDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type UpdateDistrictMutation = {
  updateDistrict?:  {
    __typename: "district",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDistrictMutationVariables = {
  input: DeleteDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type DeleteDistrictMutation = {
  deleteDistrict?:  {
    __typename: "district",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSpecializationMutationVariables = {
  input: CreateSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type CreateSpecializationMutation = {
  createSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpecializationMutationVariables = {
  input: UpdateSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type UpdateSpecializationMutation = {
  updateSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpecializationMutationVariables = {
  input: DeleteSpecializationInput,
  condition?: ModelSpecializationConditionInput | null,
};

export type DeleteSpecializationMutation = {
  deleteSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTechStackMutationVariables = {
  input: CreateTechStackInput,
  condition?: ModelTechStackConditionInput | null,
};

export type CreateTechStackMutation = {
  createTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTechStackMutationVariables = {
  input: UpdateTechStackInput,
  condition?: ModelTechStackConditionInput | null,
};

export type UpdateTechStackMutation = {
  updateTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTechStackMutationVariables = {
  input: DeleteTechStackInput,
  condition?: ModelTechStackConditionInput | null,
};

export type DeleteTechStackMutation = {
  deleteTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateInstanceSizeMutationVariables = {
  input: CreateInstanceSizeInput,
  condition?: ModelInstanceSizeConditionInput | null,
};

export type CreateInstanceSizeMutation = {
  createInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInstanceSizeMutationVariables = {
  input: UpdateInstanceSizeInput,
  condition?: ModelInstanceSizeConditionInput | null,
};

export type UpdateInstanceSizeMutation = {
  updateInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInstanceSizeMutationVariables = {
  input: DeleteInstanceSizeInput,
  condition?: ModelInstanceSizeConditionInput | null,
};

export type DeleteInstanceSizeMutation = {
  deleteInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProgrammerSubjectMutationVariables = {
  input: CreateProgrammerSubjectInput,
  condition?: ModelProgrammerSubjectConditionInput | null,
};

export type CreateProgrammerSubjectMutation = {
  createProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProgrammerSubjectMutationVariables = {
  input: UpdateProgrammerSubjectInput,
  condition?: ModelProgrammerSubjectConditionInput | null,
};

export type UpdateProgrammerSubjectMutation = {
  updateProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProgrammerSubjectMutationVariables = {
  input: DeleteProgrammerSubjectInput,
  condition?: ModelProgrammerSubjectConditionInput | null,
};

export type DeleteProgrammerSubjectMutation = {
  deleteProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProgrammerTopicMutationVariables = {
  input: CreateProgrammerTopicInput,
  condition?: ModelProgrammerTopicConditionInput | null,
};

export type CreateProgrammerTopicMutation = {
  createProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProgrammerTopicMutationVariables = {
  input: UpdateProgrammerTopicInput,
  condition?: ModelProgrammerTopicConditionInput | null,
};

export type UpdateProgrammerTopicMutation = {
  updateProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProgrammerTopicMutationVariables = {
  input: DeleteProgrammerTopicInput,
  condition?: ModelProgrammerTopicConditionInput | null,
};

export type DeleteProgrammerTopicMutation = {
  deleteProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProgrammerLevelMutationVariables = {
  input: CreateProgrammerLevelInput,
  condition?: ModelProgrammerLevelConditionInput | null,
};

export type CreateProgrammerLevelMutation = {
  createProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProgrammerLevelMutationVariables = {
  input: UpdateProgrammerLevelInput,
  condition?: ModelProgrammerLevelConditionInput | null,
};

export type UpdateProgrammerLevelMutation = {
  updateProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProgrammerLevelMutationVariables = {
  input: DeleteProgrammerLevelInput,
  condition?: ModelProgrammerLevelConditionInput | null,
};

export type DeleteProgrammerLevelMutation = {
  deleteProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentSectionMutationVariables = {
  input: CreateStudentSectionInput,
  condition?: ModelStudentSectionConditionInput | null,
};

export type CreateStudentSectionMutation = {
  createStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentSectionMutationVariables = {
  input: UpdateStudentSectionInput,
  condition?: ModelStudentSectionConditionInput | null,
};

export type UpdateStudentSectionMutation = {
  updateStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentSectionMutationVariables = {
  input: DeleteStudentSectionInput,
  condition?: ModelStudentSectionConditionInput | null,
};

export type DeleteStudentSectionMutation = {
  deleteStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJobDriveMutationVariables = {
  input: CreateJobDriveInput,
  condition?: ModelJobDriveConditionInput | null,
};

export type CreateJobDriveMutation = {
  createJobDrive?:  {
    __typename: "jobDrive",
    id: string,
    driveObjective: string,
    campus: Array< string | null >,
    division?: string | null,
    driveName?: string | null,
    companyName?: string | null,
    companyDomainURL?: string | null,
    location?: string | null,
    internshipDuration?: number | null,
    weeksMonths?: string | null,
    jobDescription?: string | null,
    skills?: Array< string | null > | null,
    jobRole?: string | null,
    department?: Array< string | null > | null,
    XthPercentage?: number | null,
    IntermediatePercentage?: number | null,
    DiplomaPercentage?: number | null,
    GraduationPercentage?: number | null,
    year?: Array< string | null > | null,
    SelectionProcess?: string | null,
    DateofDrive?: string | null,
    ReportingTime?: string | null,
    aboutCompany?: string | null,
    additionalInformation?: string | null,
    payType?: string | null,
    payRole?: string | null,
    payAmount?: number | null,
    newResume?: boolean | null,
    userID?: string | null,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    round?:  Array< {
      __typename: "jobRound",
      input?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobDriveMutationVariables = {
  input: UpdateJobDriveInput,
  condition?: ModelJobDriveConditionInput | null,
};

export type UpdateJobDriveMutation = {
  updateJobDrive?:  {
    __typename: "jobDrive",
    id: string,
    driveObjective: string,
    campus: Array< string | null >,
    division?: string | null,
    driveName?: string | null,
    companyName?: string | null,
    companyDomainURL?: string | null,
    location?: string | null,
    internshipDuration?: number | null,
    weeksMonths?: string | null,
    jobDescription?: string | null,
    skills?: Array< string | null > | null,
    jobRole?: string | null,
    department?: Array< string | null > | null,
    XthPercentage?: number | null,
    IntermediatePercentage?: number | null,
    DiplomaPercentage?: number | null,
    GraduationPercentage?: number | null,
    year?: Array< string | null > | null,
    SelectionProcess?: string | null,
    DateofDrive?: string | null,
    ReportingTime?: string | null,
    aboutCompany?: string | null,
    additionalInformation?: string | null,
    payType?: string | null,
    payRole?: string | null,
    payAmount?: number | null,
    newResume?: boolean | null,
    userID?: string | null,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    round?:  Array< {
      __typename: "jobRound",
      input?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobDriveMutationVariables = {
  input: DeleteJobDriveInput,
  condition?: ModelJobDriveConditionInput | null,
};

export type DeleteJobDriveMutation = {
  deleteJobDrive?:  {
    __typename: "jobDrive",
    id: string,
    driveObjective: string,
    campus: Array< string | null >,
    division?: string | null,
    driveName?: string | null,
    companyName?: string | null,
    companyDomainURL?: string | null,
    location?: string | null,
    internshipDuration?: number | null,
    weeksMonths?: string | null,
    jobDescription?: string | null,
    skills?: Array< string | null > | null,
    jobRole?: string | null,
    department?: Array< string | null > | null,
    XthPercentage?: number | null,
    IntermediatePercentage?: number | null,
    DiplomaPercentage?: number | null,
    GraduationPercentage?: number | null,
    year?: Array< string | null > | null,
    SelectionProcess?: string | null,
    DateofDrive?: string | null,
    ReportingTime?: string | null,
    aboutCompany?: string | null,
    additionalInformation?: string | null,
    payType?: string | null,
    payRole?: string | null,
    payAmount?: number | null,
    newResume?: boolean | null,
    userID?: string | null,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    round?:  Array< {
      __typename: "jobRound",
      input?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "company",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "company",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "company",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentJobNotificationMutationVariables = {
  input: CreateStudentJobNotificationInput,
  condition?: ModelStudentJobNotificationConditionInput | null,
};

export type CreateStudentJobNotificationMutation = {
  createStudentJobNotification?:  {
    __typename: "studentJobNotification",
    id: string,
    studentID: string,
    jobID: string,
    roundStatus?:  Array< {
      __typename: "updateroundStatus",
      name?: string | null,
      status?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentJobNotificationMutationVariables = {
  input: UpdateStudentJobNotificationInput,
  condition?: ModelStudentJobNotificationConditionInput | null,
};

export type UpdateStudentJobNotificationMutation = {
  updateStudentJobNotification?:  {
    __typename: "studentJobNotification",
    id: string,
    studentID: string,
    jobID: string,
    roundStatus?:  Array< {
      __typename: "updateroundStatus",
      name?: string | null,
      status?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentJobNotificationMutationVariables = {
  input: DeleteStudentJobNotificationInput,
  condition?: ModelStudentJobNotificationConditionInput | null,
};

export type DeleteStudentJobNotificationMutation = {
  deleteStudentJobNotification?:  {
    __typename: "studentJobNotification",
    id: string,
    studentID: string,
    jobID: string,
    roundStatus?:  Array< {
      __typename: "updateroundStatus",
      name?: string | null,
      status?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssignMeetingStudentsMutationVariables = {
  input: CreateAssignMeetingStudentsInput,
  condition?: ModelAssignMeetingStudentsConditionInput | null,
};

export type CreateAssignMeetingStudentsMutation = {
  createAssignMeetingStudents?:  {
    __typename: "AssignMeetingStudents",
    id: string,
    studentID: string,
    meetingID: string,
    attendanceStatus?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssignMeetingStudentsMutationVariables = {
  input: UpdateAssignMeetingStudentsInput,
  condition?: ModelAssignMeetingStudentsConditionInput | null,
};

export type UpdateAssignMeetingStudentsMutation = {
  updateAssignMeetingStudents?:  {
    __typename: "AssignMeetingStudents",
    id: string,
    studentID: string,
    meetingID: string,
    attendanceStatus?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssignMeetingStudentsMutationVariables = {
  input: DeleteAssignMeetingStudentsInput,
  condition?: ModelAssignMeetingStudentsConditionInput | null,
};

export type DeleteAssignMeetingStudentsMutation = {
  deleteAssignMeetingStudents?:  {
    __typename: "AssignMeetingStudents",
    id: string,
    studentID: string,
    meetingID: string,
    attendanceStatus?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "user",
    id: string,
    rollno?: string | null,
    gender?: string | null,
    DOB?: string | null,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    personName: string,
    personDesignation: string,
    OTP?: string | null,
    branch?: string | null,
    section?: string | null,
    yearOfPassout?: string | null,
    yearOfJoining?: string | null,
    tenthPercentage?: number | null,
    InterPercentage?: number | null,
    diplomaPercentage?: number | null,
    graduationPercentage?: number | null,
    postGraduationPercentage?: number | null,
    Organizationcode?: string | null,
    State?: string | null,
    District?: string | null,
    Pincode?: string | null,
    Website?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "user",
    id: string,
    rollno?: string | null,
    gender?: string | null,
    DOB?: string | null,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    personName: string,
    personDesignation: string,
    OTP?: string | null,
    branch?: string | null,
    section?: string | null,
    yearOfPassout?: string | null,
    yearOfJoining?: string | null,
    tenthPercentage?: number | null,
    InterPercentage?: number | null,
    diplomaPercentage?: number | null,
    graduationPercentage?: number | null,
    postGraduationPercentage?: number | null,
    Organizationcode?: string | null,
    State?: string | null,
    District?: string | null,
    Pincode?: string | null,
    Website?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "user",
    id: string,
    rollno?: string | null,
    gender?: string | null,
    DOB?: string | null,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    personName: string,
    personDesignation: string,
    OTP?: string | null,
    branch?: string | null,
    section?: string | null,
    yearOfPassout?: string | null,
    yearOfJoining?: string | null,
    tenthPercentage?: number | null,
    InterPercentage?: number | null,
    diplomaPercentage?: number | null,
    graduationPercentage?: number | null,
    postGraduationPercentage?: number | null,
    Organizationcode?: string | null,
    State?: string | null,
    District?: string | null,
    Pincode?: string | null,
    Website?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMeetingsMutationVariables = {
  input: CreateMeetingsInput,
  condition?: ModelMeetingsConditionInput | null,
};

export type CreateMeetingsMutation = {
  createMeetings?:  {
    __typename: "meetings",
    id: string,
    title: string,
    meetingLink: string,
    dateTime: string,
    otp: number,
    userID: string,
    campusID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMeetingsMutationVariables = {
  input: UpdateMeetingsInput,
  condition?: ModelMeetingsConditionInput | null,
};

export type UpdateMeetingsMutation = {
  updateMeetings?:  {
    __typename: "meetings",
    id: string,
    title: string,
    meetingLink: string,
    dateTime: string,
    otp: number,
    userID: string,
    campusID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMeetingsMutationVariables = {
  input: DeleteMeetingsInput,
  condition?: ModelMeetingsConditionInput | null,
};

export type DeleteMeetingsMutation = {
  deleteMeetings?:  {
    __typename: "meetings",
    id: string,
    title: string,
    meetingLink: string,
    dateTime: string,
    otp: number,
    userID: string,
    campusID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssignStudentToCourseMutationVariables = {
  input: CreateAssignStudentToCourseInput,
  condition?: ModelAssignStudentToCourseConditionInput | null,
};

export type CreateAssignStudentToCourseMutation = {
  createAssignStudentToCourse?:  {
    __typename: "AssignStudentToCourse",
    id: string,
    studentID: string,
    courseID: string,
    type: string,
    amountPaid?: string | null,
    months?: string | null,
    transactionDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssignStudentToCourseMutationVariables = {
  input: UpdateAssignStudentToCourseInput,
  condition?: ModelAssignStudentToCourseConditionInput | null,
};

export type UpdateAssignStudentToCourseMutation = {
  updateAssignStudentToCourse?:  {
    __typename: "AssignStudentToCourse",
    id: string,
    studentID: string,
    courseID: string,
    type: string,
    amountPaid?: string | null,
    months?: string | null,
    transactionDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssignStudentToCourseMutationVariables = {
  input: DeleteAssignStudentToCourseInput,
  condition?: ModelAssignStudentToCourseConditionInput | null,
};

export type DeleteAssignStudentToCourseMutation = {
  deleteAssignStudentToCourse?:  {
    __typename: "AssignStudentToCourse",
    id: string,
    studentID: string,
    courseID: string,
    type: string,
    amountPaid?: string | null,
    months?: string | null,
    transactionDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionBankDetailsQueryVariables = {
  id: string,
};

export type GetQuestionBankDetailsQuery = {
  getQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionBankDetailsQueryVariables = {
  filter?: ModelQuestionBankDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionBankDetailsQuery = {
  listQuestionBankDetails?:  {
    __typename: "ModelQuestionBankDetailsConnection",
    items:  Array< {
      __typename: "QuestionBankDetails",
      id: string,
      name: string,
      code: string,
      description: string,
      adminID?: string | null,
      userID: string,
      status: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQuestionsQueryVariables = {
  id: string,
};

export type GetGroupQuestionsQuery = {
  getGroupQuestions?:  {
    __typename: "GroupQuestions",
    id: string,
    content: string,
    questionBankID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupQuestionsQueryVariables = {
  filter?: ModelGroupQuestionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupQuestionsQuery = {
  listGroupQuestions?:  {
    __typename: "ModelGroupQuestionsConnection",
    items:  Array< {
      __typename: "GroupQuestions",
      id: string,
      content: string,
      questionBankID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssessmentQueryVariables = {
  id: string,
};

export type GetAssessmentQuery = {
  getAssessment?:  {
    __typename: "Assessment",
    id: string,
    testName: string,
    testCode?: string | null,
    testDescription?: string | null,
    testType: string,
    campus: Array< string | null >,
    visibility?: string | null,
    department?: string | null,
    tags: Array< string | null >,
    section?:  Array< {
      __typename: "Assessmentsection",
      id: string,
      sectionId: string,
      duration?: string | null,
      additionalInformation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssessmentsQueryVariables = {
  filter?: ModelAssessmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssessmentsQuery = {
  listAssessments?:  {
    __typename: "ModelAssessmentConnection",
    items:  Array< {
      __typename: "Assessment",
      id: string,
      testName: string,
      testCode?: string | null,
      testDescription?: string | null,
      testType: string,
      campus: Array< string | null >,
      visibility?: string | null,
      department?: string | null,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssessmentsectionQueryVariables = {
  id: string,
};

export type GetAssessmentsectionQuery = {
  getAssessmentsection?:  {
    __typename: "Assessmentsection",
    id: string,
    sectionId: string,
    duration?: string | null,
    additionalInformation?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssessmentsectionsQueryVariables = {
  filter?: ModelAssessmentsectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssessmentsectionsQuery = {
  listAssessmentsections?:  {
    __typename: "ModelAssessmentsectionConnection",
    items:  Array< {
      __typename: "Assessmentsection",
      id: string,
      sectionId: string,
      duration?: string | null,
      additionalInformation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionsQueryVariables = {
  id: string,
};

export type GetQuestionsQuery = {
  getQuestions?:  {
    __typename: "Questions",
    id: string,
    standardInputs?: string | null,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topicId: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options?:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage?: number | null,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: boolean | null,
      fullMarksIfAnyCorrect?: boolean | null,
      fullMarksOnlyIfAllCorrect?: boolean | null,
    } | null > | null,
    solution?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    hint?:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null > | null,
    media?: string | null,
    questionName?: string | null,
    wordLimit?: number | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub?: string | null,
      progTopic?: string | null,
      progLevel?: string | null,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID?: string | null,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    explaination?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    htmlCssJsCode?: string | null,
    groupQuestionID?: string | null,
    questionCode?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionsConnection",
    items:  Array< {
      __typename: "Questions",
      id: string,
      standardInputs?: string | null,
      questionBankID: string,
      questionType: string,
      questionSubType: string,
      subject: string,
      difficulty: string,
      topicId: string,
      directions?: string | null,
      codeEditor?: string | null,
      textEditor?: string | null,
      media?: string | null,
      questionName?: string | null,
      wordLimit?: number | null,
      videoSolution?: string | null,
      subTopic?: string | null,
      concepts?: string | null,
      adminID?: string | null,
      userID: string,
      blanksCount?: number | null,
      caseSensitive?: boolean | null,
      QuesDependency?: string | null,
      languages?: Array< string | null > | null,
      SingleLanguage?: string | null,
      inputFormat?: string | null,
      outputFormat?: string | null,
      enableCustomInput?: boolean | null,
      enableAPITesting?: boolean | null,
      codeConstraints?: string | null,
      evaluationTime?: boolean | null,
      timeLimit?: string | null,
      memoryLimit?: string | null,
      outputLimit?: string | null,
      codeSize?: string | null,
      backgroundImg?: string | null,
      initialQuery?: string | null,
      fileCount?: number | null,
      fileCountMandatory?: boolean | null,
      fileFormats?: Array< string | null > | null,
      enableAutoRecord?: boolean | null,
      minRecording?: number | null,
      maxRecording?: number | null,
      attemptsToRecord?: number | null,
      autoEvaluation?: boolean | null,
      cloudProvider?: string | null,
      startTime?: number | null,
      ZipFile?: string | null,
      themes?: Array< string | null > | null,
      fileSizes?: Array< string | null > | null,
      techStack?: string | null,
      instanceSize?: string | null,
      explaination?: string | null,
      compilerOutput?: string | null,
      compilerLanguage?: string | null,
      compilerProgram?: string | null,
      htmlCssJsCode?: string | null,
      groupQuestionID?: string | null,
      questionCode?: string | null,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "course",
    id: string,
    courseName?: string | null,
    courseCode?: string | null,
    PublishingText?: string | null,
    description?: string | null,
    file?: string | null,
    showLeaderBoard?: string | null,
    adminID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    batch?: Array< string | null > | null,
    category?: string | null,
    tags?: boolean | null,
    adminID1?: string | null,
    department1?: string | null,
    batch1?: string | null,
    degree?: string | null,
    skuCode?: string | null,
    userID?: string | null,
    hodID?: string | null,
    mediaInputType?: string | null,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    courseValidity?:  Array< {
      __typename: "courseValidity",
      months?: string | null,
      price?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "course",
      id: string,
      courseName?: string | null,
      courseCode?: string | null,
      PublishingText?: string | null,
      description?: string | null,
      file?: string | null,
      showLeaderBoard?: string | null,
      adminID?: Array< string | null > | null,
      visibility?: string | null,
      department?: Array< string | null > | null,
      batch?: Array< string | null > | null,
      category?: string | null,
      tags?: boolean | null,
      adminID1?: string | null,
      department1?: string | null,
      batch1?: string | null,
      degree?: string | null,
      skuCode?: string | null,
      userID?: string | null,
      hodID?: string | null,
      mediaInputType?: string | null,
      subject?: string | null,
      topicId?: string | null,
      subTopic?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseCategoryQueryVariables = {
  id: string,
};

export type GetCourseCategoryQuery = {
  getCourseCategory?:  {
    __typename: "courseCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCourseCategoriesQueryVariables = {
  filter?: ModelCourseCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCourseCategoriesQuery = {
  listCourseCategories?:  {
    __typename: "ModelCourseCategoryConnection",
    items:  Array< {
      __typename: "courseCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestContentQueryVariables = {
  id: string,
};

export type GetTestContentQuery = {
  getTestContent?:  {
    __typename: "testContent",
    id: string,
    courseID?: string | null,
    testID?: string | null,
    contentID?: string | null,
    description?: string | null,
    timeZone?: string | null,
    fromDate?: string | null,
    toDate?: string | null,
    shuffleQues?: boolean | null,
    shuffleOptions?: boolean | null,
    analyticsReport?: boolean | null,
    hint?: boolean | null,
    result?: boolean | null,
    expectedOutput?: boolean | null,
    testCase?: boolean | null,
    submitCount?: boolean | null,
    lockTest?: boolean | null,
    prevButton?: boolean | null,
    choice?: boolean | null,
    maxQuesMarks?: number | null,
    negMarks?: number | null,
    maxAttend?: boolean | null,
    cutoffMarks?: string | null,
    ruleType?: string | null,
    percentageCondition?: string | null,
    testPercentage?: number | null,
    lockContent?: boolean | null,
    allowDownload?: boolean | null,
    freePreview?: boolean | null,
    limit?: string | null,
    resultPercentage?: number | null,
    maxQuesAttended?: number | null,
    type?: string | null,
    displayQuestions?: string | null,
    timer?:  {
      __typename: "Timer",
      hours?: number | null,
      minutes?: number | null,
      seconds?: number | null,
    } | null,
    sectionWiseMarks?:  Array< {
      __typename: "sectionWiseMarks",
      sectionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    QuestionWiseMarks?:  Array< {
      __typename: "QuestionWiseMarks",
      sectionID?: string | null,
      questionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    marksType?: string | null,
    actualMarks?: string | null,
    status?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTestContentsQueryVariables = {
  filter?: ModelTestContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestContentsQuery = {
  listTestContents?:  {
    __typename: "ModelTestContentConnection",
    items:  Array< {
      __typename: "testContent",
      id: string,
      courseID?: string | null,
      testID?: string | null,
      contentID?: string | null,
      description?: string | null,
      timeZone?: string | null,
      fromDate?: string | null,
      toDate?: string | null,
      shuffleQues?: boolean | null,
      shuffleOptions?: boolean | null,
      analyticsReport?: boolean | null,
      hint?: boolean | null,
      result?: boolean | null,
      expectedOutput?: boolean | null,
      testCase?: boolean | null,
      submitCount?: boolean | null,
      lockTest?: boolean | null,
      prevButton?: boolean | null,
      choice?: boolean | null,
      maxQuesMarks?: number | null,
      negMarks?: number | null,
      maxAttend?: boolean | null,
      cutoffMarks?: string | null,
      ruleType?: string | null,
      percentageCondition?: string | null,
      testPercentage?: number | null,
      lockContent?: boolean | null,
      allowDownload?: boolean | null,
      freePreview?: boolean | null,
      limit?: string | null,
      resultPercentage?: number | null,
      maxQuesAttended?: number | null,
      type?: string | null,
      displayQuestions?: string | null,
      marksType?: string | null,
      actualMarks?: string | null,
      status?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentTestQueryVariables = {
  id: string,
};

export type GetStudentTestQuery = {
  getStudentTest?:  {
    __typename: "studentTest",
    id: string,
    studentID?: string | null,
    testContentID?: string | null,
    courseID?: string | null,
    percentage?: string | null,
    totalMarks?: string | null,
    ScoredMarks?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentTestsQueryVariables = {
  filter?: ModelStudentTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentTestsQuery = {
  listStudentTests?:  {
    __typename: "ModelStudentTestConnection",
    items:  Array< {
      __typename: "studentTest",
      id: string,
      studentID?: string | null,
      testContentID?: string | null,
      courseID?: string | null,
      percentage?: string | null,
      totalMarks?: string | null,
      ScoredMarks?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentTestQuestionsQueryVariables = {
  id: string,
};

export type GetStudentTestQuestionsQuery = {
  getStudentTestQuestions?:  {
    __typename: "studentTestQuestions",
    id: string,
    studentTest?: string | null,
    sectionID?: string | null,
    questionID?: string | null,
    answerOption?: string | null,
    actualMarks?: string | null,
    negativeMarks?: string | null,
    result?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentTestQuestionsQueryVariables = {
  filter?: ModelStudentTestQuestionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentTestQuestionsQuery = {
  listStudentTestQuestions?:  {
    __typename: "ModelStudentTestQuestionsConnection",
    items:  Array< {
      __typename: "studentTestQuestions",
      id: string,
      studentTest?: string | null,
      sectionID?: string | null,
      questionID?: string | null,
      answerOption?: string | null,
      actualMarks?: string | null,
      negativeMarks?: string | null,
      result?: string | null,
      compilerOutput?: string | null,
      compilerLanguage?: string | null,
      compilerProgram?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestQueryVariables = {
  id: string,
};

export type GetTestQuery = {
  getTest?:  {
    __typename: "Test",
    id: string,
    nameOfTest?: string | null,
    testCode?: string | null,
    testDescription?: string | null,
    testType?: string | null,
    adminID?: Array< string | null > | null,
    hodID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    section?:  Array< {
      __typename: "testSection",
      id?: string | null,
      sectionName?: string | null,
      additionalInformation?: string | null,
    } | null > | null,
    userID?: string | null,
    manualEvaluation?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTestsQueryVariables = {
  filter?: ModelTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestsQuery = {
  listTests?:  {
    __typename: "ModelTestConnection",
    items:  Array< {
      __typename: "Test",
      id: string,
      nameOfTest?: string | null,
      testCode?: string | null,
      testDescription?: string | null,
      testType?: string | null,
      adminID?: Array< string | null > | null,
      hodID?: Array< string | null > | null,
      visibility?: string | null,
      department?: Array< string | null > | null,
      tags?: Array< string | null > | null,
      userID?: string | null,
      manualEvaluation?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTestQuestionQueryVariables = {
  id: string,
};

export type GetTestQuestionQuery = {
  getTestQuestion?:  {
    __typename: "TestQuestion",
    id: string,
    testID: string,
    sectionID?: string | null,
    questionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTestQuestionsQueryVariables = {
  filter?: ModelTestQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestQuestionsQuery = {
  listTestQuestions?:  {
    __typename: "ModelTestQuestionConnection",
    items:  Array< {
      __typename: "TestQuestion",
      id: string,
      testID: string,
      sectionID?: string | null,
      questionID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentBankDetailsQueryVariables = {
  id: string,
};

export type GetContentBankDetailsQuery = {
  getContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    groups: Array< string | null >,
    userID: string,
    status: number,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentBankDetailsQueryVariables = {
  filter?: ModelContentBankDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentBankDetailsQuery = {
  listContentBankDetails?:  {
    __typename: "ModelContentBankDetailsConnection",
    items:  Array< {
      __typename: "ContentBankDetails",
      id: string,
      name: string,
      description: string,
      adminID: string,
      visibility: string,
      groups: Array< string | null >,
      userID: string,
      status: number,
      subject?: string | null,
      topicId?: string | null,
      subTopic?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentQueryVariables = {
  id: string,
};

export type GetContentQuery = {
  getContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topicId: string,
    subject: string,
    content: string,
    averageReadTime: string,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentsQueryVariables = {
  filter?: ModelContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentsQuery = {
  listContents?:  {
    __typename: "ModelContentConnection",
    items:  Array< {
      __typename: "content",
      id: string,
      contentBankID: string,
      contentType: string,
      contentsubType: string,
      contentName: string,
      subTopic: string,
      topicId: string,
      subject: string,
      content: string,
      averageReadTime: string,
      additionalInformation: string,
      adminID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMyTable2QueryVariables = {
  id: string,
};

export type GetMyTable2Query = {
  getMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMyTable2sQueryVariables = {
  filter?: ModelMyTable2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMyTable2sQuery = {
  listMyTable2s?:  {
    __typename: "ModelMyTable2Connection",
    items:  Array< {
      __typename: "myTable2",
      id: string,
      title: string,
      gender: string,
      address: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubjectQueryVariables = {
  id: string,
};

export type GetSubjectQuery = {
  getSubject?:  {
    __typename: "subject",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items:  Array< {
      __typename: "subject",
      id: string,
      name: string,
      status: number,
      userID: string,
      adminID: string,
      code: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic?:  {
    __typename: "topic",
    id: string,
    subjectID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics?:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "topic",
      id: string,
      subjectID: string,
      name: string,
      status: number,
      userID: string,
      code: string,
      adminID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubTopicQueryVariables = {
  id: string,
};

export type GetSubTopicQuery = {
  getSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubTopicsQueryVariables = {
  filter?: ModelSubTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubTopicsQuery = {
  listSubTopics?:  {
    __typename: "ModelSubTopicConnection",
    items:  Array< {
      __typename: "subTopic",
      id: string,
      topicID: string,
      name: string,
      status: number,
      userID: string,
      code: string,
      adminID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentJobAppliedJobQueryVariables = {
  id: string,
};

export type GetStudentJobAppliedJobQuery = {
  getStudentJobAppliedJob?:  {
    __typename: "studentJobAppliedJob",
    id: string,
    studentID: string,
    jobID: string,
    status?: string | null,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentJobAppliedJobsQueryVariables = {
  filter?: ModelStudentJobAppliedJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentJobAppliedJobsQuery = {
  listStudentJobAppliedJobs?:  {
    __typename: "ModelStudentJobAppliedJobConnection",
    items:  Array< {
      __typename: "studentJobAppliedJob",
      id: string,
      studentID: string,
      jobID: string,
      status?: string | null,
      adminID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBranchQueryVariables = {
  id: string,
};

export type GetBranchQuery = {
  getBranch?:  {
    __typename: "branch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBranchesQueryVariables = {
  filter?: ModelBranchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBranchesQuery = {
  listBranches?:  {
    __typename: "ModelBranchConnection",
    items:  Array< {
      __typename: "branch",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetYearQueryVariables = {
  id: string,
};

export type GetYearQuery = {
  getYear?:  {
    __typename: "year",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListYearsQueryVariables = {
  filter?: ModelYearFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListYearsQuery = {
  listYears?:  {
    __typename: "ModelYearConnection",
    items:  Array< {
      __typename: "year",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id: string,
};

export type GetSectionQuery = {
  getSection?:  {
    __typename: "section",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "skill",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "skill",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "tag",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogCategoryQueryVariables = {
  id: string,
};

export type GetBlogCategoryQuery = {
  getBlogCategory?:  {
    __typename: "blogCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogCategoriesQueryVariables = {
  filter?: ModelBlogCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogCategoriesQuery = {
  listBlogCategories?:  {
    __typename: "ModelBlogCategoryConnection",
    items:  Array< {
      __typename: "blogCategory",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetThemesQueryVariables = {
  id: string,
};

export type GetThemesQuery = {
  getThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListThemesQueryVariables = {
  filter?: ModelThemesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThemesQuery = {
  listThemes?:  {
    __typename: "ModelThemesConnection",
    items:  Array< {
      __typename: "themes",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLanguageQueryVariables = {
  id: string,
};

export type GetLanguageQuery = {
  getLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLanguagesQueryVariables = {
  filter?: ModelLanguageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLanguagesQuery = {
  listLanguages?:  {
    __typename: "ModelLanguageConnection",
    items:  Array< {
      __typename: "Language",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBatchQueryVariables = {
  id: string,
};

export type GetBatchQuery = {
  getBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBatchesQueryVariables = {
  filter?: ModelBatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBatchesQuery = {
  listBatches?:  {
    __typename: "ModelBatchConnection",
    items:  Array< {
      __typename: "batch",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStateQueryVariables = {
  id: string,
};

export type GetStateQuery = {
  getState?:  {
    __typename: "state",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStatesQueryVariables = {
  filter?: ModelStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatesQuery = {
  listStates?:  {
    __typename: "ModelStateConnection",
    items:  Array< {
      __typename: "state",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDistrictQueryVariables = {
  id: string,
};

export type GetDistrictQuery = {
  getDistrict?:  {
    __typename: "district",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDistrictsQueryVariables = {
  filter?: ModelDistrictFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDistrictsQuery = {
  listDistricts?:  {
    __typename: "ModelDistrictConnection",
    items:  Array< {
      __typename: "district",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpecializationQueryVariables = {
  id: string,
};

export type GetSpecializationQuery = {
  getSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpecializationsQueryVariables = {
  filter?: ModelSpecializationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpecializationsQuery = {
  listSpecializations?:  {
    __typename: "ModelSpecializationConnection",
    items:  Array< {
      __typename: "specialization",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id: string,
};

export type GetDepartmentQuery = {
  getDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "department",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTechStackQueryVariables = {
  id: string,
};

export type GetTechStackQuery = {
  getTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTechStacksQueryVariables = {
  filter?: ModelTechStackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTechStacksQuery = {
  listTechStacks?:  {
    __typename: "ModelTechStackConnection",
    items:  Array< {
      __typename: "techStack",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInstanceSizeQueryVariables = {
  id: string,
};

export type GetInstanceSizeQuery = {
  getInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInstanceSizesQueryVariables = {
  filter?: ModelInstanceSizeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstanceSizesQuery = {
  listInstanceSizes?:  {
    __typename: "ModelInstanceSizeConnection",
    items:  Array< {
      __typename: "instanceSize",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProgrammerSubjectQueryVariables = {
  id: string,
};

export type GetProgrammerSubjectQuery = {
  getProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProgrammerSubjectsQueryVariables = {
  filter?: ModelProgrammerSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgrammerSubjectsQuery = {
  listProgrammerSubjects?:  {
    __typename: "ModelProgrammerSubjectConnection",
    items:  Array< {
      __typename: "programmerSubject",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProgrammerTopicQueryVariables = {
  id: string,
};

export type GetProgrammerTopicQuery = {
  getProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProgrammerTopicsQueryVariables = {
  filter?: ModelProgrammerTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgrammerTopicsQuery = {
  listProgrammerTopics?:  {
    __typename: "ModelProgrammerTopicConnection",
    items:  Array< {
      __typename: "programmerTopic",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProgrammerLevelQueryVariables = {
  id: string,
};

export type GetProgrammerLevelQuery = {
  getProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProgrammerLevelsQueryVariables = {
  filter?: ModelProgrammerLevelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgrammerLevelsQuery = {
  listProgrammerLevels?:  {
    __typename: "ModelProgrammerLevelConnection",
    items:  Array< {
      __typename: "programmerLevel",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentSectionQueryVariables = {
  id: string,
};

export type GetStudentSectionQuery = {
  getStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentSectionsQueryVariables = {
  filter?: ModelStudentSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentSectionsQuery = {
  listStudentSections?:  {
    __typename: "ModelStudentSectionConnection",
    items:  Array< {
      __typename: "StudentSection",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "blog",
      id: string,
      catergory?: Array< string | null > | null,
      title: string,
      description: string,
      status: number,
      userID: string,
      adminID?: string | null,
      hodID?: string | null,
      tutorID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetJobDriveQueryVariables = {
  id: string,
};

export type GetJobDriveQuery = {
  getJobDrive?:  {
    __typename: "jobDrive",
    id: string,
    driveObjective: string,
    campus: Array< string | null >,
    division?: string | null,
    driveName?: string | null,
    companyName?: string | null,
    companyDomainURL?: string | null,
    location?: string | null,
    internshipDuration?: number | null,
    weeksMonths?: string | null,
    jobDescription?: string | null,
    skills?: Array< string | null > | null,
    jobRole?: string | null,
    department?: Array< string | null > | null,
    XthPercentage?: number | null,
    IntermediatePercentage?: number | null,
    DiplomaPercentage?: number | null,
    GraduationPercentage?: number | null,
    year?: Array< string | null > | null,
    SelectionProcess?: string | null,
    DateofDrive?: string | null,
    ReportingTime?: string | null,
    aboutCompany?: string | null,
    additionalInformation?: string | null,
    payType?: string | null,
    payRole?: string | null,
    payAmount?: number | null,
    newResume?: boolean | null,
    userID?: string | null,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    round?:  Array< {
      __typename: "jobRound",
      input?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobDrivesQueryVariables = {
  filter?: ModelJobDriveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobDrivesQuery = {
  listJobDrives?:  {
    __typename: "ModelJobDriveConnection",
    items:  Array< {
      __typename: "jobDrive",
      id: string,
      driveObjective: string,
      campus: Array< string | null >,
      division?: string | null,
      driveName?: string | null,
      companyName?: string | null,
      companyDomainURL?: string | null,
      location?: string | null,
      internshipDuration?: number | null,
      weeksMonths?: string | null,
      jobDescription?: string | null,
      skills?: Array< string | null > | null,
      jobRole?: string | null,
      department?: Array< string | null > | null,
      XthPercentage?: number | null,
      IntermediatePercentage?: number | null,
      DiplomaPercentage?: number | null,
      GraduationPercentage?: number | null,
      year?: Array< string | null > | null,
      SelectionProcess?: string | null,
      DateofDrive?: string | null,
      ReportingTime?: string | null,
      aboutCompany?: string | null,
      additionalInformation?: string | null,
      payType?: string | null,
      payRole?: string | null,
      payAmount?: number | null,
      newResume?: boolean | null,
      userID?: string | null,
      adminID?: string | null,
      hodID?: string | null,
      tutorID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "company",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "company",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentJobNotificationQueryVariables = {
  id: string,
};

export type GetStudentJobNotificationQuery = {
  getStudentJobNotification?:  {
    __typename: "studentJobNotification",
    id: string,
    studentID: string,
    jobID: string,
    roundStatus?:  Array< {
      __typename: "updateroundStatus",
      name?: string | null,
      status?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentJobNotificationsQueryVariables = {
  filter?: ModelStudentJobNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentJobNotificationsQuery = {
  listStudentJobNotifications?:  {
    __typename: "ModelStudentJobNotificationConnection",
    items:  Array< {
      __typename: "studentJobNotification",
      id: string,
      studentID: string,
      jobID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssignMeetingStudentsQueryVariables = {
  id: string,
};

export type GetAssignMeetingStudentsQuery = {
  getAssignMeetingStudents?:  {
    __typename: "AssignMeetingStudents",
    id: string,
    studentID: string,
    meetingID: string,
    attendanceStatus?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssignMeetingStudentsQueryVariables = {
  filter?: ModelAssignMeetingStudentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssignMeetingStudentsQuery = {
  listAssignMeetingStudents?:  {
    __typename: "ModelAssignMeetingStudentsConnection",
    items:  Array< {
      __typename: "AssignMeetingStudents",
      id: string,
      studentID: string,
      meetingID: string,
      attendanceStatus?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "user",
    id: string,
    rollno?: string | null,
    gender?: string | null,
    DOB?: string | null,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    personName: string,
    personDesignation: string,
    OTP?: string | null,
    branch?: string | null,
    section?: string | null,
    yearOfPassout?: string | null,
    yearOfJoining?: string | null,
    tenthPercentage?: number | null,
    InterPercentage?: number | null,
    diplomaPercentage?: number | null,
    graduationPercentage?: number | null,
    postGraduationPercentage?: number | null,
    Organizationcode?: string | null,
    State?: string | null,
    District?: string | null,
    Pincode?: string | null,
    Website?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "user",
      id: string,
      rollno?: string | null,
      gender?: string | null,
      DOB?: string | null,
      email: string,
      password: string,
      MobNumber: string,
      username: string,
      role: string,
      status: number,
      adminID: string,
      type?: string | null,
      uploadType?: string | null,
      groups?: Array< string | null > | null,
      userID?: string | null,
      organisation?: string | null,
      hodID?: string | null,
      tutorID?: string | null,
      Batch?: string | null,
      department?: Array< string | null > | null,
      specialization?: string | null,
      course?: Array< string | null > | null,
      resume?: string | null,
      address?: string | null,
      personName: string,
      personDesignation: string,
      OTP?: string | null,
      branch?: string | null,
      section?: string | null,
      yearOfPassout?: string | null,
      yearOfJoining?: string | null,
      tenthPercentage?: number | null,
      InterPercentage?: number | null,
      diplomaPercentage?: number | null,
      graduationPercentage?: number | null,
      postGraduationPercentage?: number | null,
      Organizationcode?: string | null,
      State?: string | null,
      District?: string | null,
      Pincode?: string | null,
      Website?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMeetingsQueryVariables = {
  id: string,
};

export type GetMeetingsQuery = {
  getMeetings?:  {
    __typename: "meetings",
    id: string,
    title: string,
    meetingLink: string,
    dateTime: string,
    otp: number,
    userID: string,
    campusID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMeetingsQueryVariables = {
  filter?: ModelMeetingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMeetingsQuery = {
  listMeetings?:  {
    __typename: "ModelMeetingsConnection",
    items:  Array< {
      __typename: "meetings",
      id: string,
      title: string,
      meetingLink: string,
      dateTime: string,
      otp: number,
      userID: string,
      campusID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAssignStudentToCourseQueryVariables = {
  id: string,
};

export type GetAssignStudentToCourseQuery = {
  getAssignStudentToCourse?:  {
    __typename: "AssignStudentToCourse",
    id: string,
    studentID: string,
    courseID: string,
    type: string,
    amountPaid?: string | null,
    months?: string | null,
    transactionDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssignStudentToCoursesQueryVariables = {
  filter?: ModelAssignStudentToCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssignStudentToCoursesQuery = {
  listAssignStudentToCourses?:  {
    __typename: "ModelAssignStudentToCourseConnection",
    items:  Array< {
      __typename: "AssignStudentToCourse",
      id: string,
      studentID: string,
      courseID: string,
      type: string,
      amountPaid?: string | null,
      months?: string | null,
      transactionDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionBankDetailsFilterInput | null,
};

export type OnCreateQuestionBankDetailsSubscription = {
  onCreateQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionBankDetailsFilterInput | null,
};

export type OnUpdateQuestionBankDetailsSubscription = {
  onUpdateQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionBankDetailsFilterInput | null,
};

export type OnDeleteQuestionBankDetailsSubscription = {
  onDeleteQuestionBankDetails?:  {
    __typename: "QuestionBankDetails",
    id: string,
    name: string,
    code: string,
    description: string,
    adminID?: string | null,
    userID: string,
    status: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupQuestionsFilterInput | null,
};

export type OnCreateGroupQuestionsSubscription = {
  onCreateGroupQuestions?:  {
    __typename: "GroupQuestions",
    id: string,
    content: string,
    questionBankID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupQuestionsFilterInput | null,
};

export type OnUpdateGroupQuestionsSubscription = {
  onUpdateGroupQuestions?:  {
    __typename: "GroupQuestions",
    id: string,
    content: string,
    questionBankID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionGroupQuestionsFilterInput | null,
};

export type OnDeleteGroupQuestionsSubscription = {
  onDeleteGroupQuestions?:  {
    __typename: "GroupQuestions",
    id: string,
    content: string,
    questionBankID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
};

export type OnCreateAssessmentSubscription = {
  onCreateAssessment?:  {
    __typename: "Assessment",
    id: string,
    testName: string,
    testCode?: string | null,
    testDescription?: string | null,
    testType: string,
    campus: Array< string | null >,
    visibility?: string | null,
    department?: string | null,
    tags: Array< string | null >,
    section?:  Array< {
      __typename: "Assessmentsection",
      id: string,
      sectionId: string,
      duration?: string | null,
      additionalInformation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
};

export type OnUpdateAssessmentSubscription = {
  onUpdateAssessment?:  {
    __typename: "Assessment",
    id: string,
    testName: string,
    testCode?: string | null,
    testDescription?: string | null,
    testType: string,
    campus: Array< string | null >,
    visibility?: string | null,
    department?: string | null,
    tags: Array< string | null >,
    section?:  Array< {
      __typename: "Assessmentsection",
      id: string,
      sectionId: string,
      duration?: string | null,
      additionalInformation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssessmentSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentFilterInput | null,
};

export type OnDeleteAssessmentSubscription = {
  onDeleteAssessment?:  {
    __typename: "Assessment",
    id: string,
    testName: string,
    testCode?: string | null,
    testDescription?: string | null,
    testType: string,
    campus: Array< string | null >,
    visibility?: string | null,
    department?: string | null,
    tags: Array< string | null >,
    section?:  Array< {
      __typename: "Assessmentsection",
      id: string,
      sectionId: string,
      duration?: string | null,
      additionalInformation?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssessmentsectionSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentsectionFilterInput | null,
};

export type OnCreateAssessmentsectionSubscription = {
  onCreateAssessmentsection?:  {
    __typename: "Assessmentsection",
    id: string,
    sectionId: string,
    duration?: string | null,
    additionalInformation?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssessmentsectionSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentsectionFilterInput | null,
};

export type OnUpdateAssessmentsectionSubscription = {
  onUpdateAssessmentsection?:  {
    __typename: "Assessmentsection",
    id: string,
    sectionId: string,
    duration?: string | null,
    additionalInformation?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssessmentsectionSubscriptionVariables = {
  filter?: ModelSubscriptionAssessmentsectionFilterInput | null,
};

export type OnDeleteAssessmentsectionSubscription = {
  onDeleteAssessmentsection?:  {
    __typename: "Assessmentsection",
    id: string,
    sectionId: string,
    duration?: string | null,
    additionalInformation?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionsFilterInput | null,
};

export type OnCreateQuestionsSubscription = {
  onCreateQuestions?:  {
    __typename: "Questions",
    id: string,
    standardInputs?: string | null,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topicId: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options?:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage?: number | null,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: boolean | null,
      fullMarksIfAnyCorrect?: boolean | null,
      fullMarksOnlyIfAllCorrect?: boolean | null,
    } | null > | null,
    solution?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    hint?:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null > | null,
    media?: string | null,
    questionName?: string | null,
    wordLimit?: number | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub?: string | null,
      progTopic?: string | null,
      progLevel?: string | null,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID?: string | null,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    explaination?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    htmlCssJsCode?: string | null,
    groupQuestionID?: string | null,
    questionCode?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionsFilterInput | null,
};

export type OnUpdateQuestionsSubscription = {
  onUpdateQuestions?:  {
    __typename: "Questions",
    id: string,
    standardInputs?: string | null,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topicId: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options?:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage?: number | null,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: boolean | null,
      fullMarksIfAnyCorrect?: boolean | null,
      fullMarksOnlyIfAllCorrect?: boolean | null,
    } | null > | null,
    solution?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    hint?:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null > | null,
    media?: string | null,
    questionName?: string | null,
    wordLimit?: number | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub?: string | null,
      progTopic?: string | null,
      progLevel?: string | null,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID?: string | null,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    explaination?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    htmlCssJsCode?: string | null,
    groupQuestionID?: string | null,
    questionCode?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionsFilterInput | null,
};

export type OnDeleteQuestionsSubscription = {
  onDeleteQuestions?:  {
    __typename: "Questions",
    id: string,
    standardInputs?: string | null,
    questionBankID: string,
    questionType: string,
    questionSubType: string,
    subject: string,
    difficulty: string,
    topicId: string,
    directions?: string | null,
    codeEditor?: string | null,
    textEditor?: string | null,
    options?:  Array< {
      __typename: "option",
      isPartialCorrect: boolean,
      correctAnswer: boolean,
      optionNumber?: number | null,
      weightage?: number | null,
      answer: string,
      negMarks?: number | null,
      splitMarksEqually?: boolean | null,
      fullMarksIfAnyCorrect?: boolean | null,
      fullMarksOnlyIfAllCorrect?: boolean | null,
    } | null > | null,
    solution?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    hint?:  Array< {
      __typename: "hint",
      optionNumber?: number | null,
      hint?: string | null,
    } | null > | null,
    media?: string | null,
    questionName?: string | null,
    wordLimit?: number | null,
    videoSolution?: string | null,
    competency?:  Array< {
      __typename: "competency",
      progSub?: string | null,
      progTopic?: string | null,
      progLevel?: string | null,
    } | null > | null,
    subTopic?: string | null,
    concepts?: string | null,
    adminID?: string | null,
    userID: string,
    blanksCount?: number | null,
    caseSensitive?: boolean | null,
    QuesDependency?: string | null,
    fillUpanswer?:  Array< {
      __typename: "answer",
      splitMarksEqually?: string | null,
      weightage?: number | null,
      answer?: string | null,
      alternateAns?: Array< string | null > | null,
    } | null > | null,
    languages?: Array< string | null > | null,
    SingleLanguage?: string | null,
    inputFormat?: string | null,
    outputFormat?: string | null,
    enableCustomInput?: boolean | null,
    enableAPITesting?: boolean | null,
    codeConstraints?: string | null,
    evaluationTime?: boolean | null,
    timeLimit?: string | null,
    memoryLimit?: string | null,
    outputLimit?: string | null,
    codeSize?: string | null,
    sample?:  Array< {
      __typename: "solution",
      answer?: string | null,
      optionNumber?: number | null,
      bestSolution?: boolean | null,
    } | null > | null,
    backgroundImg?: string | null,
    initialQuery?: string | null,
    fileCount?: number | null,
    fileCountMandatory?: boolean | null,
    fileFormats?: Array< string | null > | null,
    enableAutoRecord?: boolean | null,
    minRecording?: number | null,
    maxRecording?: number | null,
    attemptsToRecord?: number | null,
    autoEvaluation?: boolean | null,
    cloudProvider?: string | null,
    startTime?: number | null,
    ZipFile?: string | null,
    themes?: Array< string | null > | null,
    fileSizes?: Array< string | null > | null,
    techStack?: string | null,
    instanceSize?: string | null,
    explaination?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    htmlCssJsCode?: string | null,
    groupQuestionID?: string | null,
    questionCode?: string | null,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "course",
    id: string,
    courseName?: string | null,
    courseCode?: string | null,
    PublishingText?: string | null,
    description?: string | null,
    file?: string | null,
    showLeaderBoard?: string | null,
    adminID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    batch?: Array< string | null > | null,
    category?: string | null,
    tags?: boolean | null,
    adminID1?: string | null,
    department1?: string | null,
    batch1?: string | null,
    degree?: string | null,
    skuCode?: string | null,
    userID?: string | null,
    hodID?: string | null,
    mediaInputType?: string | null,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    courseValidity?:  Array< {
      __typename: "courseValidity",
      months?: string | null,
      price?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "course",
    id: string,
    courseName?: string | null,
    courseCode?: string | null,
    PublishingText?: string | null,
    description?: string | null,
    file?: string | null,
    showLeaderBoard?: string | null,
    adminID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    batch?: Array< string | null > | null,
    category?: string | null,
    tags?: boolean | null,
    adminID1?: string | null,
    department1?: string | null,
    batch1?: string | null,
    degree?: string | null,
    skuCode?: string | null,
    userID?: string | null,
    hodID?: string | null,
    mediaInputType?: string | null,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    courseValidity?:  Array< {
      __typename: "courseValidity",
      months?: string | null,
      price?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "course",
    id: string,
    courseName?: string | null,
    courseCode?: string | null,
    PublishingText?: string | null,
    description?: string | null,
    file?: string | null,
    showLeaderBoard?: string | null,
    adminID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    batch?: Array< string | null > | null,
    category?: string | null,
    tags?: boolean | null,
    adminID1?: string | null,
    department1?: string | null,
    batch1?: string | null,
    degree?: string | null,
    skuCode?: string | null,
    userID?: string | null,
    hodID?: string | null,
    mediaInputType?: string | null,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    courseValidity?:  Array< {
      __typename: "courseValidity",
      months?: string | null,
      price?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCourseCategoryFilterInput | null,
};

export type OnCreateCourseCategorySubscription = {
  onCreateCourseCategory?:  {
    __typename: "courseCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCourseCategoryFilterInput | null,
};

export type OnUpdateCourseCategorySubscription = {
  onUpdateCourseCategory?:  {
    __typename: "courseCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCourseCategoryFilterInput | null,
};

export type OnDeleteCourseCategorySubscription = {
  onDeleteCourseCategory?:  {
    __typename: "courseCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTestContentSubscriptionVariables = {
  filter?: ModelSubscriptionTestContentFilterInput | null,
};

export type OnCreateTestContentSubscription = {
  onCreateTestContent?:  {
    __typename: "testContent",
    id: string,
    courseID?: string | null,
    testID?: string | null,
    contentID?: string | null,
    description?: string | null,
    timeZone?: string | null,
    fromDate?: string | null,
    toDate?: string | null,
    shuffleQues?: boolean | null,
    shuffleOptions?: boolean | null,
    analyticsReport?: boolean | null,
    hint?: boolean | null,
    result?: boolean | null,
    expectedOutput?: boolean | null,
    testCase?: boolean | null,
    submitCount?: boolean | null,
    lockTest?: boolean | null,
    prevButton?: boolean | null,
    choice?: boolean | null,
    maxQuesMarks?: number | null,
    negMarks?: number | null,
    maxAttend?: boolean | null,
    cutoffMarks?: string | null,
    ruleType?: string | null,
    percentageCondition?: string | null,
    testPercentage?: number | null,
    lockContent?: boolean | null,
    allowDownload?: boolean | null,
    freePreview?: boolean | null,
    limit?: string | null,
    resultPercentage?: number | null,
    maxQuesAttended?: number | null,
    type?: string | null,
    displayQuestions?: string | null,
    timer?:  {
      __typename: "Timer",
      hours?: number | null,
      minutes?: number | null,
      seconds?: number | null,
    } | null,
    sectionWiseMarks?:  Array< {
      __typename: "sectionWiseMarks",
      sectionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    QuestionWiseMarks?:  Array< {
      __typename: "QuestionWiseMarks",
      sectionID?: string | null,
      questionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    marksType?: string | null,
    actualMarks?: string | null,
    status?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTestContentSubscriptionVariables = {
  filter?: ModelSubscriptionTestContentFilterInput | null,
};

export type OnUpdateTestContentSubscription = {
  onUpdateTestContent?:  {
    __typename: "testContent",
    id: string,
    courseID?: string | null,
    testID?: string | null,
    contentID?: string | null,
    description?: string | null,
    timeZone?: string | null,
    fromDate?: string | null,
    toDate?: string | null,
    shuffleQues?: boolean | null,
    shuffleOptions?: boolean | null,
    analyticsReport?: boolean | null,
    hint?: boolean | null,
    result?: boolean | null,
    expectedOutput?: boolean | null,
    testCase?: boolean | null,
    submitCount?: boolean | null,
    lockTest?: boolean | null,
    prevButton?: boolean | null,
    choice?: boolean | null,
    maxQuesMarks?: number | null,
    negMarks?: number | null,
    maxAttend?: boolean | null,
    cutoffMarks?: string | null,
    ruleType?: string | null,
    percentageCondition?: string | null,
    testPercentage?: number | null,
    lockContent?: boolean | null,
    allowDownload?: boolean | null,
    freePreview?: boolean | null,
    limit?: string | null,
    resultPercentage?: number | null,
    maxQuesAttended?: number | null,
    type?: string | null,
    displayQuestions?: string | null,
    timer?:  {
      __typename: "Timer",
      hours?: number | null,
      minutes?: number | null,
      seconds?: number | null,
    } | null,
    sectionWiseMarks?:  Array< {
      __typename: "sectionWiseMarks",
      sectionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    QuestionWiseMarks?:  Array< {
      __typename: "QuestionWiseMarks",
      sectionID?: string | null,
      questionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    marksType?: string | null,
    actualMarks?: string | null,
    status?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTestContentSubscriptionVariables = {
  filter?: ModelSubscriptionTestContentFilterInput | null,
};

export type OnDeleteTestContentSubscription = {
  onDeleteTestContent?:  {
    __typename: "testContent",
    id: string,
    courseID?: string | null,
    testID?: string | null,
    contentID?: string | null,
    description?: string | null,
    timeZone?: string | null,
    fromDate?: string | null,
    toDate?: string | null,
    shuffleQues?: boolean | null,
    shuffleOptions?: boolean | null,
    analyticsReport?: boolean | null,
    hint?: boolean | null,
    result?: boolean | null,
    expectedOutput?: boolean | null,
    testCase?: boolean | null,
    submitCount?: boolean | null,
    lockTest?: boolean | null,
    prevButton?: boolean | null,
    choice?: boolean | null,
    maxQuesMarks?: number | null,
    negMarks?: number | null,
    maxAttend?: boolean | null,
    cutoffMarks?: string | null,
    ruleType?: string | null,
    percentageCondition?: string | null,
    testPercentage?: number | null,
    lockContent?: boolean | null,
    allowDownload?: boolean | null,
    freePreview?: boolean | null,
    limit?: string | null,
    resultPercentage?: number | null,
    maxQuesAttended?: number | null,
    type?: string | null,
    displayQuestions?: string | null,
    timer?:  {
      __typename: "Timer",
      hours?: number | null,
      minutes?: number | null,
      seconds?: number | null,
    } | null,
    sectionWiseMarks?:  Array< {
      __typename: "sectionWiseMarks",
      sectionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    QuestionWiseMarks?:  Array< {
      __typename: "QuestionWiseMarks",
      sectionID?: string | null,
      questionID?: string | null,
      cutoffMarks?: string | null,
      actualMarks?: string | null,
    } | null > | null,
    marksType?: string | null,
    actualMarks?: string | null,
    status?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentTestSubscriptionVariables = {
  filter?: ModelSubscriptionStudentTestFilterInput | null,
};

export type OnCreateStudentTestSubscription = {
  onCreateStudentTest?:  {
    __typename: "studentTest",
    id: string,
    studentID?: string | null,
    testContentID?: string | null,
    courseID?: string | null,
    percentage?: string | null,
    totalMarks?: string | null,
    ScoredMarks?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentTestSubscriptionVariables = {
  filter?: ModelSubscriptionStudentTestFilterInput | null,
};

export type OnUpdateStudentTestSubscription = {
  onUpdateStudentTest?:  {
    __typename: "studentTest",
    id: string,
    studentID?: string | null,
    testContentID?: string | null,
    courseID?: string | null,
    percentage?: string | null,
    totalMarks?: string | null,
    ScoredMarks?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentTestSubscriptionVariables = {
  filter?: ModelSubscriptionStudentTestFilterInput | null,
};

export type OnDeleteStudentTestSubscription = {
  onDeleteStudentTest?:  {
    __typename: "studentTest",
    id: string,
    studentID?: string | null,
    testContentID?: string | null,
    courseID?: string | null,
    percentage?: string | null,
    totalMarks?: string | null,
    ScoredMarks?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentTestQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionStudentTestQuestionsFilterInput | null,
};

export type OnCreateStudentTestQuestionsSubscription = {
  onCreateStudentTestQuestions?:  {
    __typename: "studentTestQuestions",
    id: string,
    studentTest?: string | null,
    sectionID?: string | null,
    questionID?: string | null,
    answerOption?: string | null,
    actualMarks?: string | null,
    negativeMarks?: string | null,
    result?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentTestQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionStudentTestQuestionsFilterInput | null,
};

export type OnUpdateStudentTestQuestionsSubscription = {
  onUpdateStudentTestQuestions?:  {
    __typename: "studentTestQuestions",
    id: string,
    studentTest?: string | null,
    sectionID?: string | null,
    questionID?: string | null,
    answerOption?: string | null,
    actualMarks?: string | null,
    negativeMarks?: string | null,
    result?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentTestQuestionsSubscriptionVariables = {
  filter?: ModelSubscriptionStudentTestQuestionsFilterInput | null,
};

export type OnDeleteStudentTestQuestionsSubscription = {
  onDeleteStudentTestQuestions?:  {
    __typename: "studentTestQuestions",
    id: string,
    studentTest?: string | null,
    sectionID?: string | null,
    questionID?: string | null,
    answerOption?: string | null,
    actualMarks?: string | null,
    negativeMarks?: string | null,
    result?: string | null,
    compilerOutput?: string | null,
    compilerLanguage?: string | null,
    compilerProgram?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
};

export type OnCreateTestSubscription = {
  onCreateTest?:  {
    __typename: "Test",
    id: string,
    nameOfTest?: string | null,
    testCode?: string | null,
    testDescription?: string | null,
    testType?: string | null,
    adminID?: Array< string | null > | null,
    hodID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    section?:  Array< {
      __typename: "testSection",
      id?: string | null,
      sectionName?: string | null,
      additionalInformation?: string | null,
    } | null > | null,
    userID?: string | null,
    manualEvaluation?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
};

export type OnUpdateTestSubscription = {
  onUpdateTest?:  {
    __typename: "Test",
    id: string,
    nameOfTest?: string | null,
    testCode?: string | null,
    testDescription?: string | null,
    testType?: string | null,
    adminID?: Array< string | null > | null,
    hodID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    section?:  Array< {
      __typename: "testSection",
      id?: string | null,
      sectionName?: string | null,
      additionalInformation?: string | null,
    } | null > | null,
    userID?: string | null,
    manualEvaluation?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
};

export type OnDeleteTestSubscription = {
  onDeleteTest?:  {
    __typename: "Test",
    id: string,
    nameOfTest?: string | null,
    testCode?: string | null,
    testDescription?: string | null,
    testType?: string | null,
    adminID?: Array< string | null > | null,
    hodID?: Array< string | null > | null,
    visibility?: string | null,
    department?: Array< string | null > | null,
    tags?: Array< string | null > | null,
    section?:  Array< {
      __typename: "testSection",
      id?: string | null,
      sectionName?: string | null,
      additionalInformation?: string | null,
    } | null > | null,
    userID?: string | null,
    manualEvaluation?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTestQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionTestQuestionFilterInput | null,
};

export type OnCreateTestQuestionSubscription = {
  onCreateTestQuestion?:  {
    __typename: "TestQuestion",
    id: string,
    testID: string,
    sectionID?: string | null,
    questionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTestQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionTestQuestionFilterInput | null,
};

export type OnUpdateTestQuestionSubscription = {
  onUpdateTestQuestion?:  {
    __typename: "TestQuestion",
    id: string,
    testID: string,
    sectionID?: string | null,
    questionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTestQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionTestQuestionFilterInput | null,
};

export type OnDeleteTestQuestionSubscription = {
  onDeleteTestQuestion?:  {
    __typename: "TestQuestion",
    id: string,
    testID: string,
    sectionID?: string | null,
    questionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionContentBankDetailsFilterInput | null,
};

export type OnCreateContentBankDetailsSubscription = {
  onCreateContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    groups: Array< string | null >,
    userID: string,
    status: number,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionContentBankDetailsFilterInput | null,
};

export type OnUpdateContentBankDetailsSubscription = {
  onUpdateContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    groups: Array< string | null >,
    userID: string,
    status: number,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentBankDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionContentBankDetailsFilterInput | null,
};

export type OnDeleteContentBankDetailsSubscription = {
  onDeleteContentBankDetails?:  {
    __typename: "ContentBankDetails",
    id: string,
    name: string,
    description: string,
    adminID: string,
    visibility: string,
    groups: Array< string | null >,
    userID: string,
    status: number,
    subject?: string | null,
    topicId?: string | null,
    subTopic?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnCreateContentSubscription = {
  onCreateContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topicId: string,
    subject: string,
    content: string,
    averageReadTime: string,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnUpdateContentSubscription = {
  onUpdateContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topicId: string,
    subject: string,
    content: string,
    averageReadTime: string,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnDeleteContentSubscription = {
  onDeleteContent?:  {
    __typename: "content",
    id: string,
    contentBankID: string,
    contentType: string,
    contentsubType: string,
    contentName: string,
    subTopic: string,
    topicId: string,
    subject: string,
    content: string,
    averageReadTime: string,
    additionalInformation: string,
    adminID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMyTable2SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable2FilterInput | null,
};

export type OnCreateMyTable2Subscription = {
  onCreateMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMyTable2SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable2FilterInput | null,
};

export type OnUpdateMyTable2Subscription = {
  onUpdateMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMyTable2SubscriptionVariables = {
  filter?: ModelSubscriptionMyTable2FilterInput | null,
};

export type OnDeleteMyTable2Subscription = {
  onDeleteMyTable2?:  {
    __typename: "myTable2",
    id: string,
    title: string,
    gender: string,
    address: string,
    age: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "subject",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "subject",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionSubjectFilterInput | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "subject",
    id: string,
    name: string,
    status: number,
    userID: string,
    adminID: string,
    code: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic?:  {
    __typename: "topic",
    id: string,
    subjectID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic?:  {
    __typename: "topic",
    id: string,
    subjectID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic?:  {
    __typename: "topic",
    id: string,
    subjectID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubTopicSubscriptionVariables = {
  filter?: ModelSubscriptionSubTopicFilterInput | null,
};

export type OnCreateSubTopicSubscription = {
  onCreateSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubTopicSubscriptionVariables = {
  filter?: ModelSubscriptionSubTopicFilterInput | null,
};

export type OnUpdateSubTopicSubscription = {
  onUpdateSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubTopicSubscriptionVariables = {
  filter?: ModelSubscriptionSubTopicFilterInput | null,
};

export type OnDeleteSubTopicSubscription = {
  onDeleteSubTopic?:  {
    __typename: "subTopic",
    id: string,
    topicID: string,
    name: string,
    status: number,
    userID: string,
    code: string,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentJobAppliedJobSubscriptionVariables = {
  filter?: ModelSubscriptionStudentJobAppliedJobFilterInput | null,
};

export type OnCreateStudentJobAppliedJobSubscription = {
  onCreateStudentJobAppliedJob?:  {
    __typename: "studentJobAppliedJob",
    id: string,
    studentID: string,
    jobID: string,
    status?: string | null,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentJobAppliedJobSubscriptionVariables = {
  filter?: ModelSubscriptionStudentJobAppliedJobFilterInput | null,
};

export type OnUpdateStudentJobAppliedJobSubscription = {
  onUpdateStudentJobAppliedJob?:  {
    __typename: "studentJobAppliedJob",
    id: string,
    studentID: string,
    jobID: string,
    status?: string | null,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentJobAppliedJobSubscriptionVariables = {
  filter?: ModelSubscriptionStudentJobAppliedJobFilterInput | null,
};

export type OnDeleteStudentJobAppliedJobSubscription = {
  onDeleteStudentJobAppliedJob?:  {
    __typename: "studentJobAppliedJob",
    id: string,
    studentID: string,
    jobID: string,
    status?: string | null,
    adminID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBranchSubscriptionVariables = {
  filter?: ModelSubscriptionBranchFilterInput | null,
};

export type OnCreateBranchSubscription = {
  onCreateBranch?:  {
    __typename: "branch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBranchSubscriptionVariables = {
  filter?: ModelSubscriptionBranchFilterInput | null,
};

export type OnUpdateBranchSubscription = {
  onUpdateBranch?:  {
    __typename: "branch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBranchSubscriptionVariables = {
  filter?: ModelSubscriptionBranchFilterInput | null,
};

export type OnDeleteBranchSubscription = {
  onDeleteBranch?:  {
    __typename: "branch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateYearSubscriptionVariables = {
  filter?: ModelSubscriptionYearFilterInput | null,
};

export type OnCreateYearSubscription = {
  onCreateYear?:  {
    __typename: "year",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateYearSubscriptionVariables = {
  filter?: ModelSubscriptionYearFilterInput | null,
};

export type OnUpdateYearSubscription = {
  onUpdateYear?:  {
    __typename: "year",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteYearSubscriptionVariables = {
  filter?: ModelSubscriptionYearFilterInput | null,
};

export type OnDeleteYearSubscription = {
  onDeleteYear?:  {
    __typename: "year",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection?:  {
    __typename: "section",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection?:  {
    __typename: "section",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection?:  {
    __typename: "section",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "skill",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "skill",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "skill",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "tag",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlogCategorySubscriptionVariables = {
  filter?: ModelSubscriptionBlogCategoryFilterInput | null,
};

export type OnCreateBlogCategorySubscription = {
  onCreateBlogCategory?:  {
    __typename: "blogCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogCategorySubscriptionVariables = {
  filter?: ModelSubscriptionBlogCategoryFilterInput | null,
};

export type OnUpdateBlogCategorySubscription = {
  onUpdateBlogCategory?:  {
    __typename: "blogCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogCategorySubscriptionVariables = {
  filter?: ModelSubscriptionBlogCategoryFilterInput | null,
};

export type OnDeleteBlogCategorySubscription = {
  onDeleteBlogCategory?:  {
    __typename: "blogCategory",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateThemesSubscriptionVariables = {
  filter?: ModelSubscriptionThemesFilterInput | null,
};

export type OnCreateThemesSubscription = {
  onCreateThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateThemesSubscriptionVariables = {
  filter?: ModelSubscriptionThemesFilterInput | null,
};

export type OnUpdateThemesSubscription = {
  onUpdateThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteThemesSubscriptionVariables = {
  filter?: ModelSubscriptionThemesFilterInput | null,
};

export type OnDeleteThemesSubscription = {
  onDeleteThemes?:  {
    __typename: "themes",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnCreateLanguageSubscription = {
  onCreateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnUpdateLanguageSubscription = {
  onUpdateLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLanguageSubscriptionVariables = {
  filter?: ModelSubscriptionLanguageFilterInput | null,
};

export type OnDeleteLanguageSubscription = {
  onDeleteLanguage?:  {
    __typename: "Language",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBatchSubscriptionVariables = {
  filter?: ModelSubscriptionBatchFilterInput | null,
};

export type OnCreateBatchSubscription = {
  onCreateBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBatchSubscriptionVariables = {
  filter?: ModelSubscriptionBatchFilterInput | null,
};

export type OnUpdateBatchSubscription = {
  onUpdateBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBatchSubscriptionVariables = {
  filter?: ModelSubscriptionBatchFilterInput | null,
};

export type OnDeleteBatchSubscription = {
  onDeleteBatch?:  {
    __typename: "batch",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStateSubscriptionVariables = {
  filter?: ModelSubscriptionStateFilterInput | null,
};

export type OnCreateStateSubscription = {
  onCreateState?:  {
    __typename: "state",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStateSubscriptionVariables = {
  filter?: ModelSubscriptionStateFilterInput | null,
};

export type OnUpdateStateSubscription = {
  onUpdateState?:  {
    __typename: "state",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStateSubscriptionVariables = {
  filter?: ModelSubscriptionStateFilterInput | null,
};

export type OnDeleteStateSubscription = {
  onDeleteState?:  {
    __typename: "state",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDistrictSubscriptionVariables = {
  filter?: ModelSubscriptionDistrictFilterInput | null,
};

export type OnCreateDistrictSubscription = {
  onCreateDistrict?:  {
    __typename: "district",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDistrictSubscriptionVariables = {
  filter?: ModelSubscriptionDistrictFilterInput | null,
};

export type OnUpdateDistrictSubscription = {
  onUpdateDistrict?:  {
    __typename: "district",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDistrictSubscriptionVariables = {
  filter?: ModelSubscriptionDistrictFilterInput | null,
};

export type OnDeleteDistrictSubscription = {
  onDeleteDistrict?:  {
    __typename: "district",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnCreateSpecializationSubscription = {
  onCreateSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnUpdateSpecializationSubscription = {
  onUpdateSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpecializationSubscriptionVariables = {
  filter?: ModelSubscriptionSpecializationFilterInput | null,
};

export type OnDeleteSpecializationSubscription = {
  onDeleteSpecialization?:  {
    __typename: "specialization",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment?:  {
    __typename: "department",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTechStackSubscriptionVariables = {
  filter?: ModelSubscriptionTechStackFilterInput | null,
};

export type OnCreateTechStackSubscription = {
  onCreateTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTechStackSubscriptionVariables = {
  filter?: ModelSubscriptionTechStackFilterInput | null,
};

export type OnUpdateTechStackSubscription = {
  onUpdateTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTechStackSubscriptionVariables = {
  filter?: ModelSubscriptionTechStackFilterInput | null,
};

export type OnDeleteTechStackSubscription = {
  onDeleteTechStack?:  {
    __typename: "techStack",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateInstanceSizeSubscriptionVariables = {
  filter?: ModelSubscriptionInstanceSizeFilterInput | null,
};

export type OnCreateInstanceSizeSubscription = {
  onCreateInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInstanceSizeSubscriptionVariables = {
  filter?: ModelSubscriptionInstanceSizeFilterInput | null,
};

export type OnUpdateInstanceSizeSubscription = {
  onUpdateInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInstanceSizeSubscriptionVariables = {
  filter?: ModelSubscriptionInstanceSizeFilterInput | null,
};

export type OnDeleteInstanceSizeSubscription = {
  onDeleteInstanceSize?:  {
    __typename: "instanceSize",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProgrammerSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerSubjectFilterInput | null,
};

export type OnCreateProgrammerSubjectSubscription = {
  onCreateProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProgrammerSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerSubjectFilterInput | null,
};

export type OnUpdateProgrammerSubjectSubscription = {
  onUpdateProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProgrammerSubjectSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerSubjectFilterInput | null,
};

export type OnDeleteProgrammerSubjectSubscription = {
  onDeleteProgrammerSubject?:  {
    __typename: "programmerSubject",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProgrammerTopicSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerTopicFilterInput | null,
};

export type OnCreateProgrammerTopicSubscription = {
  onCreateProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProgrammerTopicSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerTopicFilterInput | null,
};

export type OnUpdateProgrammerTopicSubscription = {
  onUpdateProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProgrammerTopicSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerTopicFilterInput | null,
};

export type OnDeleteProgrammerTopicSubscription = {
  onDeleteProgrammerTopic?:  {
    __typename: "programmerTopic",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProgrammerLevelSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerLevelFilterInput | null,
};

export type OnCreateProgrammerLevelSubscription = {
  onCreateProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProgrammerLevelSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerLevelFilterInput | null,
};

export type OnUpdateProgrammerLevelSubscription = {
  onUpdateProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProgrammerLevelSubscriptionVariables = {
  filter?: ModelSubscriptionProgrammerLevelFilterInput | null,
};

export type OnDeleteProgrammerLevelSubscription = {
  onDeleteProgrammerLevel?:  {
    __typename: "programmerLevel",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentSectionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSectionFilterInput | null,
};

export type OnCreateStudentSectionSubscription = {
  onCreateStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSectionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSectionFilterInput | null,
};

export type OnUpdateStudentSectionSubscription = {
  onUpdateStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSectionSubscriptionVariables = {
  filter?: ModelSubscriptionStudentSectionFilterInput | null,
};

export type OnDeleteStudentSectionSubscription = {
  onDeleteStudentSection?:  {
    __typename: "StudentSection",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "blog",
    id: string,
    catergory?: Array< string | null > | null,
    title: string,
    description: string,
    status: number,
    userID: string,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJobDriveSubscriptionVariables = {
  filter?: ModelSubscriptionJobDriveFilterInput | null,
};

export type OnCreateJobDriveSubscription = {
  onCreateJobDrive?:  {
    __typename: "jobDrive",
    id: string,
    driveObjective: string,
    campus: Array< string | null >,
    division?: string | null,
    driveName?: string | null,
    companyName?: string | null,
    companyDomainURL?: string | null,
    location?: string | null,
    internshipDuration?: number | null,
    weeksMonths?: string | null,
    jobDescription?: string | null,
    skills?: Array< string | null > | null,
    jobRole?: string | null,
    department?: Array< string | null > | null,
    XthPercentage?: number | null,
    IntermediatePercentage?: number | null,
    DiplomaPercentage?: number | null,
    GraduationPercentage?: number | null,
    year?: Array< string | null > | null,
    SelectionProcess?: string | null,
    DateofDrive?: string | null,
    ReportingTime?: string | null,
    aboutCompany?: string | null,
    additionalInformation?: string | null,
    payType?: string | null,
    payRole?: string | null,
    payAmount?: number | null,
    newResume?: boolean | null,
    userID?: string | null,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    round?:  Array< {
      __typename: "jobRound",
      input?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobDriveSubscriptionVariables = {
  filter?: ModelSubscriptionJobDriveFilterInput | null,
};

export type OnUpdateJobDriveSubscription = {
  onUpdateJobDrive?:  {
    __typename: "jobDrive",
    id: string,
    driveObjective: string,
    campus: Array< string | null >,
    division?: string | null,
    driveName?: string | null,
    companyName?: string | null,
    companyDomainURL?: string | null,
    location?: string | null,
    internshipDuration?: number | null,
    weeksMonths?: string | null,
    jobDescription?: string | null,
    skills?: Array< string | null > | null,
    jobRole?: string | null,
    department?: Array< string | null > | null,
    XthPercentage?: number | null,
    IntermediatePercentage?: number | null,
    DiplomaPercentage?: number | null,
    GraduationPercentage?: number | null,
    year?: Array< string | null > | null,
    SelectionProcess?: string | null,
    DateofDrive?: string | null,
    ReportingTime?: string | null,
    aboutCompany?: string | null,
    additionalInformation?: string | null,
    payType?: string | null,
    payRole?: string | null,
    payAmount?: number | null,
    newResume?: boolean | null,
    userID?: string | null,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    round?:  Array< {
      __typename: "jobRound",
      input?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobDriveSubscriptionVariables = {
  filter?: ModelSubscriptionJobDriveFilterInput | null,
};

export type OnDeleteJobDriveSubscription = {
  onDeleteJobDrive?:  {
    __typename: "jobDrive",
    id: string,
    driveObjective: string,
    campus: Array< string | null >,
    division?: string | null,
    driveName?: string | null,
    companyName?: string | null,
    companyDomainURL?: string | null,
    location?: string | null,
    internshipDuration?: number | null,
    weeksMonths?: string | null,
    jobDescription?: string | null,
    skills?: Array< string | null > | null,
    jobRole?: string | null,
    department?: Array< string | null > | null,
    XthPercentage?: number | null,
    IntermediatePercentage?: number | null,
    DiplomaPercentage?: number | null,
    GraduationPercentage?: number | null,
    year?: Array< string | null > | null,
    SelectionProcess?: string | null,
    DateofDrive?: string | null,
    ReportingTime?: string | null,
    aboutCompany?: string | null,
    additionalInformation?: string | null,
    payType?: string | null,
    payRole?: string | null,
    payAmount?: number | null,
    newResume?: boolean | null,
    userID?: string | null,
    adminID?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    round?:  Array< {
      __typename: "jobRound",
      input?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "company",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "company",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "company",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentJobNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionStudentJobNotificationFilterInput | null,
};

export type OnCreateStudentJobNotificationSubscription = {
  onCreateStudentJobNotification?:  {
    __typename: "studentJobNotification",
    id: string,
    studentID: string,
    jobID: string,
    roundStatus?:  Array< {
      __typename: "updateroundStatus",
      name?: string | null,
      status?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentJobNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionStudentJobNotificationFilterInput | null,
};

export type OnUpdateStudentJobNotificationSubscription = {
  onUpdateStudentJobNotification?:  {
    __typename: "studentJobNotification",
    id: string,
    studentID: string,
    jobID: string,
    roundStatus?:  Array< {
      __typename: "updateroundStatus",
      name?: string | null,
      status?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentJobNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionStudentJobNotificationFilterInput | null,
};

export type OnDeleteStudentJobNotificationSubscription = {
  onDeleteStudentJobNotification?:  {
    __typename: "studentJobNotification",
    id: string,
    studentID: string,
    jobID: string,
    roundStatus?:  Array< {
      __typename: "updateroundStatus",
      name?: string | null,
      status?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssignMeetingStudentsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignMeetingStudentsFilterInput | null,
};

export type OnCreateAssignMeetingStudentsSubscription = {
  onCreateAssignMeetingStudents?:  {
    __typename: "AssignMeetingStudents",
    id: string,
    studentID: string,
    meetingID: string,
    attendanceStatus?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssignMeetingStudentsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignMeetingStudentsFilterInput | null,
};

export type OnUpdateAssignMeetingStudentsSubscription = {
  onUpdateAssignMeetingStudents?:  {
    __typename: "AssignMeetingStudents",
    id: string,
    studentID: string,
    meetingID: string,
    attendanceStatus?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssignMeetingStudentsSubscriptionVariables = {
  filter?: ModelSubscriptionAssignMeetingStudentsFilterInput | null,
};

export type OnDeleteAssignMeetingStudentsSubscription = {
  onDeleteAssignMeetingStudents?:  {
    __typename: "AssignMeetingStudents",
    id: string,
    studentID: string,
    meetingID: string,
    attendanceStatus?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "user",
    id: string,
    rollno?: string | null,
    gender?: string | null,
    DOB?: string | null,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    personName: string,
    personDesignation: string,
    OTP?: string | null,
    branch?: string | null,
    section?: string | null,
    yearOfPassout?: string | null,
    yearOfJoining?: string | null,
    tenthPercentage?: number | null,
    InterPercentage?: number | null,
    diplomaPercentage?: number | null,
    graduationPercentage?: number | null,
    postGraduationPercentage?: number | null,
    Organizationcode?: string | null,
    State?: string | null,
    District?: string | null,
    Pincode?: string | null,
    Website?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "user",
    id: string,
    rollno?: string | null,
    gender?: string | null,
    DOB?: string | null,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    personName: string,
    personDesignation: string,
    OTP?: string | null,
    branch?: string | null,
    section?: string | null,
    yearOfPassout?: string | null,
    yearOfJoining?: string | null,
    tenthPercentage?: number | null,
    InterPercentage?: number | null,
    diplomaPercentage?: number | null,
    graduationPercentage?: number | null,
    postGraduationPercentage?: number | null,
    Organizationcode?: string | null,
    State?: string | null,
    District?: string | null,
    Pincode?: string | null,
    Website?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "user",
    id: string,
    rollno?: string | null,
    gender?: string | null,
    DOB?: string | null,
    email: string,
    password: string,
    MobNumber: string,
    username: string,
    role: string,
    status: number,
    permissions?:  {
      __typename: "Permissions",
    } | null,
    adminID: string,
    type?: string | null,
    uploadType?: string | null,
    groups?: Array< string | null > | null,
    userID?: string | null,
    organisation?: string | null,
    hodID?: string | null,
    tutorID?: string | null,
    Batch?: string | null,
    department?: Array< string | null > | null,
    specialization?: string | null,
    course?: Array< string | null > | null,
    resume?: string | null,
    address?: string | null,
    personName: string,
    personDesignation: string,
    OTP?: string | null,
    branch?: string | null,
    section?: string | null,
    yearOfPassout?: string | null,
    yearOfJoining?: string | null,
    tenthPercentage?: number | null,
    InterPercentage?: number | null,
    diplomaPercentage?: number | null,
    graduationPercentage?: number | null,
    postGraduationPercentage?: number | null,
    Organizationcode?: string | null,
    State?: string | null,
    District?: string | null,
    Pincode?: string | null,
    Website?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMeetingsSubscriptionVariables = {
  filter?: ModelSubscriptionMeetingsFilterInput | null,
};

export type OnCreateMeetingsSubscription = {
  onCreateMeetings?:  {
    __typename: "meetings",
    id: string,
    title: string,
    meetingLink: string,
    dateTime: string,
    otp: number,
    userID: string,
    campusID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMeetingsSubscriptionVariables = {
  filter?: ModelSubscriptionMeetingsFilterInput | null,
};

export type OnUpdateMeetingsSubscription = {
  onUpdateMeetings?:  {
    __typename: "meetings",
    id: string,
    title: string,
    meetingLink: string,
    dateTime: string,
    otp: number,
    userID: string,
    campusID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMeetingsSubscriptionVariables = {
  filter?: ModelSubscriptionMeetingsFilterInput | null,
};

export type OnDeleteMeetingsSubscription = {
  onDeleteMeetings?:  {
    __typename: "meetings",
    id: string,
    title: string,
    meetingLink: string,
    dateTime: string,
    otp: number,
    userID: string,
    campusID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssignStudentToCourseSubscriptionVariables = {
  filter?: ModelSubscriptionAssignStudentToCourseFilterInput | null,
};

export type OnCreateAssignStudentToCourseSubscription = {
  onCreateAssignStudentToCourse?:  {
    __typename: "AssignStudentToCourse",
    id: string,
    studentID: string,
    courseID: string,
    type: string,
    amountPaid?: string | null,
    months?: string | null,
    transactionDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssignStudentToCourseSubscriptionVariables = {
  filter?: ModelSubscriptionAssignStudentToCourseFilterInput | null,
};

export type OnUpdateAssignStudentToCourseSubscription = {
  onUpdateAssignStudentToCourse?:  {
    __typename: "AssignStudentToCourse",
    id: string,
    studentID: string,
    courseID: string,
    type: string,
    amountPaid?: string | null,
    months?: string | null,
    transactionDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssignStudentToCourseSubscriptionVariables = {
  filter?: ModelSubscriptionAssignStudentToCourseFilterInput | null,
};

export type OnDeleteAssignStudentToCourseSubscription = {
  onDeleteAssignStudentToCourse?:  {
    __typename: "AssignStudentToCourse",
    id: string,
    studentID: string,
    courseID: string,
    type: string,
    amountPaid?: string | null,
    months?: string | null,
    transactionDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
