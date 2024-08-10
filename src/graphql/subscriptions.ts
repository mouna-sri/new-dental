/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateQuestionBankDetails = /* GraphQL */ `subscription OnCreateQuestionBankDetails(
  $filter: ModelSubscriptionQuestionBankDetailsFilterInput
) {
  onCreateQuestionBankDetails(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionBankDetailsSubscriptionVariables,
  APITypes.OnCreateQuestionBankDetailsSubscription
>;
export const onUpdateQuestionBankDetails = /* GraphQL */ `subscription OnUpdateQuestionBankDetails(
  $filter: ModelSubscriptionQuestionBankDetailsFilterInput
) {
  onUpdateQuestionBankDetails(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionBankDetailsSubscriptionVariables,
  APITypes.OnUpdateQuestionBankDetailsSubscription
>;
export const onDeleteQuestionBankDetails = /* GraphQL */ `subscription OnDeleteQuestionBankDetails(
  $filter: ModelSubscriptionQuestionBankDetailsFilterInput
) {
  onDeleteQuestionBankDetails(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionBankDetailsSubscriptionVariables,
  APITypes.OnDeleteQuestionBankDetailsSubscription
>;
export const onCreateGroupQuestions = /* GraphQL */ `subscription OnCreateGroupQuestions(
  $filter: ModelSubscriptionGroupQuestionsFilterInput
) {
  onCreateGroupQuestions(filter: $filter) {
    id
    content
    questionBankID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupQuestionsSubscriptionVariables,
  APITypes.OnCreateGroupQuestionsSubscription
>;
export const onUpdateGroupQuestions = /* GraphQL */ `subscription OnUpdateGroupQuestions(
  $filter: ModelSubscriptionGroupQuestionsFilterInput
) {
  onUpdateGroupQuestions(filter: $filter) {
    id
    content
    questionBankID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupQuestionsSubscriptionVariables,
  APITypes.OnUpdateGroupQuestionsSubscription
>;
export const onDeleteGroupQuestions = /* GraphQL */ `subscription OnDeleteGroupQuestions(
  $filter: ModelSubscriptionGroupQuestionsFilterInput
) {
  onDeleteGroupQuestions(filter: $filter) {
    id
    content
    questionBankID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupQuestionsSubscriptionVariables,
  APITypes.OnDeleteGroupQuestionsSubscription
>;
export const onCreateAssessment = /* GraphQL */ `subscription OnCreateAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
) {
  onCreateAssessment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAssessmentSubscriptionVariables,
  APITypes.OnCreateAssessmentSubscription
>;
export const onUpdateAssessment = /* GraphQL */ `subscription OnUpdateAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
) {
  onUpdateAssessment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAssessmentSubscriptionVariables,
  APITypes.OnUpdateAssessmentSubscription
>;
export const onDeleteAssessment = /* GraphQL */ `subscription OnDeleteAssessment(
  $filter: ModelSubscriptionAssessmentFilterInput
) {
  onDeleteAssessment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAssessmentSubscriptionVariables,
  APITypes.OnDeleteAssessmentSubscription
>;
export const onCreateAssessmentsection = /* GraphQL */ `subscription OnCreateAssessmentsection(
  $filter: ModelSubscriptionAssessmentsectionFilterInput
) {
  onCreateAssessmentsection(filter: $filter) {
    id
    sectionId
    duration
    additionalInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAssessmentsectionSubscriptionVariables,
  APITypes.OnCreateAssessmentsectionSubscription
>;
export const onUpdateAssessmentsection = /* GraphQL */ `subscription OnUpdateAssessmentsection(
  $filter: ModelSubscriptionAssessmentsectionFilterInput
) {
  onUpdateAssessmentsection(filter: $filter) {
    id
    sectionId
    duration
    additionalInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAssessmentsectionSubscriptionVariables,
  APITypes.OnUpdateAssessmentsectionSubscription
>;
export const onDeleteAssessmentsection = /* GraphQL */ `subscription OnDeleteAssessmentsection(
  $filter: ModelSubscriptionAssessmentsectionFilterInput
) {
  onDeleteAssessmentsection(filter: $filter) {
    id
    sectionId
    duration
    additionalInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAssessmentsectionSubscriptionVariables,
  APITypes.OnDeleteAssessmentsectionSubscription
>;
export const onCreateQuestions = /* GraphQL */ `subscription OnCreateQuestions($filter: ModelSubscriptionQuestionsFilterInput) {
  onCreateQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionsSubscriptionVariables,
  APITypes.OnCreateQuestionsSubscription
>;
export const onUpdateQuestions = /* GraphQL */ `subscription OnUpdateQuestions($filter: ModelSubscriptionQuestionsFilterInput) {
  onUpdateQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionsSubscriptionVariables,
  APITypes.OnUpdateQuestionsSubscription
>;
export const onDeleteQuestions = /* GraphQL */ `subscription OnDeleteQuestions($filter: ModelSubscriptionQuestionsFilterInput) {
  onDeleteQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionsSubscriptionVariables,
  APITypes.OnDeleteQuestionsSubscription
>;
export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onCreateCourseCategory = /* GraphQL */ `subscription OnCreateCourseCategory(
  $filter: ModelSubscriptionCourseCategoryFilterInput
) {
  onCreateCourseCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseCategorySubscriptionVariables,
  APITypes.OnCreateCourseCategorySubscription
>;
export const onUpdateCourseCategory = /* GraphQL */ `subscription OnUpdateCourseCategory(
  $filter: ModelSubscriptionCourseCategoryFilterInput
) {
  onUpdateCourseCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseCategorySubscriptionVariables,
  APITypes.OnUpdateCourseCategorySubscription
>;
export const onDeleteCourseCategory = /* GraphQL */ `subscription OnDeleteCourseCategory(
  $filter: ModelSubscriptionCourseCategoryFilterInput
) {
  onDeleteCourseCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseCategorySubscriptionVariables,
  APITypes.OnDeleteCourseCategorySubscription
>;
export const onCreateTestContent = /* GraphQL */ `subscription OnCreateTestContent(
  $filter: ModelSubscriptionTestContentFilterInput
) {
  onCreateTestContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTestContentSubscriptionVariables,
  APITypes.OnCreateTestContentSubscription
>;
export const onUpdateTestContent = /* GraphQL */ `subscription OnUpdateTestContent(
  $filter: ModelSubscriptionTestContentFilterInput
) {
  onUpdateTestContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTestContentSubscriptionVariables,
  APITypes.OnUpdateTestContentSubscription
>;
export const onDeleteTestContent = /* GraphQL */ `subscription OnDeleteTestContent(
  $filter: ModelSubscriptionTestContentFilterInput
) {
  onDeleteTestContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTestContentSubscriptionVariables,
  APITypes.OnDeleteTestContentSubscription
>;
export const onCreateStudentTest = /* GraphQL */ `subscription OnCreateStudentTest(
  $filter: ModelSubscriptionStudentTestFilterInput
) {
  onCreateStudentTest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentTestSubscriptionVariables,
  APITypes.OnCreateStudentTestSubscription
>;
export const onUpdateStudentTest = /* GraphQL */ `subscription OnUpdateStudentTest(
  $filter: ModelSubscriptionStudentTestFilterInput
) {
  onUpdateStudentTest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentTestSubscriptionVariables,
  APITypes.OnUpdateStudentTestSubscription
>;
export const onDeleteStudentTest = /* GraphQL */ `subscription OnDeleteStudentTest(
  $filter: ModelSubscriptionStudentTestFilterInput
) {
  onDeleteStudentTest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentTestSubscriptionVariables,
  APITypes.OnDeleteStudentTestSubscription
>;
export const onCreateStudentTestQuestions = /* GraphQL */ `subscription OnCreateStudentTestQuestions(
  $filter: ModelSubscriptionStudentTestQuestionsFilterInput
) {
  onCreateStudentTestQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentTestQuestionsSubscriptionVariables,
  APITypes.OnCreateStudentTestQuestionsSubscription
>;
export const onUpdateStudentTestQuestions = /* GraphQL */ `subscription OnUpdateStudentTestQuestions(
  $filter: ModelSubscriptionStudentTestQuestionsFilterInput
) {
  onUpdateStudentTestQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentTestQuestionsSubscriptionVariables,
  APITypes.OnUpdateStudentTestQuestionsSubscription
>;
export const onDeleteStudentTestQuestions = /* GraphQL */ `subscription OnDeleteStudentTestQuestions(
  $filter: ModelSubscriptionStudentTestQuestionsFilterInput
) {
  onDeleteStudentTestQuestions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentTestQuestionsSubscriptionVariables,
  APITypes.OnDeleteStudentTestQuestionsSubscription
>;
export const onCreateTest = /* GraphQL */ `subscription OnCreateTest($filter: ModelSubscriptionTestFilterInput) {
  onCreateTest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTestSubscriptionVariables,
  APITypes.OnCreateTestSubscription
>;
export const onUpdateTest = /* GraphQL */ `subscription OnUpdateTest($filter: ModelSubscriptionTestFilterInput) {
  onUpdateTest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTestSubscriptionVariables,
  APITypes.OnUpdateTestSubscription
>;
export const onDeleteTest = /* GraphQL */ `subscription OnDeleteTest($filter: ModelSubscriptionTestFilterInput) {
  onDeleteTest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTestSubscriptionVariables,
  APITypes.OnDeleteTestSubscription
>;
export const onCreateTestQuestion = /* GraphQL */ `subscription OnCreateTestQuestion(
  $filter: ModelSubscriptionTestQuestionFilterInput
) {
  onCreateTestQuestion(filter: $filter) {
    id
    testID
    sectionID
    questionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTestQuestionSubscriptionVariables,
  APITypes.OnCreateTestQuestionSubscription
>;
export const onUpdateTestQuestion = /* GraphQL */ `subscription OnUpdateTestQuestion(
  $filter: ModelSubscriptionTestQuestionFilterInput
) {
  onUpdateTestQuestion(filter: $filter) {
    id
    testID
    sectionID
    questionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTestQuestionSubscriptionVariables,
  APITypes.OnUpdateTestQuestionSubscription
>;
export const onDeleteTestQuestion = /* GraphQL */ `subscription OnDeleteTestQuestion(
  $filter: ModelSubscriptionTestQuestionFilterInput
) {
  onDeleteTestQuestion(filter: $filter) {
    id
    testID
    sectionID
    questionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTestQuestionSubscriptionVariables,
  APITypes.OnDeleteTestQuestionSubscription
>;
export const onCreateContentBankDetails = /* GraphQL */ `subscription OnCreateContentBankDetails(
  $filter: ModelSubscriptionContentBankDetailsFilterInput
) {
  onCreateContentBankDetails(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentBankDetailsSubscriptionVariables,
  APITypes.OnCreateContentBankDetailsSubscription
>;
export const onUpdateContentBankDetails = /* GraphQL */ `subscription OnUpdateContentBankDetails(
  $filter: ModelSubscriptionContentBankDetailsFilterInput
) {
  onUpdateContentBankDetails(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentBankDetailsSubscriptionVariables,
  APITypes.OnUpdateContentBankDetailsSubscription
>;
export const onDeleteContentBankDetails = /* GraphQL */ `subscription OnDeleteContentBankDetails(
  $filter: ModelSubscriptionContentBankDetailsFilterInput
) {
  onDeleteContentBankDetails(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentBankDetailsSubscriptionVariables,
  APITypes.OnDeleteContentBankDetailsSubscription
>;
export const onCreateContent = /* GraphQL */ `subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
  onCreateContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentSubscriptionVariables,
  APITypes.OnCreateContentSubscription
>;
export const onUpdateContent = /* GraphQL */ `subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
  onUpdateContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentSubscriptionVariables,
  APITypes.OnUpdateContentSubscription
>;
export const onDeleteContent = /* GraphQL */ `subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
  onDeleteContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentSubscriptionVariables,
  APITypes.OnDeleteContentSubscription
>;
export const onCreateMyTable2 = /* GraphQL */ `subscription OnCreateMyTable2($filter: ModelSubscriptionMyTable2FilterInput) {
  onCreateMyTable2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMyTable2SubscriptionVariables,
  APITypes.OnCreateMyTable2Subscription
>;
export const onUpdateMyTable2 = /* GraphQL */ `subscription OnUpdateMyTable2($filter: ModelSubscriptionMyTable2FilterInput) {
  onUpdateMyTable2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMyTable2SubscriptionVariables,
  APITypes.OnUpdateMyTable2Subscription
>;
export const onDeleteMyTable2 = /* GraphQL */ `subscription OnDeleteMyTable2($filter: ModelSubscriptionMyTable2FilterInput) {
  onDeleteMyTable2(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMyTable2SubscriptionVariables,
  APITypes.OnDeleteMyTable2Subscription
>;
export const onCreateSubject = /* GraphQL */ `subscription OnCreateSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onCreateSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubjectSubscriptionVariables,
  APITypes.OnCreateSubjectSubscription
>;
export const onUpdateSubject = /* GraphQL */ `subscription OnUpdateSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onUpdateSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubjectSubscriptionVariables,
  APITypes.OnUpdateSubjectSubscription
>;
export const onDeleteSubject = /* GraphQL */ `subscription OnDeleteSubject($filter: ModelSubscriptionSubjectFilterInput) {
  onDeleteSubject(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubjectSubscriptionVariables,
  APITypes.OnDeleteSubjectSubscription
>;
export const onCreateTopic = /* GraphQL */ `subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
  onCreateTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTopicSubscriptionVariables,
  APITypes.OnCreateTopicSubscription
>;
export const onUpdateTopic = /* GraphQL */ `subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
  onUpdateTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTopicSubscriptionVariables,
  APITypes.OnUpdateTopicSubscription
>;
export const onDeleteTopic = /* GraphQL */ `subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
  onDeleteTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTopicSubscriptionVariables,
  APITypes.OnDeleteTopicSubscription
>;
export const onCreateSubTopic = /* GraphQL */ `subscription OnCreateSubTopic($filter: ModelSubscriptionSubTopicFilterInput) {
  onCreateSubTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubTopicSubscriptionVariables,
  APITypes.OnCreateSubTopicSubscription
>;
export const onUpdateSubTopic = /* GraphQL */ `subscription OnUpdateSubTopic($filter: ModelSubscriptionSubTopicFilterInput) {
  onUpdateSubTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubTopicSubscriptionVariables,
  APITypes.OnUpdateSubTopicSubscription
>;
export const onDeleteSubTopic = /* GraphQL */ `subscription OnDeleteSubTopic($filter: ModelSubscriptionSubTopicFilterInput) {
  onDeleteSubTopic(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubTopicSubscriptionVariables,
  APITypes.OnDeleteSubTopicSubscription
>;
export const onCreateStudentJobAppliedJob = /* GraphQL */ `subscription OnCreateStudentJobAppliedJob(
  $filter: ModelSubscriptionStudentJobAppliedJobFilterInput
) {
  onCreateStudentJobAppliedJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentJobAppliedJobSubscriptionVariables,
  APITypes.OnCreateStudentJobAppliedJobSubscription
>;
export const onUpdateStudentJobAppliedJob = /* GraphQL */ `subscription OnUpdateStudentJobAppliedJob(
  $filter: ModelSubscriptionStudentJobAppliedJobFilterInput
) {
  onUpdateStudentJobAppliedJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentJobAppliedJobSubscriptionVariables,
  APITypes.OnUpdateStudentJobAppliedJobSubscription
>;
export const onDeleteStudentJobAppliedJob = /* GraphQL */ `subscription OnDeleteStudentJobAppliedJob(
  $filter: ModelSubscriptionStudentJobAppliedJobFilterInput
) {
  onDeleteStudentJobAppliedJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentJobAppliedJobSubscriptionVariables,
  APITypes.OnDeleteStudentJobAppliedJobSubscription
>;
export const onCreateGroup = /* GraphQL */ `subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onCreateGroup(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupSubscriptionVariables,
  APITypes.OnCreateGroupSubscription
>;
export const onUpdateGroup = /* GraphQL */ `subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onUpdateGroup(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupSubscriptionVariables,
  APITypes.OnUpdateGroupSubscription
>;
export const onDeleteGroup = /* GraphQL */ `subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
  onDeleteGroup(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupSubscriptionVariables,
  APITypes.OnDeleteGroupSubscription
>;
export const onCreateBranch = /* GraphQL */ `subscription OnCreateBranch($filter: ModelSubscriptionBranchFilterInput) {
  onCreateBranch(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBranchSubscriptionVariables,
  APITypes.OnCreateBranchSubscription
>;
export const onUpdateBranch = /* GraphQL */ `subscription OnUpdateBranch($filter: ModelSubscriptionBranchFilterInput) {
  onUpdateBranch(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBranchSubscriptionVariables,
  APITypes.OnUpdateBranchSubscription
>;
export const onDeleteBranch = /* GraphQL */ `subscription OnDeleteBranch($filter: ModelSubscriptionBranchFilterInput) {
  onDeleteBranch(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBranchSubscriptionVariables,
  APITypes.OnDeleteBranchSubscription
>;
export const onCreateYear = /* GraphQL */ `subscription OnCreateYear($filter: ModelSubscriptionYearFilterInput) {
  onCreateYear(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateYearSubscriptionVariables,
  APITypes.OnCreateYearSubscription
>;
export const onUpdateYear = /* GraphQL */ `subscription OnUpdateYear($filter: ModelSubscriptionYearFilterInput) {
  onUpdateYear(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateYearSubscriptionVariables,
  APITypes.OnUpdateYearSubscription
>;
export const onDeleteYear = /* GraphQL */ `subscription OnDeleteYear($filter: ModelSubscriptionYearFilterInput) {
  onDeleteYear(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteYearSubscriptionVariables,
  APITypes.OnDeleteYearSubscription
>;
export const onCreateSection = /* GraphQL */ `subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
  onCreateSection(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSectionSubscriptionVariables,
  APITypes.OnCreateSectionSubscription
>;
export const onUpdateSection = /* GraphQL */ `subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
  onUpdateSection(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSectionSubscriptionVariables,
  APITypes.OnUpdateSectionSubscription
>;
export const onDeleteSection = /* GraphQL */ `subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
  onDeleteSection(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSectionSubscriptionVariables,
  APITypes.OnDeleteSectionSubscription
>;
export const onCreateSkill = /* GraphQL */ `subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
  onCreateSkill(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSkillSubscriptionVariables,
  APITypes.OnCreateSkillSubscription
>;
export const onUpdateSkill = /* GraphQL */ `subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
  onUpdateSkill(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSkillSubscriptionVariables,
  APITypes.OnUpdateSkillSubscription
>;
export const onDeleteSkill = /* GraphQL */ `subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
  onDeleteSkill(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSkillSubscriptionVariables,
  APITypes.OnDeleteSkillSubscription
>;
export const onCreateTag = /* GraphQL */ `subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
  onCreateTag(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTagSubscriptionVariables,
  APITypes.OnCreateTagSubscription
>;
export const onUpdateTag = /* GraphQL */ `subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
  onUpdateTag(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTagSubscriptionVariables,
  APITypes.OnUpdateTagSubscription
>;
export const onDeleteTag = /* GraphQL */ `subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
  onDeleteTag(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTagSubscriptionVariables,
  APITypes.OnDeleteTagSubscription
>;
export const onCreateBlogCategory = /* GraphQL */ `subscription OnCreateBlogCategory(
  $filter: ModelSubscriptionBlogCategoryFilterInput
) {
  onCreateBlogCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBlogCategorySubscriptionVariables,
  APITypes.OnCreateBlogCategorySubscription
>;
export const onUpdateBlogCategory = /* GraphQL */ `subscription OnUpdateBlogCategory(
  $filter: ModelSubscriptionBlogCategoryFilterInput
) {
  onUpdateBlogCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBlogCategorySubscriptionVariables,
  APITypes.OnUpdateBlogCategorySubscription
>;
export const onDeleteBlogCategory = /* GraphQL */ `subscription OnDeleteBlogCategory(
  $filter: ModelSubscriptionBlogCategoryFilterInput
) {
  onDeleteBlogCategory(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBlogCategorySubscriptionVariables,
  APITypes.OnDeleteBlogCategorySubscription
>;
export const onCreateThemes = /* GraphQL */ `subscription OnCreateThemes($filter: ModelSubscriptionThemesFilterInput) {
  onCreateThemes(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateThemesSubscriptionVariables,
  APITypes.OnCreateThemesSubscription
>;
export const onUpdateThemes = /* GraphQL */ `subscription OnUpdateThemes($filter: ModelSubscriptionThemesFilterInput) {
  onUpdateThemes(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateThemesSubscriptionVariables,
  APITypes.OnUpdateThemesSubscription
>;
export const onDeleteThemes = /* GraphQL */ `subscription OnDeleteThemes($filter: ModelSubscriptionThemesFilterInput) {
  onDeleteThemes(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteThemesSubscriptionVariables,
  APITypes.OnDeleteThemesSubscription
>;
export const onCreateLanguage = /* GraphQL */ `subscription OnCreateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onCreateLanguage(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLanguageSubscriptionVariables,
  APITypes.OnCreateLanguageSubscription
>;
export const onUpdateLanguage = /* GraphQL */ `subscription OnUpdateLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onUpdateLanguage(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLanguageSubscriptionVariables,
  APITypes.OnUpdateLanguageSubscription
>;
export const onDeleteLanguage = /* GraphQL */ `subscription OnDeleteLanguage($filter: ModelSubscriptionLanguageFilterInput) {
  onDeleteLanguage(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLanguageSubscriptionVariables,
  APITypes.OnDeleteLanguageSubscription
>;
export const onCreateBatch = /* GraphQL */ `subscription OnCreateBatch($filter: ModelSubscriptionBatchFilterInput) {
  onCreateBatch(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBatchSubscriptionVariables,
  APITypes.OnCreateBatchSubscription
>;
export const onUpdateBatch = /* GraphQL */ `subscription OnUpdateBatch($filter: ModelSubscriptionBatchFilterInput) {
  onUpdateBatch(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBatchSubscriptionVariables,
  APITypes.OnUpdateBatchSubscription
>;
export const onDeleteBatch = /* GraphQL */ `subscription OnDeleteBatch($filter: ModelSubscriptionBatchFilterInput) {
  onDeleteBatch(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBatchSubscriptionVariables,
  APITypes.OnDeleteBatchSubscription
>;
export const onCreateState = /* GraphQL */ `subscription OnCreateState($filter: ModelSubscriptionStateFilterInput) {
  onCreateState(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStateSubscriptionVariables,
  APITypes.OnCreateStateSubscription
>;
export const onUpdateState = /* GraphQL */ `subscription OnUpdateState($filter: ModelSubscriptionStateFilterInput) {
  onUpdateState(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStateSubscriptionVariables,
  APITypes.OnUpdateStateSubscription
>;
export const onDeleteState = /* GraphQL */ `subscription OnDeleteState($filter: ModelSubscriptionStateFilterInput) {
  onDeleteState(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStateSubscriptionVariables,
  APITypes.OnDeleteStateSubscription
>;
export const onCreateDistrict = /* GraphQL */ `subscription OnCreateDistrict($filter: ModelSubscriptionDistrictFilterInput) {
  onCreateDistrict(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDistrictSubscriptionVariables,
  APITypes.OnCreateDistrictSubscription
>;
export const onUpdateDistrict = /* GraphQL */ `subscription OnUpdateDistrict($filter: ModelSubscriptionDistrictFilterInput) {
  onUpdateDistrict(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDistrictSubscriptionVariables,
  APITypes.OnUpdateDistrictSubscription
>;
export const onDeleteDistrict = /* GraphQL */ `subscription OnDeleteDistrict($filter: ModelSubscriptionDistrictFilterInput) {
  onDeleteDistrict(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDistrictSubscriptionVariables,
  APITypes.OnDeleteDistrictSubscription
>;
export const onCreateSpecialization = /* GraphQL */ `subscription OnCreateSpecialization(
  $filter: ModelSubscriptionSpecializationFilterInput
) {
  onCreateSpecialization(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSpecializationSubscriptionVariables,
  APITypes.OnCreateSpecializationSubscription
>;
export const onUpdateSpecialization = /* GraphQL */ `subscription OnUpdateSpecialization(
  $filter: ModelSubscriptionSpecializationFilterInput
) {
  onUpdateSpecialization(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSpecializationSubscriptionVariables,
  APITypes.OnUpdateSpecializationSubscription
>;
export const onDeleteSpecialization = /* GraphQL */ `subscription OnDeleteSpecialization(
  $filter: ModelSubscriptionSpecializationFilterInput
) {
  onDeleteSpecialization(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSpecializationSubscriptionVariables,
  APITypes.OnDeleteSpecializationSubscription
>;
export const onCreateDepartment = /* GraphQL */ `subscription OnCreateDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
) {
  onCreateDepartment(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDepartmentSubscriptionVariables,
  APITypes.OnCreateDepartmentSubscription
>;
export const onUpdateDepartment = /* GraphQL */ `subscription OnUpdateDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
) {
  onUpdateDepartment(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDepartmentSubscriptionVariables,
  APITypes.OnUpdateDepartmentSubscription
>;
export const onDeleteDepartment = /* GraphQL */ `subscription OnDeleteDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
) {
  onDeleteDepartment(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDepartmentSubscriptionVariables,
  APITypes.OnDeleteDepartmentSubscription
>;
export const onCreateTechStack = /* GraphQL */ `subscription OnCreateTechStack($filter: ModelSubscriptionTechStackFilterInput) {
  onCreateTechStack(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTechStackSubscriptionVariables,
  APITypes.OnCreateTechStackSubscription
>;
export const onUpdateTechStack = /* GraphQL */ `subscription OnUpdateTechStack($filter: ModelSubscriptionTechStackFilterInput) {
  onUpdateTechStack(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTechStackSubscriptionVariables,
  APITypes.OnUpdateTechStackSubscription
>;
export const onDeleteTechStack = /* GraphQL */ `subscription OnDeleteTechStack($filter: ModelSubscriptionTechStackFilterInput) {
  onDeleteTechStack(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTechStackSubscriptionVariables,
  APITypes.OnDeleteTechStackSubscription
>;
export const onCreateInstanceSize = /* GraphQL */ `subscription OnCreateInstanceSize(
  $filter: ModelSubscriptionInstanceSizeFilterInput
) {
  onCreateInstanceSize(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateInstanceSizeSubscriptionVariables,
  APITypes.OnCreateInstanceSizeSubscription
>;
export const onUpdateInstanceSize = /* GraphQL */ `subscription OnUpdateInstanceSize(
  $filter: ModelSubscriptionInstanceSizeFilterInput
) {
  onUpdateInstanceSize(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateInstanceSizeSubscriptionVariables,
  APITypes.OnUpdateInstanceSizeSubscription
>;
export const onDeleteInstanceSize = /* GraphQL */ `subscription OnDeleteInstanceSize(
  $filter: ModelSubscriptionInstanceSizeFilterInput
) {
  onDeleteInstanceSize(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteInstanceSizeSubscriptionVariables,
  APITypes.OnDeleteInstanceSizeSubscription
>;
export const onCreateProgrammerSubject = /* GraphQL */ `subscription OnCreateProgrammerSubject(
  $filter: ModelSubscriptionProgrammerSubjectFilterInput
) {
  onCreateProgrammerSubject(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProgrammerSubjectSubscriptionVariables,
  APITypes.OnCreateProgrammerSubjectSubscription
>;
export const onUpdateProgrammerSubject = /* GraphQL */ `subscription OnUpdateProgrammerSubject(
  $filter: ModelSubscriptionProgrammerSubjectFilterInput
) {
  onUpdateProgrammerSubject(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProgrammerSubjectSubscriptionVariables,
  APITypes.OnUpdateProgrammerSubjectSubscription
>;
export const onDeleteProgrammerSubject = /* GraphQL */ `subscription OnDeleteProgrammerSubject(
  $filter: ModelSubscriptionProgrammerSubjectFilterInput
) {
  onDeleteProgrammerSubject(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProgrammerSubjectSubscriptionVariables,
  APITypes.OnDeleteProgrammerSubjectSubscription
>;
export const onCreateProgrammerTopic = /* GraphQL */ `subscription OnCreateProgrammerTopic(
  $filter: ModelSubscriptionProgrammerTopicFilterInput
) {
  onCreateProgrammerTopic(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProgrammerTopicSubscriptionVariables,
  APITypes.OnCreateProgrammerTopicSubscription
>;
export const onUpdateProgrammerTopic = /* GraphQL */ `subscription OnUpdateProgrammerTopic(
  $filter: ModelSubscriptionProgrammerTopicFilterInput
) {
  onUpdateProgrammerTopic(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProgrammerTopicSubscriptionVariables,
  APITypes.OnUpdateProgrammerTopicSubscription
>;
export const onDeleteProgrammerTopic = /* GraphQL */ `subscription OnDeleteProgrammerTopic(
  $filter: ModelSubscriptionProgrammerTopicFilterInput
) {
  onDeleteProgrammerTopic(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProgrammerTopicSubscriptionVariables,
  APITypes.OnDeleteProgrammerTopicSubscription
>;
export const onCreateProgrammerLevel = /* GraphQL */ `subscription OnCreateProgrammerLevel(
  $filter: ModelSubscriptionProgrammerLevelFilterInput
) {
  onCreateProgrammerLevel(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProgrammerLevelSubscriptionVariables,
  APITypes.OnCreateProgrammerLevelSubscription
>;
export const onUpdateProgrammerLevel = /* GraphQL */ `subscription OnUpdateProgrammerLevel(
  $filter: ModelSubscriptionProgrammerLevelFilterInput
) {
  onUpdateProgrammerLevel(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProgrammerLevelSubscriptionVariables,
  APITypes.OnUpdateProgrammerLevelSubscription
>;
export const onDeleteProgrammerLevel = /* GraphQL */ `subscription OnDeleteProgrammerLevel(
  $filter: ModelSubscriptionProgrammerLevelFilterInput
) {
  onDeleteProgrammerLevel(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProgrammerLevelSubscriptionVariables,
  APITypes.OnDeleteProgrammerLevelSubscription
>;
export const onCreateStudentSection = /* GraphQL */ `subscription OnCreateStudentSection(
  $filter: ModelSubscriptionStudentSectionFilterInput
) {
  onCreateStudentSection(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStudentSectionSubscriptionVariables,
  APITypes.OnCreateStudentSectionSubscription
>;
export const onUpdateStudentSection = /* GraphQL */ `subscription OnUpdateStudentSection(
  $filter: ModelSubscriptionStudentSectionFilterInput
) {
  onUpdateStudentSection(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStudentSectionSubscriptionVariables,
  APITypes.OnUpdateStudentSectionSubscription
>;
export const onDeleteStudentSection = /* GraphQL */ `subscription OnDeleteStudentSection(
  $filter: ModelSubscriptionStudentSectionFilterInput
) {
  onDeleteStudentSection(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStudentSectionSubscriptionVariables,
  APITypes.OnDeleteStudentSectionSubscription
>;
export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onCreateBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onUpdateBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
  onDeleteBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
export const onCreateJobDrive = /* GraphQL */ `subscription OnCreateJobDrive($filter: ModelSubscriptionJobDriveFilterInput) {
  onCreateJobDrive(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobDriveSubscriptionVariables,
  APITypes.OnCreateJobDriveSubscription
>;
export const onUpdateJobDrive = /* GraphQL */ `subscription OnUpdateJobDrive($filter: ModelSubscriptionJobDriveFilterInput) {
  onUpdateJobDrive(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobDriveSubscriptionVariables,
  APITypes.OnUpdateJobDriveSubscription
>;
export const onDeleteJobDrive = /* GraphQL */ `subscription OnDeleteJobDrive($filter: ModelSubscriptionJobDriveFilterInput) {
  onDeleteJobDrive(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobDriveSubscriptionVariables,
  APITypes.OnDeleteJobDriveSubscription
>;
export const onCreateCompany = /* GraphQL */ `subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onCreateCompany(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompanySubscriptionVariables,
  APITypes.OnCreateCompanySubscription
>;
export const onUpdateCompany = /* GraphQL */ `subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onUpdateCompany(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompanySubscriptionVariables,
  APITypes.OnUpdateCompanySubscription
>;
export const onDeleteCompany = /* GraphQL */ `subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onDeleteCompany(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompanySubscriptionVariables,
  APITypes.OnDeleteCompanySubscription
>;
export const onCreateStudentJobNotification = /* GraphQL */ `subscription OnCreateStudentJobNotification(
  $filter: ModelSubscriptionStudentJobNotificationFilterInput
) {
  onCreateStudentJobNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentJobNotificationSubscriptionVariables,
  APITypes.OnCreateStudentJobNotificationSubscription
>;
export const onUpdateStudentJobNotification = /* GraphQL */ `subscription OnUpdateStudentJobNotification(
  $filter: ModelSubscriptionStudentJobNotificationFilterInput
) {
  onUpdateStudentJobNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentJobNotificationSubscriptionVariables,
  APITypes.OnUpdateStudentJobNotificationSubscription
>;
export const onDeleteStudentJobNotification = /* GraphQL */ `subscription OnDeleteStudentJobNotification(
  $filter: ModelSubscriptionStudentJobNotificationFilterInput
) {
  onDeleteStudentJobNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentJobNotificationSubscriptionVariables,
  APITypes.OnDeleteStudentJobNotificationSubscription
>;
export const onCreateAssignMeetingStudents = /* GraphQL */ `subscription OnCreateAssignMeetingStudents(
  $filter: ModelSubscriptionAssignMeetingStudentsFilterInput
) {
  onCreateAssignMeetingStudents(filter: $filter) {
    id
    studentID
    meetingID
    attendanceStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAssignMeetingStudentsSubscriptionVariables,
  APITypes.OnCreateAssignMeetingStudentsSubscription
>;
export const onUpdateAssignMeetingStudents = /* GraphQL */ `subscription OnUpdateAssignMeetingStudents(
  $filter: ModelSubscriptionAssignMeetingStudentsFilterInput
) {
  onUpdateAssignMeetingStudents(filter: $filter) {
    id
    studentID
    meetingID
    attendanceStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAssignMeetingStudentsSubscriptionVariables,
  APITypes.OnUpdateAssignMeetingStudentsSubscription
>;
export const onDeleteAssignMeetingStudents = /* GraphQL */ `subscription OnDeleteAssignMeetingStudents(
  $filter: ModelSubscriptionAssignMeetingStudentsFilterInput
) {
  onDeleteAssignMeetingStudents(filter: $filter) {
    id
    studentID
    meetingID
    attendanceStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAssignMeetingStudentsSubscriptionVariables,
  APITypes.OnDeleteAssignMeetingStudentsSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateMeetings = /* GraphQL */ `subscription OnCreateMeetings($filter: ModelSubscriptionMeetingsFilterInput) {
  onCreateMeetings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMeetingsSubscriptionVariables,
  APITypes.OnCreateMeetingsSubscription
>;
export const onUpdateMeetings = /* GraphQL */ `subscription OnUpdateMeetings($filter: ModelSubscriptionMeetingsFilterInput) {
  onUpdateMeetings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMeetingsSubscriptionVariables,
  APITypes.OnUpdateMeetingsSubscription
>;
export const onDeleteMeetings = /* GraphQL */ `subscription OnDeleteMeetings($filter: ModelSubscriptionMeetingsFilterInput) {
  onDeleteMeetings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMeetingsSubscriptionVariables,
  APITypes.OnDeleteMeetingsSubscription
>;
export const onCreateAssignStudentToCourse = /* GraphQL */ `subscription OnCreateAssignStudentToCourse(
  $filter: ModelSubscriptionAssignStudentToCourseFilterInput
) {
  onCreateAssignStudentToCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAssignStudentToCourseSubscriptionVariables,
  APITypes.OnCreateAssignStudentToCourseSubscription
>;
export const onUpdateAssignStudentToCourse = /* GraphQL */ `subscription OnUpdateAssignStudentToCourse(
  $filter: ModelSubscriptionAssignStudentToCourseFilterInput
) {
  onUpdateAssignStudentToCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAssignStudentToCourseSubscriptionVariables,
  APITypes.OnUpdateAssignStudentToCourseSubscription
>;
export const onDeleteAssignStudentToCourse = /* GraphQL */ `subscription OnDeleteAssignStudentToCourse(
  $filter: ModelSubscriptionAssignStudentToCourseFilterInput
) {
  onDeleteAssignStudentToCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAssignStudentToCourseSubscriptionVariables,
  APITypes.OnDeleteAssignStudentToCourseSubscription
>;
