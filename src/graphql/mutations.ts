/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createQuestionBankDetails = /* GraphQL */ `mutation CreateQuestionBankDetails(
  $input: CreateQuestionBankDetailsInput!
  $condition: ModelQuestionBankDetailsConditionInput
) {
  createQuestionBankDetails(input: $input, condition: $condition) {
    id
    name
    code
    description
    adminID
    userID
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionBankDetailsMutationVariables,
  APITypes.CreateQuestionBankDetailsMutation
>;
export const updateQuestionBankDetails = /* GraphQL */ `mutation UpdateQuestionBankDetails(
  $input: UpdateQuestionBankDetailsInput!
  $condition: ModelQuestionBankDetailsConditionInput
) {
  updateQuestionBankDetails(input: $input, condition: $condition) {
    id
    name
    code
    description
    adminID
    userID
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionBankDetailsMutationVariables,
  APITypes.UpdateQuestionBankDetailsMutation
>;
export const deleteQuestionBankDetails = /* GraphQL */ `mutation DeleteQuestionBankDetails(
  $input: DeleteQuestionBankDetailsInput!
  $condition: ModelQuestionBankDetailsConditionInput
) {
  deleteQuestionBankDetails(input: $input, condition: $condition) {
    id
    name
    code
    description
    adminID
    userID
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionBankDetailsMutationVariables,
  APITypes.DeleteQuestionBankDetailsMutation
>;
export const createGroupQuestions = /* GraphQL */ `mutation CreateGroupQuestions(
  $input: CreateGroupQuestionsInput!
  $condition: ModelGroupQuestionsConditionInput
) {
  createGroupQuestions(input: $input, condition: $condition) {
    id
    content
    questionBankID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupQuestionsMutationVariables,
  APITypes.CreateGroupQuestionsMutation
>;
export const updateGroupQuestions = /* GraphQL */ `mutation UpdateGroupQuestions(
  $input: UpdateGroupQuestionsInput!
  $condition: ModelGroupQuestionsConditionInput
) {
  updateGroupQuestions(input: $input, condition: $condition) {
    id
    content
    questionBankID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGroupQuestionsMutationVariables,
  APITypes.UpdateGroupQuestionsMutation
>;
export const deleteGroupQuestions = /* GraphQL */ `mutation DeleteGroupQuestions(
  $input: DeleteGroupQuestionsInput!
  $condition: ModelGroupQuestionsConditionInput
) {
  deleteGroupQuestions(input: $input, condition: $condition) {
    id
    content
    questionBankID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupQuestionsMutationVariables,
  APITypes.DeleteGroupQuestionsMutation
>;
export const createAssessment = /* GraphQL */ `mutation CreateAssessment(
  $input: CreateAssessmentInput!
  $condition: ModelAssessmentConditionInput
) {
  createAssessment(input: $input, condition: $condition) {
    id
    testName
    testCode
    testDescription
    testType
    campus
    visibility
    department
    tags
    section {
      id
      sectionId
      duration
      additionalInformation
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAssessmentMutationVariables,
  APITypes.CreateAssessmentMutation
>;
export const updateAssessment = /* GraphQL */ `mutation UpdateAssessment(
  $input: UpdateAssessmentInput!
  $condition: ModelAssessmentConditionInput
) {
  updateAssessment(input: $input, condition: $condition) {
    id
    testName
    testCode
    testDescription
    testType
    campus
    visibility
    department
    tags
    section {
      id
      sectionId
      duration
      additionalInformation
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAssessmentMutationVariables,
  APITypes.UpdateAssessmentMutation
>;
export const deleteAssessment = /* GraphQL */ `mutation DeleteAssessment(
  $input: DeleteAssessmentInput!
  $condition: ModelAssessmentConditionInput
) {
  deleteAssessment(input: $input, condition: $condition) {
    id
    testName
    testCode
    testDescription
    testType
    campus
    visibility
    department
    tags
    section {
      id
      sectionId
      duration
      additionalInformation
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAssessmentMutationVariables,
  APITypes.DeleteAssessmentMutation
>;
export const createAssessmentsection = /* GraphQL */ `mutation CreateAssessmentsection(
  $input: CreateAssessmentsectionInput!
  $condition: ModelAssessmentsectionConditionInput
) {
  createAssessmentsection(input: $input, condition: $condition) {
    id
    sectionId
    duration
    additionalInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAssessmentsectionMutationVariables,
  APITypes.CreateAssessmentsectionMutation
>;
export const updateAssessmentsection = /* GraphQL */ `mutation UpdateAssessmentsection(
  $input: UpdateAssessmentsectionInput!
  $condition: ModelAssessmentsectionConditionInput
) {
  updateAssessmentsection(input: $input, condition: $condition) {
    id
    sectionId
    duration
    additionalInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAssessmentsectionMutationVariables,
  APITypes.UpdateAssessmentsectionMutation
>;
export const deleteAssessmentsection = /* GraphQL */ `mutation DeleteAssessmentsection(
  $input: DeleteAssessmentsectionInput!
  $condition: ModelAssessmentsectionConditionInput
) {
  deleteAssessmentsection(input: $input, condition: $condition) {
    id
    sectionId
    duration
    additionalInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAssessmentsectionMutationVariables,
  APITypes.DeleteAssessmentsectionMutation
>;
export const createQuestions = /* GraphQL */ `mutation CreateQuestions(
  $input: CreateQuestionsInput!
  $condition: ModelQuestionsConditionInput
) {
  createQuestions(input: $input, condition: $condition) {
    id
    standardInputs
    questionBankID
    questionType
    questionSubType
    subject
    difficulty
    topicId
    directions
    codeEditor
    textEditor
    options {
      isPartialCorrect
      correctAnswer
      optionNumber
      weightage
      answer
      negMarks
      splitMarksEqually
      fullMarksIfAnyCorrect
      fullMarksOnlyIfAllCorrect
      __typename
    }
    solution {
      answer
      optionNumber
      bestSolution
      __typename
    }
    hint {
      optionNumber
      hint
      __typename
    }
    media
    questionName
    wordLimit
    videoSolution
    competency {
      progSub
      progTopic
      progLevel
      __typename
    }
    subTopic
    concepts
    adminID
    userID
    blanksCount
    caseSensitive
    QuesDependency
    fillUpanswer {
      splitMarksEqually
      weightage
      answer
      alternateAns
      __typename
    }
    languages
    SingleLanguage
    inputFormat
    outputFormat
    enableCustomInput
    enableAPITesting
    codeConstraints
    evaluationTime
    timeLimit
    memoryLimit
    outputLimit
    codeSize
    sample {
      answer
      optionNumber
      bestSolution
      __typename
    }
    backgroundImg
    initialQuery
    fileCount
    fileCountMandatory
    fileFormats
    enableAutoRecord
    minRecording
    maxRecording
    attemptsToRecord
    autoEvaluation
    cloudProvider
    startTime
    ZipFile
    themes
    fileSizes
    techStack
    instanceSize
    explaination
    compilerOutput
    compilerLanguage
    compilerProgram
    htmlCssJsCode
    groupQuestionID
    questionCode
    tags
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionsMutationVariables,
  APITypes.CreateQuestionsMutation
>;
export const updateQuestions = /* GraphQL */ `mutation UpdateQuestions(
  $input: UpdateQuestionsInput!
  $condition: ModelQuestionsConditionInput
) {
  updateQuestions(input: $input, condition: $condition) {
    id
    standardInputs
    questionBankID
    questionType
    questionSubType
    subject
    difficulty
    topicId
    directions
    codeEditor
    textEditor
    options {
      isPartialCorrect
      correctAnswer
      optionNumber
      weightage
      answer
      negMarks
      splitMarksEqually
      fullMarksIfAnyCorrect
      fullMarksOnlyIfAllCorrect
      __typename
    }
    solution {
      answer
      optionNumber
      bestSolution
      __typename
    }
    hint {
      optionNumber
      hint
      __typename
    }
    media
    questionName
    wordLimit
    videoSolution
    competency {
      progSub
      progTopic
      progLevel
      __typename
    }
    subTopic
    concepts
    adminID
    userID
    blanksCount
    caseSensitive
    QuesDependency
    fillUpanswer {
      splitMarksEqually
      weightage
      answer
      alternateAns
      __typename
    }
    languages
    SingleLanguage
    inputFormat
    outputFormat
    enableCustomInput
    enableAPITesting
    codeConstraints
    evaluationTime
    timeLimit
    memoryLimit
    outputLimit
    codeSize
    sample {
      answer
      optionNumber
      bestSolution
      __typename
    }
    backgroundImg
    initialQuery
    fileCount
    fileCountMandatory
    fileFormats
    enableAutoRecord
    minRecording
    maxRecording
    attemptsToRecord
    autoEvaluation
    cloudProvider
    startTime
    ZipFile
    themes
    fileSizes
    techStack
    instanceSize
    explaination
    compilerOutput
    compilerLanguage
    compilerProgram
    htmlCssJsCode
    groupQuestionID
    questionCode
    tags
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionsMutationVariables,
  APITypes.UpdateQuestionsMutation
>;
export const deleteQuestions = /* GraphQL */ `mutation DeleteQuestions(
  $input: DeleteQuestionsInput!
  $condition: ModelQuestionsConditionInput
) {
  deleteQuestions(input: $input, condition: $condition) {
    id
    standardInputs
    questionBankID
    questionType
    questionSubType
    subject
    difficulty
    topicId
    directions
    codeEditor
    textEditor
    options {
      isPartialCorrect
      correctAnswer
      optionNumber
      weightage
      answer
      negMarks
      splitMarksEqually
      fullMarksIfAnyCorrect
      fullMarksOnlyIfAllCorrect
      __typename
    }
    solution {
      answer
      optionNumber
      bestSolution
      __typename
    }
    hint {
      optionNumber
      hint
      __typename
    }
    media
    questionName
    wordLimit
    videoSolution
    competency {
      progSub
      progTopic
      progLevel
      __typename
    }
    subTopic
    concepts
    adminID
    userID
    blanksCount
    caseSensitive
    QuesDependency
    fillUpanswer {
      splitMarksEqually
      weightage
      answer
      alternateAns
      __typename
    }
    languages
    SingleLanguage
    inputFormat
    outputFormat
    enableCustomInput
    enableAPITesting
    codeConstraints
    evaluationTime
    timeLimit
    memoryLimit
    outputLimit
    codeSize
    sample {
      answer
      optionNumber
      bestSolution
      __typename
    }
    backgroundImg
    initialQuery
    fileCount
    fileCountMandatory
    fileFormats
    enableAutoRecord
    minRecording
    maxRecording
    attemptsToRecord
    autoEvaluation
    cloudProvider
    startTime
    ZipFile
    themes
    fileSizes
    techStack
    instanceSize
    explaination
    compilerOutput
    compilerLanguage
    compilerProgram
    htmlCssJsCode
    groupQuestionID
    questionCode
    tags
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionsMutationVariables,
  APITypes.DeleteQuestionsMutation
>;
export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $input: CreateCourseInput!
  $condition: ModelCourseConditionInput
) {
  createCourse(input: $input, condition: $condition) {
    id
    courseName
    courseCode
    PublishingText
    description
    file
    showLeaderBoard
    adminID
    visibility
    department
    batch
    category
    tags
    adminID1
    department1
    batch1
    degree
    skuCode
    userID
    hodID
    mediaInputType
    subject
    topicId
    subTopic
    courseValidity {
      months
      price
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $input: UpdateCourseInput!
  $condition: ModelCourseConditionInput
) {
  updateCourse(input: $input, condition: $condition) {
    id
    courseName
    courseCode
    PublishingText
    description
    file
    showLeaderBoard
    adminID
    visibility
    department
    batch
    category
    tags
    adminID1
    department1
    batch1
    degree
    skuCode
    userID
    hodID
    mediaInputType
    subject
    topicId
    subTopic
    courseValidity {
      months
      price
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $input: DeleteCourseInput!
  $condition: ModelCourseConditionInput
) {
  deleteCourse(input: $input, condition: $condition) {
    id
    courseName
    courseCode
    PublishingText
    description
    file
    showLeaderBoard
    adminID
    visibility
    department
    batch
    category
    tags
    adminID1
    department1
    batch1
    degree
    skuCode
    userID
    hodID
    mediaInputType
    subject
    topicId
    subTopic
    courseValidity {
      months
      price
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
export const createCourseCategory = /* GraphQL */ `mutation CreateCourseCategory(
  $input: CreateCourseCategoryInput!
  $condition: ModelCourseCategoryConditionInput
) {
  createCourseCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCourseCategoryMutationVariables,
  APITypes.CreateCourseCategoryMutation
>;
export const updateCourseCategory = /* GraphQL */ `mutation UpdateCourseCategory(
  $input: UpdateCourseCategoryInput!
  $condition: ModelCourseCategoryConditionInput
) {
  updateCourseCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCourseCategoryMutationVariables,
  APITypes.UpdateCourseCategoryMutation
>;
export const deleteCourseCategory = /* GraphQL */ `mutation DeleteCourseCategory(
  $input: DeleteCourseCategoryInput!
  $condition: ModelCourseCategoryConditionInput
) {
  deleteCourseCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseCategoryMutationVariables,
  APITypes.DeleteCourseCategoryMutation
>;
export const createTestContent = /* GraphQL */ `mutation CreateTestContent(
  $input: CreateTestContentInput!
  $condition: ModelTestContentConditionInput
) {
  createTestContent(input: $input, condition: $condition) {
    id
    courseID
    testID
    contentID
    description
    timeZone
    fromDate
    toDate
    shuffleQues
    shuffleOptions
    analyticsReport
    hint
    result
    expectedOutput
    testCase
    submitCount
    lockTest
    prevButton
    choice
    maxQuesMarks
    negMarks
    maxAttend
    cutoffMarks
    ruleType
    percentageCondition
    testPercentage
    lockContent
    allowDownload
    freePreview
    limit
    resultPercentage
    maxQuesAttended
    type
    displayQuestions
    timer {
      hours
      minutes
      seconds
      __typename
    }
    sectionWiseMarks {
      sectionID
      cutoffMarks
      actualMarks
      __typename
    }
    QuestionWiseMarks {
      sectionID
      questionID
      cutoffMarks
      actualMarks
      __typename
    }
    marksType
    actualMarks
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTestContentMutationVariables,
  APITypes.CreateTestContentMutation
>;
export const updateTestContent = /* GraphQL */ `mutation UpdateTestContent(
  $input: UpdateTestContentInput!
  $condition: ModelTestContentConditionInput
) {
  updateTestContent(input: $input, condition: $condition) {
    id
    courseID
    testID
    contentID
    description
    timeZone
    fromDate
    toDate
    shuffleQues
    shuffleOptions
    analyticsReport
    hint
    result
    expectedOutput
    testCase
    submitCount
    lockTest
    prevButton
    choice
    maxQuesMarks
    negMarks
    maxAttend
    cutoffMarks
    ruleType
    percentageCondition
    testPercentage
    lockContent
    allowDownload
    freePreview
    limit
    resultPercentage
    maxQuesAttended
    type
    displayQuestions
    timer {
      hours
      minutes
      seconds
      __typename
    }
    sectionWiseMarks {
      sectionID
      cutoffMarks
      actualMarks
      __typename
    }
    QuestionWiseMarks {
      sectionID
      questionID
      cutoffMarks
      actualMarks
      __typename
    }
    marksType
    actualMarks
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTestContentMutationVariables,
  APITypes.UpdateTestContentMutation
>;
export const deleteTestContent = /* GraphQL */ `mutation DeleteTestContent(
  $input: DeleteTestContentInput!
  $condition: ModelTestContentConditionInput
) {
  deleteTestContent(input: $input, condition: $condition) {
    id
    courseID
    testID
    contentID
    description
    timeZone
    fromDate
    toDate
    shuffleQues
    shuffleOptions
    analyticsReport
    hint
    result
    expectedOutput
    testCase
    submitCount
    lockTest
    prevButton
    choice
    maxQuesMarks
    negMarks
    maxAttend
    cutoffMarks
    ruleType
    percentageCondition
    testPercentage
    lockContent
    allowDownload
    freePreview
    limit
    resultPercentage
    maxQuesAttended
    type
    displayQuestions
    timer {
      hours
      minutes
      seconds
      __typename
    }
    sectionWiseMarks {
      sectionID
      cutoffMarks
      actualMarks
      __typename
    }
    QuestionWiseMarks {
      sectionID
      questionID
      cutoffMarks
      actualMarks
      __typename
    }
    marksType
    actualMarks
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTestContentMutationVariables,
  APITypes.DeleteTestContentMutation
>;
export const createStudentTest = /* GraphQL */ `mutation CreateStudentTest(
  $input: CreateStudentTestInput!
  $condition: ModelStudentTestConditionInput
) {
  createStudentTest(input: $input, condition: $condition) {
    id
    studentID
    testContentID
    courseID
    percentage
    totalMarks
    ScoredMarks
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStudentTestMutationVariables,
  APITypes.CreateStudentTestMutation
>;
export const updateStudentTest = /* GraphQL */ `mutation UpdateStudentTest(
  $input: UpdateStudentTestInput!
  $condition: ModelStudentTestConditionInput
) {
  updateStudentTest(input: $input, condition: $condition) {
    id
    studentID
    testContentID
    courseID
    percentage
    totalMarks
    ScoredMarks
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStudentTestMutationVariables,
  APITypes.UpdateStudentTestMutation
>;
export const deleteStudentTest = /* GraphQL */ `mutation DeleteStudentTest(
  $input: DeleteStudentTestInput!
  $condition: ModelStudentTestConditionInput
) {
  deleteStudentTest(input: $input, condition: $condition) {
    id
    studentID
    testContentID
    courseID
    percentage
    totalMarks
    ScoredMarks
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStudentTestMutationVariables,
  APITypes.DeleteStudentTestMutation
>;
export const createStudentTestQuestions = /* GraphQL */ `mutation CreateStudentTestQuestions(
  $input: CreateStudentTestQuestionsInput!
  $condition: ModelStudentTestQuestionsConditionInput
) {
  createStudentTestQuestions(input: $input, condition: $condition) {
    id
    studentTest
    sectionID
    questionID
    answerOption
    actualMarks
    negativeMarks
    result
    compilerOutput
    compilerLanguage
    compilerProgram
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStudentTestQuestionsMutationVariables,
  APITypes.CreateStudentTestQuestionsMutation
>;
export const updateStudentTestQuestions = /* GraphQL */ `mutation UpdateStudentTestQuestions(
  $input: UpdateStudentTestQuestionsInput!
  $condition: ModelStudentTestQuestionsConditionInput
) {
  updateStudentTestQuestions(input: $input, condition: $condition) {
    id
    studentTest
    sectionID
    questionID
    answerOption
    actualMarks
    negativeMarks
    result
    compilerOutput
    compilerLanguage
    compilerProgram
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStudentTestQuestionsMutationVariables,
  APITypes.UpdateStudentTestQuestionsMutation
>;
export const deleteStudentTestQuestions = /* GraphQL */ `mutation DeleteStudentTestQuestions(
  $input: DeleteStudentTestQuestionsInput!
  $condition: ModelStudentTestQuestionsConditionInput
) {
  deleteStudentTestQuestions(input: $input, condition: $condition) {
    id
    studentTest
    sectionID
    questionID
    answerOption
    actualMarks
    negativeMarks
    result
    compilerOutput
    compilerLanguage
    compilerProgram
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStudentTestQuestionsMutationVariables,
  APITypes.DeleteStudentTestQuestionsMutation
>;
export const createTest = /* GraphQL */ `mutation CreateTest(
  $input: CreateTestInput!
  $condition: ModelTestConditionInput
) {
  createTest(input: $input, condition: $condition) {
    id
    nameOfTest
    testCode
    testDescription
    testType
    adminID
    hodID
    visibility
    department
    tags
    section {
      id
      sectionName
      additionalInformation
      __typename
    }
    userID
    manualEvaluation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTestMutationVariables,
  APITypes.CreateTestMutation
>;
export const updateTest = /* GraphQL */ `mutation UpdateTest(
  $input: UpdateTestInput!
  $condition: ModelTestConditionInput
) {
  updateTest(input: $input, condition: $condition) {
    id
    nameOfTest
    testCode
    testDescription
    testType
    adminID
    hodID
    visibility
    department
    tags
    section {
      id
      sectionName
      additionalInformation
      __typename
    }
    userID
    manualEvaluation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTestMutationVariables,
  APITypes.UpdateTestMutation
>;
export const deleteTest = /* GraphQL */ `mutation DeleteTest(
  $input: DeleteTestInput!
  $condition: ModelTestConditionInput
) {
  deleteTest(input: $input, condition: $condition) {
    id
    nameOfTest
    testCode
    testDescription
    testType
    adminID
    hodID
    visibility
    department
    tags
    section {
      id
      sectionName
      additionalInformation
      __typename
    }
    userID
    manualEvaluation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTestMutationVariables,
  APITypes.DeleteTestMutation
>;
export const createTestQuestion = /* GraphQL */ `mutation CreateTestQuestion(
  $input: CreateTestQuestionInput!
  $condition: ModelTestQuestionConditionInput
) {
  createTestQuestion(input: $input, condition: $condition) {
    id
    testID
    sectionID
    questionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTestQuestionMutationVariables,
  APITypes.CreateTestQuestionMutation
>;
export const updateTestQuestion = /* GraphQL */ `mutation UpdateTestQuestion(
  $input: UpdateTestQuestionInput!
  $condition: ModelTestQuestionConditionInput
) {
  updateTestQuestion(input: $input, condition: $condition) {
    id
    testID
    sectionID
    questionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTestQuestionMutationVariables,
  APITypes.UpdateTestQuestionMutation
>;
export const deleteTestQuestion = /* GraphQL */ `mutation DeleteTestQuestion(
  $input: DeleteTestQuestionInput!
  $condition: ModelTestQuestionConditionInput
) {
  deleteTestQuestion(input: $input, condition: $condition) {
    id
    testID
    sectionID
    questionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTestQuestionMutationVariables,
  APITypes.DeleteTestQuestionMutation
>;
export const createContentBankDetails = /* GraphQL */ `mutation CreateContentBankDetails(
  $input: CreateContentBankDetailsInput!
  $condition: ModelContentBankDetailsConditionInput
) {
  createContentBankDetails(input: $input, condition: $condition) {
    id
    name
    description
    adminID
    visibility
    groups
    userID
    status
    subject
    topicId
    subTopic
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentBankDetailsMutationVariables,
  APITypes.CreateContentBankDetailsMutation
>;
export const updateContentBankDetails = /* GraphQL */ `mutation UpdateContentBankDetails(
  $input: UpdateContentBankDetailsInput!
  $condition: ModelContentBankDetailsConditionInput
) {
  updateContentBankDetails(input: $input, condition: $condition) {
    id
    name
    description
    adminID
    visibility
    groups
    userID
    status
    subject
    topicId
    subTopic
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentBankDetailsMutationVariables,
  APITypes.UpdateContentBankDetailsMutation
>;
export const deleteContentBankDetails = /* GraphQL */ `mutation DeleteContentBankDetails(
  $input: DeleteContentBankDetailsInput!
  $condition: ModelContentBankDetailsConditionInput
) {
  deleteContentBankDetails(input: $input, condition: $condition) {
    id
    name
    description
    adminID
    visibility
    groups
    userID
    status
    subject
    topicId
    subTopic
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentBankDetailsMutationVariables,
  APITypes.DeleteContentBankDetailsMutation
>;
export const createContent = /* GraphQL */ `mutation CreateContent(
  $input: CreateContentInput!
  $condition: ModelContentConditionInput
) {
  createContent(input: $input, condition: $condition) {
    id
    contentBankID
    contentType
    contentsubType
    contentName
    subTopic
    topicId
    subject
    content
    averageReadTime
    additionalInformation
    adminID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentMutationVariables,
  APITypes.CreateContentMutation
>;
export const updateContent = /* GraphQL */ `mutation UpdateContent(
  $input: UpdateContentInput!
  $condition: ModelContentConditionInput
) {
  updateContent(input: $input, condition: $condition) {
    id
    contentBankID
    contentType
    contentsubType
    contentName
    subTopic
    topicId
    subject
    content
    averageReadTime
    additionalInformation
    adminID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentMutationVariables,
  APITypes.UpdateContentMutation
>;
export const deleteContent = /* GraphQL */ `mutation DeleteContent(
  $input: DeleteContentInput!
  $condition: ModelContentConditionInput
) {
  deleteContent(input: $input, condition: $condition) {
    id
    contentBankID
    contentType
    contentsubType
    contentName
    subTopic
    topicId
    subject
    content
    averageReadTime
    additionalInformation
    adminID
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentMutationVariables,
  APITypes.DeleteContentMutation
>;
export const createMyTable2 = /* GraphQL */ `mutation CreateMyTable2(
  $input: CreateMyTable2Input!
  $condition: ModelMyTable2ConditionInput
) {
  createMyTable2(input: $input, condition: $condition) {
    id
    title
    gender
    address
    age
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMyTable2MutationVariables,
  APITypes.CreateMyTable2Mutation
>;
export const updateMyTable2 = /* GraphQL */ `mutation UpdateMyTable2(
  $input: UpdateMyTable2Input!
  $condition: ModelMyTable2ConditionInput
) {
  updateMyTable2(input: $input, condition: $condition) {
    id
    title
    gender
    address
    age
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMyTable2MutationVariables,
  APITypes.UpdateMyTable2Mutation
>;
export const deleteMyTable2 = /* GraphQL */ `mutation DeleteMyTable2(
  $input: DeleteMyTable2Input!
  $condition: ModelMyTable2ConditionInput
) {
  deleteMyTable2(input: $input, condition: $condition) {
    id
    title
    gender
    address
    age
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMyTable2MutationVariables,
  APITypes.DeleteMyTable2Mutation
>;
export const createSubject = /* GraphQL */ `mutation CreateSubject(
  $input: CreateSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  createSubject(input: $input, condition: $condition) {
    id
    name
    status
    userID
    adminID
    code
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubjectMutationVariables,
  APITypes.CreateSubjectMutation
>;
export const updateSubject = /* GraphQL */ `mutation UpdateSubject(
  $input: UpdateSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  updateSubject(input: $input, condition: $condition) {
    id
    name
    status
    userID
    adminID
    code
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubjectMutationVariables,
  APITypes.UpdateSubjectMutation
>;
export const deleteSubject = /* GraphQL */ `mutation DeleteSubject(
  $input: DeleteSubjectInput!
  $condition: ModelSubjectConditionInput
) {
  deleteSubject(input: $input, condition: $condition) {
    id
    name
    status
    userID
    adminID
    code
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubjectMutationVariables,
  APITypes.DeleteSubjectMutation
>;
export const createTopic = /* GraphQL */ `mutation CreateTopic(
  $input: CreateTopicInput!
  $condition: ModelTopicConditionInput
) {
  createTopic(input: $input, condition: $condition) {
    id
    subjectID
    name
    status
    userID
    code
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTopicMutationVariables,
  APITypes.CreateTopicMutation
>;
export const updateTopic = /* GraphQL */ `mutation UpdateTopic(
  $input: UpdateTopicInput!
  $condition: ModelTopicConditionInput
) {
  updateTopic(input: $input, condition: $condition) {
    id
    subjectID
    name
    status
    userID
    code
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTopicMutationVariables,
  APITypes.UpdateTopicMutation
>;
export const deleteTopic = /* GraphQL */ `mutation DeleteTopic(
  $input: DeleteTopicInput!
  $condition: ModelTopicConditionInput
) {
  deleteTopic(input: $input, condition: $condition) {
    id
    subjectID
    name
    status
    userID
    code
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTopicMutationVariables,
  APITypes.DeleteTopicMutation
>;
export const createSubTopic = /* GraphQL */ `mutation CreateSubTopic(
  $input: CreateSubTopicInput!
  $condition: ModelSubTopicConditionInput
) {
  createSubTopic(input: $input, condition: $condition) {
    id
    topicID
    name
    status
    userID
    code
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubTopicMutationVariables,
  APITypes.CreateSubTopicMutation
>;
export const updateSubTopic = /* GraphQL */ `mutation UpdateSubTopic(
  $input: UpdateSubTopicInput!
  $condition: ModelSubTopicConditionInput
) {
  updateSubTopic(input: $input, condition: $condition) {
    id
    topicID
    name
    status
    userID
    code
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubTopicMutationVariables,
  APITypes.UpdateSubTopicMutation
>;
export const deleteSubTopic = /* GraphQL */ `mutation DeleteSubTopic(
  $input: DeleteSubTopicInput!
  $condition: ModelSubTopicConditionInput
) {
  deleteSubTopic(input: $input, condition: $condition) {
    id
    topicID
    name
    status
    userID
    code
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubTopicMutationVariables,
  APITypes.DeleteSubTopicMutation
>;
export const createStudentJobAppliedJob = /* GraphQL */ `mutation CreateStudentJobAppliedJob(
  $input: CreateStudentJobAppliedJobInput!
  $condition: ModelStudentJobAppliedJobConditionInput
) {
  createStudentJobAppliedJob(input: $input, condition: $condition) {
    id
    studentID
    jobID
    status
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStudentJobAppliedJobMutationVariables,
  APITypes.CreateStudentJobAppliedJobMutation
>;
export const updateStudentJobAppliedJob = /* GraphQL */ `mutation UpdateStudentJobAppliedJob(
  $input: UpdateStudentJobAppliedJobInput!
  $condition: ModelStudentJobAppliedJobConditionInput
) {
  updateStudentJobAppliedJob(input: $input, condition: $condition) {
    id
    studentID
    jobID
    status
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStudentJobAppliedJobMutationVariables,
  APITypes.UpdateStudentJobAppliedJobMutation
>;
export const deleteStudentJobAppliedJob = /* GraphQL */ `mutation DeleteStudentJobAppliedJob(
  $input: DeleteStudentJobAppliedJobInput!
  $condition: ModelStudentJobAppliedJobConditionInput
) {
  deleteStudentJobAppliedJob(input: $input, condition: $condition) {
    id
    studentID
    jobID
    status
    adminID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStudentJobAppliedJobMutationVariables,
  APITypes.DeleteStudentJobAppliedJobMutation
>;
export const createGroup = /* GraphQL */ `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupMutationVariables,
  APITypes.CreateGroupMutation
>;
export const updateGroup = /* GraphQL */ `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGroupMutationVariables,
  APITypes.UpdateGroupMutation
>;
export const deleteGroup = /* GraphQL */ `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupMutationVariables,
  APITypes.DeleteGroupMutation
>;
export const createBranch = /* GraphQL */ `mutation CreateBranch(
  $input: CreateBranchInput!
  $condition: ModelBranchConditionInput
) {
  createBranch(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBranchMutationVariables,
  APITypes.CreateBranchMutation
>;
export const updateBranch = /* GraphQL */ `mutation UpdateBranch(
  $input: UpdateBranchInput!
  $condition: ModelBranchConditionInput
) {
  updateBranch(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBranchMutationVariables,
  APITypes.UpdateBranchMutation
>;
export const deleteBranch = /* GraphQL */ `mutation DeleteBranch(
  $input: DeleteBranchInput!
  $condition: ModelBranchConditionInput
) {
  deleteBranch(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBranchMutationVariables,
  APITypes.DeleteBranchMutation
>;
export const createYear = /* GraphQL */ `mutation CreateYear(
  $input: CreateYearInput!
  $condition: ModelYearConditionInput
) {
  createYear(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateYearMutationVariables,
  APITypes.CreateYearMutation
>;
export const updateYear = /* GraphQL */ `mutation UpdateYear(
  $input: UpdateYearInput!
  $condition: ModelYearConditionInput
) {
  updateYear(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateYearMutationVariables,
  APITypes.UpdateYearMutation
>;
export const deleteYear = /* GraphQL */ `mutation DeleteYear(
  $input: DeleteYearInput!
  $condition: ModelYearConditionInput
) {
  deleteYear(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteYearMutationVariables,
  APITypes.DeleteYearMutation
>;
export const createSection = /* GraphQL */ `mutation CreateSection(
  $input: CreateSectionInput!
  $condition: ModelSectionConditionInput
) {
  createSection(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSectionMutationVariables,
  APITypes.CreateSectionMutation
>;
export const updateSection = /* GraphQL */ `mutation UpdateSection(
  $input: UpdateSectionInput!
  $condition: ModelSectionConditionInput
) {
  updateSection(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSectionMutationVariables,
  APITypes.UpdateSectionMutation
>;
export const deleteSection = /* GraphQL */ `mutation DeleteSection(
  $input: DeleteSectionInput!
  $condition: ModelSectionConditionInput
) {
  deleteSection(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSectionMutationVariables,
  APITypes.DeleteSectionMutation
>;
export const createSkill = /* GraphQL */ `mutation CreateSkill(
  $input: CreateSkillInput!
  $condition: ModelSkillConditionInput
) {
  createSkill(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSkillMutationVariables,
  APITypes.CreateSkillMutation
>;
export const updateSkill = /* GraphQL */ `mutation UpdateSkill(
  $input: UpdateSkillInput!
  $condition: ModelSkillConditionInput
) {
  updateSkill(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSkillMutationVariables,
  APITypes.UpdateSkillMutation
>;
export const deleteSkill = /* GraphQL */ `mutation DeleteSkill(
  $input: DeleteSkillInput!
  $condition: ModelSkillConditionInput
) {
  deleteSkill(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSkillMutationVariables,
  APITypes.DeleteSkillMutation
>;
export const createTag = /* GraphQL */ `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTagMutationVariables,
  APITypes.CreateTagMutation
>;
export const updateTag = /* GraphQL */ `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTagMutationVariables,
  APITypes.UpdateTagMutation
>;
export const deleteTag = /* GraphQL */ `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTagMutationVariables,
  APITypes.DeleteTagMutation
>;
export const createBlogCategory = /* GraphQL */ `mutation CreateBlogCategory(
  $input: CreateBlogCategoryInput!
  $condition: ModelBlogCategoryConditionInput
) {
  createBlogCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBlogCategoryMutationVariables,
  APITypes.CreateBlogCategoryMutation
>;
export const updateBlogCategory = /* GraphQL */ `mutation UpdateBlogCategory(
  $input: UpdateBlogCategoryInput!
  $condition: ModelBlogCategoryConditionInput
) {
  updateBlogCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBlogCategoryMutationVariables,
  APITypes.UpdateBlogCategoryMutation
>;
export const deleteBlogCategory = /* GraphQL */ `mutation DeleteBlogCategory(
  $input: DeleteBlogCategoryInput!
  $condition: ModelBlogCategoryConditionInput
) {
  deleteBlogCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBlogCategoryMutationVariables,
  APITypes.DeleteBlogCategoryMutation
>;
export const createThemes = /* GraphQL */ `mutation CreateThemes(
  $input: CreateThemesInput!
  $condition: ModelThemesConditionInput
) {
  createThemes(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateThemesMutationVariables,
  APITypes.CreateThemesMutation
>;
export const updateThemes = /* GraphQL */ `mutation UpdateThemes(
  $input: UpdateThemesInput!
  $condition: ModelThemesConditionInput
) {
  updateThemes(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateThemesMutationVariables,
  APITypes.UpdateThemesMutation
>;
export const deleteThemes = /* GraphQL */ `mutation DeleteThemes(
  $input: DeleteThemesInput!
  $condition: ModelThemesConditionInput
) {
  deleteThemes(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteThemesMutationVariables,
  APITypes.DeleteThemesMutation
>;
export const createLanguage = /* GraphQL */ `mutation CreateLanguage(
  $input: CreateLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  createLanguage(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLanguageMutationVariables,
  APITypes.CreateLanguageMutation
>;
export const updateLanguage = /* GraphQL */ `mutation UpdateLanguage(
  $input: UpdateLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  updateLanguage(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLanguageMutationVariables,
  APITypes.UpdateLanguageMutation
>;
export const deleteLanguage = /* GraphQL */ `mutation DeleteLanguage(
  $input: DeleteLanguageInput!
  $condition: ModelLanguageConditionInput
) {
  deleteLanguage(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLanguageMutationVariables,
  APITypes.DeleteLanguageMutation
>;
export const createBatch = /* GraphQL */ `mutation CreateBatch(
  $input: CreateBatchInput!
  $condition: ModelBatchConditionInput
) {
  createBatch(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBatchMutationVariables,
  APITypes.CreateBatchMutation
>;
export const updateBatch = /* GraphQL */ `mutation UpdateBatch(
  $input: UpdateBatchInput!
  $condition: ModelBatchConditionInput
) {
  updateBatch(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBatchMutationVariables,
  APITypes.UpdateBatchMutation
>;
export const deleteBatch = /* GraphQL */ `mutation DeleteBatch(
  $input: DeleteBatchInput!
  $condition: ModelBatchConditionInput
) {
  deleteBatch(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBatchMutationVariables,
  APITypes.DeleteBatchMutation
>;
export const createState = /* GraphQL */ `mutation CreateState(
  $input: CreateStateInput!
  $condition: ModelStateConditionInput
) {
  createState(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStateMutationVariables,
  APITypes.CreateStateMutation
>;
export const updateState = /* GraphQL */ `mutation UpdateState(
  $input: UpdateStateInput!
  $condition: ModelStateConditionInput
) {
  updateState(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStateMutationVariables,
  APITypes.UpdateStateMutation
>;
export const deleteState = /* GraphQL */ `mutation DeleteState(
  $input: DeleteStateInput!
  $condition: ModelStateConditionInput
) {
  deleteState(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStateMutationVariables,
  APITypes.DeleteStateMutation
>;
export const createDistrict = /* GraphQL */ `mutation CreateDistrict(
  $input: CreateDistrictInput!
  $condition: ModelDistrictConditionInput
) {
  createDistrict(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDistrictMutationVariables,
  APITypes.CreateDistrictMutation
>;
export const updateDistrict = /* GraphQL */ `mutation UpdateDistrict(
  $input: UpdateDistrictInput!
  $condition: ModelDistrictConditionInput
) {
  updateDistrict(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDistrictMutationVariables,
  APITypes.UpdateDistrictMutation
>;
export const deleteDistrict = /* GraphQL */ `mutation DeleteDistrict(
  $input: DeleteDistrictInput!
  $condition: ModelDistrictConditionInput
) {
  deleteDistrict(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDistrictMutationVariables,
  APITypes.DeleteDistrictMutation
>;
export const createSpecialization = /* GraphQL */ `mutation CreateSpecialization(
  $input: CreateSpecializationInput!
  $condition: ModelSpecializationConditionInput
) {
  createSpecialization(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSpecializationMutationVariables,
  APITypes.CreateSpecializationMutation
>;
export const updateSpecialization = /* GraphQL */ `mutation UpdateSpecialization(
  $input: UpdateSpecializationInput!
  $condition: ModelSpecializationConditionInput
) {
  updateSpecialization(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSpecializationMutationVariables,
  APITypes.UpdateSpecializationMutation
>;
export const deleteSpecialization = /* GraphQL */ `mutation DeleteSpecialization(
  $input: DeleteSpecializationInput!
  $condition: ModelSpecializationConditionInput
) {
  deleteSpecialization(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpecializationMutationVariables,
  APITypes.DeleteSpecializationMutation
>;
export const createDepartment = /* GraphQL */ `mutation CreateDepartment(
  $input: CreateDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  createDepartment(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDepartmentMutationVariables,
  APITypes.CreateDepartmentMutation
>;
export const updateDepartment = /* GraphQL */ `mutation UpdateDepartment(
  $input: UpdateDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  updateDepartment(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDepartmentMutationVariables,
  APITypes.UpdateDepartmentMutation
>;
export const deleteDepartment = /* GraphQL */ `mutation DeleteDepartment(
  $input: DeleteDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  deleteDepartment(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDepartmentMutationVariables,
  APITypes.DeleteDepartmentMutation
>;
export const createTechStack = /* GraphQL */ `mutation CreateTechStack(
  $input: CreateTechStackInput!
  $condition: ModelTechStackConditionInput
) {
  createTechStack(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTechStackMutationVariables,
  APITypes.CreateTechStackMutation
>;
export const updateTechStack = /* GraphQL */ `mutation UpdateTechStack(
  $input: UpdateTechStackInput!
  $condition: ModelTechStackConditionInput
) {
  updateTechStack(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTechStackMutationVariables,
  APITypes.UpdateTechStackMutation
>;
export const deleteTechStack = /* GraphQL */ `mutation DeleteTechStack(
  $input: DeleteTechStackInput!
  $condition: ModelTechStackConditionInput
) {
  deleteTechStack(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTechStackMutationVariables,
  APITypes.DeleteTechStackMutation
>;
export const createInstanceSize = /* GraphQL */ `mutation CreateInstanceSize(
  $input: CreateInstanceSizeInput!
  $condition: ModelInstanceSizeConditionInput
) {
  createInstanceSize(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInstanceSizeMutationVariables,
  APITypes.CreateInstanceSizeMutation
>;
export const updateInstanceSize = /* GraphQL */ `mutation UpdateInstanceSize(
  $input: UpdateInstanceSizeInput!
  $condition: ModelInstanceSizeConditionInput
) {
  updateInstanceSize(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInstanceSizeMutationVariables,
  APITypes.UpdateInstanceSizeMutation
>;
export const deleteInstanceSize = /* GraphQL */ `mutation DeleteInstanceSize(
  $input: DeleteInstanceSizeInput!
  $condition: ModelInstanceSizeConditionInput
) {
  deleteInstanceSize(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInstanceSizeMutationVariables,
  APITypes.DeleteInstanceSizeMutation
>;
export const createProgrammerSubject = /* GraphQL */ `mutation CreateProgrammerSubject(
  $input: CreateProgrammerSubjectInput!
  $condition: ModelProgrammerSubjectConditionInput
) {
  createProgrammerSubject(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProgrammerSubjectMutationVariables,
  APITypes.CreateProgrammerSubjectMutation
>;
export const updateProgrammerSubject = /* GraphQL */ `mutation UpdateProgrammerSubject(
  $input: UpdateProgrammerSubjectInput!
  $condition: ModelProgrammerSubjectConditionInput
) {
  updateProgrammerSubject(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProgrammerSubjectMutationVariables,
  APITypes.UpdateProgrammerSubjectMutation
>;
export const deleteProgrammerSubject = /* GraphQL */ `mutation DeleteProgrammerSubject(
  $input: DeleteProgrammerSubjectInput!
  $condition: ModelProgrammerSubjectConditionInput
) {
  deleteProgrammerSubject(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProgrammerSubjectMutationVariables,
  APITypes.DeleteProgrammerSubjectMutation
>;
export const createProgrammerTopic = /* GraphQL */ `mutation CreateProgrammerTopic(
  $input: CreateProgrammerTopicInput!
  $condition: ModelProgrammerTopicConditionInput
) {
  createProgrammerTopic(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProgrammerTopicMutationVariables,
  APITypes.CreateProgrammerTopicMutation
>;
export const updateProgrammerTopic = /* GraphQL */ `mutation UpdateProgrammerTopic(
  $input: UpdateProgrammerTopicInput!
  $condition: ModelProgrammerTopicConditionInput
) {
  updateProgrammerTopic(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProgrammerTopicMutationVariables,
  APITypes.UpdateProgrammerTopicMutation
>;
export const deleteProgrammerTopic = /* GraphQL */ `mutation DeleteProgrammerTopic(
  $input: DeleteProgrammerTopicInput!
  $condition: ModelProgrammerTopicConditionInput
) {
  deleteProgrammerTopic(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProgrammerTopicMutationVariables,
  APITypes.DeleteProgrammerTopicMutation
>;
export const createProgrammerLevel = /* GraphQL */ `mutation CreateProgrammerLevel(
  $input: CreateProgrammerLevelInput!
  $condition: ModelProgrammerLevelConditionInput
) {
  createProgrammerLevel(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProgrammerLevelMutationVariables,
  APITypes.CreateProgrammerLevelMutation
>;
export const updateProgrammerLevel = /* GraphQL */ `mutation UpdateProgrammerLevel(
  $input: UpdateProgrammerLevelInput!
  $condition: ModelProgrammerLevelConditionInput
) {
  updateProgrammerLevel(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProgrammerLevelMutationVariables,
  APITypes.UpdateProgrammerLevelMutation
>;
export const deleteProgrammerLevel = /* GraphQL */ `mutation DeleteProgrammerLevel(
  $input: DeleteProgrammerLevelInput!
  $condition: ModelProgrammerLevelConditionInput
) {
  deleteProgrammerLevel(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProgrammerLevelMutationVariables,
  APITypes.DeleteProgrammerLevelMutation
>;
export const createStudentSection = /* GraphQL */ `mutation CreateStudentSection(
  $input: CreateStudentSectionInput!
  $condition: ModelStudentSectionConditionInput
) {
  createStudentSection(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStudentSectionMutationVariables,
  APITypes.CreateStudentSectionMutation
>;
export const updateStudentSection = /* GraphQL */ `mutation UpdateStudentSection(
  $input: UpdateStudentSectionInput!
  $condition: ModelStudentSectionConditionInput
) {
  updateStudentSection(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStudentSectionMutationVariables,
  APITypes.UpdateStudentSectionMutation
>;
export const deleteStudentSection = /* GraphQL */ `mutation DeleteStudentSection(
  $input: DeleteStudentSectionInput!
  $condition: ModelStudentSectionConditionInput
) {
  deleteStudentSection(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStudentSectionMutationVariables,
  APITypes.DeleteStudentSectionMutation
>;
export const createBlog = /* GraphQL */ `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
    id
    catergory
    title
    description
    status
    userID
    adminID
    hodID
    tutorID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBlogMutationVariables,
  APITypes.CreateBlogMutation
>;
export const updateBlog = /* GraphQL */ `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
    id
    catergory
    title
    description
    status
    userID
    adminID
    hodID
    tutorID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBlogMutationVariables,
  APITypes.UpdateBlogMutation
>;
export const deleteBlog = /* GraphQL */ `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
    id
    catergory
    title
    description
    status
    userID
    adminID
    hodID
    tutorID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBlogMutationVariables,
  APITypes.DeleteBlogMutation
>;
export const createJobDrive = /* GraphQL */ `mutation CreateJobDrive(
  $input: CreateJobDriveInput!
  $condition: ModelJobDriveConditionInput
) {
  createJobDrive(input: $input, condition: $condition) {
    id
    driveObjective
    campus
    division
    driveName
    companyName
    companyDomainURL
    location
    internshipDuration
    weeksMonths
    jobDescription
    skills
    jobRole
    department
    XthPercentage
    IntermediatePercentage
    DiplomaPercentage
    GraduationPercentage
    year
    SelectionProcess
    DateofDrive
    ReportingTime
    aboutCompany
    additionalInformation
    payType
    payRole
    payAmount
    newResume
    userID
    adminID
    hodID
    tutorID
    round {
      input
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateJobDriveMutationVariables,
  APITypes.CreateJobDriveMutation
>;
export const updateJobDrive = /* GraphQL */ `mutation UpdateJobDrive(
  $input: UpdateJobDriveInput!
  $condition: ModelJobDriveConditionInput
) {
  updateJobDrive(input: $input, condition: $condition) {
    id
    driveObjective
    campus
    division
    driveName
    companyName
    companyDomainURL
    location
    internshipDuration
    weeksMonths
    jobDescription
    skills
    jobRole
    department
    XthPercentage
    IntermediatePercentage
    DiplomaPercentage
    GraduationPercentage
    year
    SelectionProcess
    DateofDrive
    ReportingTime
    aboutCompany
    additionalInformation
    payType
    payRole
    payAmount
    newResume
    userID
    adminID
    hodID
    tutorID
    round {
      input
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateJobDriveMutationVariables,
  APITypes.UpdateJobDriveMutation
>;
export const deleteJobDrive = /* GraphQL */ `mutation DeleteJobDrive(
  $input: DeleteJobDriveInput!
  $condition: ModelJobDriveConditionInput
) {
  deleteJobDrive(input: $input, condition: $condition) {
    id
    driveObjective
    campus
    division
    driveName
    companyName
    companyDomainURL
    location
    internshipDuration
    weeksMonths
    jobDescription
    skills
    jobRole
    department
    XthPercentage
    IntermediatePercentage
    DiplomaPercentage
    GraduationPercentage
    year
    SelectionProcess
    DateofDrive
    ReportingTime
    aboutCompany
    additionalInformation
    payType
    payRole
    payAmount
    newResume
    userID
    adminID
    hodID
    tutorID
    round {
      input
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteJobDriveMutationVariables,
  APITypes.DeleteJobDriveMutation
>;
export const createCompany = /* GraphQL */ `mutation CreateCompany(
  $input: CreateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  createCompany(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCompanyMutationVariables,
  APITypes.CreateCompanyMutation
>;
export const updateCompany = /* GraphQL */ `mutation UpdateCompany(
  $input: UpdateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  updateCompany(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCompanyMutationVariables,
  APITypes.UpdateCompanyMutation
>;
export const deleteCompany = /* GraphQL */ `mutation DeleteCompany(
  $input: DeleteCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  deleteCompany(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCompanyMutationVariables,
  APITypes.DeleteCompanyMutation
>;
export const createStudentJobNotification = /* GraphQL */ `mutation CreateStudentJobNotification(
  $input: CreateStudentJobNotificationInput!
  $condition: ModelStudentJobNotificationConditionInput
) {
  createStudentJobNotification(input: $input, condition: $condition) {
    id
    studentID
    jobID
    roundStatus {
      name
      status
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStudentJobNotificationMutationVariables,
  APITypes.CreateStudentJobNotificationMutation
>;
export const updateStudentJobNotification = /* GraphQL */ `mutation UpdateStudentJobNotification(
  $input: UpdateStudentJobNotificationInput!
  $condition: ModelStudentJobNotificationConditionInput
) {
  updateStudentJobNotification(input: $input, condition: $condition) {
    id
    studentID
    jobID
    roundStatus {
      name
      status
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStudentJobNotificationMutationVariables,
  APITypes.UpdateStudentJobNotificationMutation
>;
export const deleteStudentJobNotification = /* GraphQL */ `mutation DeleteStudentJobNotification(
  $input: DeleteStudentJobNotificationInput!
  $condition: ModelStudentJobNotificationConditionInput
) {
  deleteStudentJobNotification(input: $input, condition: $condition) {
    id
    studentID
    jobID
    roundStatus {
      name
      status
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStudentJobNotificationMutationVariables,
  APITypes.DeleteStudentJobNotificationMutation
>;
export const createAssignMeetingStudents = /* GraphQL */ `mutation CreateAssignMeetingStudents(
  $input: CreateAssignMeetingStudentsInput!
  $condition: ModelAssignMeetingStudentsConditionInput
) {
  createAssignMeetingStudents(input: $input, condition: $condition) {
    id
    studentID
    meetingID
    attendanceStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAssignMeetingStudentsMutationVariables,
  APITypes.CreateAssignMeetingStudentsMutation
>;
export const updateAssignMeetingStudents = /* GraphQL */ `mutation UpdateAssignMeetingStudents(
  $input: UpdateAssignMeetingStudentsInput!
  $condition: ModelAssignMeetingStudentsConditionInput
) {
  updateAssignMeetingStudents(input: $input, condition: $condition) {
    id
    studentID
    meetingID
    attendanceStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAssignMeetingStudentsMutationVariables,
  APITypes.UpdateAssignMeetingStudentsMutation
>;
export const deleteAssignMeetingStudents = /* GraphQL */ `mutation DeleteAssignMeetingStudents(
  $input: DeleteAssignMeetingStudentsInput!
  $condition: ModelAssignMeetingStudentsConditionInput
) {
  deleteAssignMeetingStudents(input: $input, condition: $condition) {
    id
    studentID
    meetingID
    attendanceStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAssignMeetingStudentsMutationVariables,
  APITypes.DeleteAssignMeetingStudentsMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    rollno
    gender
    DOB
    email
    password
    MobNumber
    username
    role
    status
    permissions {
      __typename
    }
    adminID
    type
    uploadType
    groups
    userID
    organisation
    hodID
    tutorID
    Batch
    department
    specialization
    course
    resume
    address
    personName
    personDesignation
    OTP
    branch
    section
    yearOfPassout
    yearOfJoining
    tenthPercentage
    InterPercentage
    diplomaPercentage
    graduationPercentage
    postGraduationPercentage
    Organizationcode
    State
    District
    Pincode
    Website
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    rollno
    gender
    DOB
    email
    password
    MobNumber
    username
    role
    status
    permissions {
      __typename
    }
    adminID
    type
    uploadType
    groups
    userID
    organisation
    hodID
    tutorID
    Batch
    department
    specialization
    course
    resume
    address
    personName
    personDesignation
    OTP
    branch
    section
    yearOfPassout
    yearOfJoining
    tenthPercentage
    InterPercentage
    diplomaPercentage
    graduationPercentage
    postGraduationPercentage
    Organizationcode
    State
    District
    Pincode
    Website
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    rollno
    gender
    DOB
    email
    password
    MobNumber
    username
    role
    status
    permissions {
      __typename
    }
    adminID
    type
    uploadType
    groups
    userID
    organisation
    hodID
    tutorID
    Batch
    department
    specialization
    course
    resume
    address
    personName
    personDesignation
    OTP
    branch
    section
    yearOfPassout
    yearOfJoining
    tenthPercentage
    InterPercentage
    diplomaPercentage
    graduationPercentage
    postGraduationPercentage
    Organizationcode
    State
    District
    Pincode
    Website
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createMeetings = /* GraphQL */ `mutation CreateMeetings(
  $input: CreateMeetingsInput!
  $condition: ModelMeetingsConditionInput
) {
  createMeetings(input: $input, condition: $condition) {
    id
    title
    meetingLink
    dateTime
    otp
    userID
    campusID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMeetingsMutationVariables,
  APITypes.CreateMeetingsMutation
>;
export const updateMeetings = /* GraphQL */ `mutation UpdateMeetings(
  $input: UpdateMeetingsInput!
  $condition: ModelMeetingsConditionInput
) {
  updateMeetings(input: $input, condition: $condition) {
    id
    title
    meetingLink
    dateTime
    otp
    userID
    campusID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMeetingsMutationVariables,
  APITypes.UpdateMeetingsMutation
>;
export const deleteMeetings = /* GraphQL */ `mutation DeleteMeetings(
  $input: DeleteMeetingsInput!
  $condition: ModelMeetingsConditionInput
) {
  deleteMeetings(input: $input, condition: $condition) {
    id
    title
    meetingLink
    dateTime
    otp
    userID
    campusID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMeetingsMutationVariables,
  APITypes.DeleteMeetingsMutation
>;
export const createAssignStudentToCourse = /* GraphQL */ `mutation CreateAssignStudentToCourse(
  $input: CreateAssignStudentToCourseInput!
  $condition: ModelAssignStudentToCourseConditionInput
) {
  createAssignStudentToCourse(input: $input, condition: $condition) {
    id
    studentID
    courseID
    type
    amountPaid
    months
    transactionDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAssignStudentToCourseMutationVariables,
  APITypes.CreateAssignStudentToCourseMutation
>;
export const updateAssignStudentToCourse = /* GraphQL */ `mutation UpdateAssignStudentToCourse(
  $input: UpdateAssignStudentToCourseInput!
  $condition: ModelAssignStudentToCourseConditionInput
) {
  updateAssignStudentToCourse(input: $input, condition: $condition) {
    id
    studentID
    courseID
    type
    amountPaid
    months
    transactionDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAssignStudentToCourseMutationVariables,
  APITypes.UpdateAssignStudentToCourseMutation
>;
export const deleteAssignStudentToCourse = /* GraphQL */ `mutation DeleteAssignStudentToCourse(
  $input: DeleteAssignStudentToCourseInput!
  $condition: ModelAssignStudentToCourseConditionInput
) {
  deleteAssignStudentToCourse(input: $input, condition: $condition) {
    id
    studentID
    courseID
    type
    amountPaid
    months
    transactionDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAssignStudentToCourseMutationVariables,
  APITypes.DeleteAssignStudentToCourseMutation
>;
