/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getQuestionBankDetails = /* GraphQL */ `query GetQuestionBankDetails($id: ID!) {
  getQuestionBankDetails(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetQuestionBankDetailsQueryVariables,
  APITypes.GetQuestionBankDetailsQuery
>;
export const listQuestionBankDetails = /* GraphQL */ `query ListQuestionBankDetails(
  $filter: ModelQuestionBankDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestionBankDetails(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionBankDetailsQueryVariables,
  APITypes.ListQuestionBankDetailsQuery
>;
export const getGroupQuestions = /* GraphQL */ `query GetGroupQuestions($id: ID!) {
  getGroupQuestions(id: $id) {
    id
    content
    questionBankID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGroupQuestionsQueryVariables,
  APITypes.GetGroupQuestionsQuery
>;
export const listGroupQuestions = /* GraphQL */ `query ListGroupQuestions(
  $filter: ModelGroupQuestionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      questionBankID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupQuestionsQueryVariables,
  APITypes.ListGroupQuestionsQuery
>;
export const getAssessment = /* GraphQL */ `query GetAssessment($id: ID!) {
  getAssessment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAssessmentQueryVariables,
  APITypes.GetAssessmentQuery
>;
export const listAssessments = /* GraphQL */ `query ListAssessments(
  $filter: ModelAssessmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssessments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      testName
      testCode
      testDescription
      testType
      campus
      visibility
      department
      tags
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAssessmentsQueryVariables,
  APITypes.ListAssessmentsQuery
>;
export const getAssessmentsection = /* GraphQL */ `query GetAssessmentsection($id: ID!) {
  getAssessmentsection(id: $id) {
    id
    sectionId
    duration
    additionalInformation
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAssessmentsectionQueryVariables,
  APITypes.GetAssessmentsectionQuery
>;
export const listAssessmentsections = /* GraphQL */ `query ListAssessmentsections(
  $filter: ModelAssessmentsectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssessmentsections(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sectionId
      duration
      additionalInformation
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAssessmentsectionsQueryVariables,
  APITypes.ListAssessmentsectionsQuery
>;
export const getQuestions = /* GraphQL */ `query GetQuestions($id: ID!) {
  getQuestions(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetQuestionsQueryVariables,
  APITypes.GetQuestionsQuery
>;
export const listQuestions = /* GraphQL */ `query ListQuestions(
  $filter: ModelQuestionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      media
      questionName
      wordLimit
      videoSolution
      subTopic
      concepts
      adminID
      userID
      blanksCount
      caseSensitive
      QuesDependency
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
>;
export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const getCourseCategory = /* GraphQL */ `query GetCourseCategory($id: ID!) {
  getCourseCategory(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCourseCategoryQueryVariables,
  APITypes.GetCourseCategoryQuery
>;
export const listCourseCategories = /* GraphQL */ `query ListCourseCategories(
  $filter: ModelCourseCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourseCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCourseCategoriesQueryVariables,
  APITypes.ListCourseCategoriesQuery
>;
export const getTestContent = /* GraphQL */ `query GetTestContent($id: ID!) {
  getTestContent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTestContentQueryVariables,
  APITypes.GetTestContentQuery
>;
export const listTestContents = /* GraphQL */ `query ListTestContents(
  $filter: ModelTestContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      marksType
      actualMarks
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTestContentsQueryVariables,
  APITypes.ListTestContentsQuery
>;
export const getStudentTest = /* GraphQL */ `query GetStudentTest($id: ID!) {
  getStudentTest(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetStudentTestQueryVariables,
  APITypes.GetStudentTestQuery
>;
export const listStudentTests = /* GraphQL */ `query ListStudentTests(
  $filter: ModelStudentTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentTestsQueryVariables,
  APITypes.ListStudentTestsQuery
>;
export const getStudentTestQuestions = /* GraphQL */ `query GetStudentTestQuestions($id: ID!) {
  getStudentTestQuestions(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetStudentTestQuestionsQueryVariables,
  APITypes.GetStudentTestQuestionsQuery
>;
export const listStudentTestQuestions = /* GraphQL */ `query ListStudentTestQuestions(
  $filter: ModelStudentTestQuestionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentTestQuestions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentTestQuestionsQueryVariables,
  APITypes.ListStudentTestQuestionsQuery
>;
export const getTest = /* GraphQL */ `query GetTest($id: ID!) {
  getTest(id: $id) {
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
` as GeneratedQuery<APITypes.GetTestQueryVariables, APITypes.GetTestQuery>;
export const listTests = /* GraphQL */ `query ListTests(
  $filter: ModelTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      userID
      manualEvaluation
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTestsQueryVariables, APITypes.ListTestsQuery>;
export const getTestQuestion = /* GraphQL */ `query GetTestQuestion($id: ID!) {
  getTestQuestion(id: $id) {
    id
    testID
    sectionID
    questionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTestQuestionQueryVariables,
  APITypes.GetTestQuestionQuery
>;
export const listTestQuestions = /* GraphQL */ `query ListTestQuestions(
  $filter: ModelTestQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTestQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      testID
      sectionID
      questionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTestQuestionsQueryVariables,
  APITypes.ListTestQuestionsQuery
>;
export const getContentBankDetails = /* GraphQL */ `query GetContentBankDetails($id: ID!) {
  getContentBankDetails(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentBankDetailsQueryVariables,
  APITypes.GetContentBankDetailsQuery
>;
export const listContentBankDetails = /* GraphQL */ `query ListContentBankDetails(
  $filter: ModelContentBankDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentBankDetails(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentBankDetailsQueryVariables,
  APITypes.ListContentBankDetailsQuery
>;
export const getContent = /* GraphQL */ `query GetContent($id: ID!) {
  getContent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentQueryVariables,
  APITypes.GetContentQuery
>;
export const listContents = /* GraphQL */ `query ListContents(
  $filter: ModelContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentsQueryVariables,
  APITypes.ListContentsQuery
>;
export const getMyTable2 = /* GraphQL */ `query GetMyTable2($id: ID!) {
  getMyTable2(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMyTable2QueryVariables,
  APITypes.GetMyTable2Query
>;
export const listMyTable2s = /* GraphQL */ `query ListMyTable2s(
  $filter: ModelMyTable2FilterInput
  $limit: Int
  $nextToken: String
) {
  listMyTable2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      gender
      address
      age
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMyTable2sQueryVariables,
  APITypes.ListMyTable2sQuery
>;
export const getSubject = /* GraphQL */ `query GetSubject($id: ID!) {
  getSubject(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSubjectQueryVariables,
  APITypes.GetSubjectQuery
>;
export const listSubjects = /* GraphQL */ `query ListSubjects(
  $filter: ModelSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubjectsQueryVariables,
  APITypes.ListSubjectsQuery
>;
export const getTopic = /* GraphQL */ `query GetTopic($id: ID!) {
  getTopic(id: $id) {
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
` as GeneratedQuery<APITypes.GetTopicQueryVariables, APITypes.GetTopicQuery>;
export const listTopics = /* GraphQL */ `query ListTopics(
  $filter: ModelTopicFilterInput
  $limit: Int
  $nextToken: String
) {
  listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTopicsQueryVariables,
  APITypes.ListTopicsQuery
>;
export const getSubTopic = /* GraphQL */ `query GetSubTopic($id: ID!) {
  getSubTopic(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSubTopicQueryVariables,
  APITypes.GetSubTopicQuery
>;
export const listSubTopics = /* GraphQL */ `query ListSubTopics(
  $filter: ModelSubTopicFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubTopicsQueryVariables,
  APITypes.ListSubTopicsQuery
>;
export const getStudentJobAppliedJob = /* GraphQL */ `query GetStudentJobAppliedJob($id: ID!) {
  getStudentJobAppliedJob(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetStudentJobAppliedJobQueryVariables,
  APITypes.GetStudentJobAppliedJobQuery
>;
export const listStudentJobAppliedJobs = /* GraphQL */ `query ListStudentJobAppliedJobs(
  $filter: ModelStudentJobAppliedJobFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentJobAppliedJobs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      jobID
      status
      adminID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentJobAppliedJobsQueryVariables,
  APITypes.ListStudentJobAppliedJobsQuery
>;
export const getGroup = /* GraphQL */ `query GetGroup($id: ID!) {
  getGroup(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGroupQueryVariables, APITypes.GetGroupQuery>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const getBranch = /* GraphQL */ `query GetBranch($id: ID!) {
  getBranch(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBranchQueryVariables, APITypes.GetBranchQuery>;
export const listBranches = /* GraphQL */ `query ListBranches(
  $filter: ModelBranchFilterInput
  $limit: Int
  $nextToken: String
) {
  listBranches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBranchesQueryVariables,
  APITypes.ListBranchesQuery
>;
export const getYear = /* GraphQL */ `query GetYear($id: ID!) {
  getYear(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetYearQueryVariables, APITypes.GetYearQuery>;
export const listYears = /* GraphQL */ `query ListYears(
  $filter: ModelYearFilterInput
  $limit: Int
  $nextToken: String
) {
  listYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListYearsQueryVariables, APITypes.ListYearsQuery>;
export const getSection = /* GraphQL */ `query GetSection($id: ID!) {
  getSection(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSectionQueryVariables,
  APITypes.GetSectionQuery
>;
export const listSections = /* GraphQL */ `query ListSections(
  $filter: ModelSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSectionsQueryVariables,
  APITypes.ListSectionsQuery
>;
export const getSkill = /* GraphQL */ `query GetSkill($id: ID!) {
  getSkill(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSkillQueryVariables, APITypes.GetSkillQuery>;
export const listSkills = /* GraphQL */ `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSkillsQueryVariables,
  APITypes.ListSkillsQuery
>;
export const getTag = /* GraphQL */ `query GetTag($id: ID!) {
  getTag(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTagQueryVariables, APITypes.GetTagQuery>;
export const listTags = /* GraphQL */ `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const getBlogCategory = /* GraphQL */ `query GetBlogCategory($id: ID!) {
  getBlogCategory(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBlogCategoryQueryVariables,
  APITypes.GetBlogCategoryQuery
>;
export const listBlogCategories = /* GraphQL */ `query ListBlogCategories(
  $filter: ModelBlogCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlogCategoriesQueryVariables,
  APITypes.ListBlogCategoriesQuery
>;
export const getThemes = /* GraphQL */ `query GetThemes($id: ID!) {
  getThemes(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetThemesQueryVariables, APITypes.GetThemesQuery>;
export const listThemes = /* GraphQL */ `query ListThemes(
  $filter: ModelThemesFilterInput
  $limit: Int
  $nextToken: String
) {
  listThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListThemesQueryVariables,
  APITypes.ListThemesQuery
>;
export const getLanguage = /* GraphQL */ `query GetLanguage($id: ID!) {
  getLanguage(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLanguageQueryVariables,
  APITypes.GetLanguageQuery
>;
export const listLanguages = /* GraphQL */ `query ListLanguages(
  $filter: ModelLanguageFilterInput
  $limit: Int
  $nextToken: String
) {
  listLanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLanguagesQueryVariables,
  APITypes.ListLanguagesQuery
>;
export const getBatch = /* GraphQL */ `query GetBatch($id: ID!) {
  getBatch(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBatchQueryVariables, APITypes.GetBatchQuery>;
export const listBatches = /* GraphQL */ `query ListBatches(
  $filter: ModelBatchFilterInput
  $limit: Int
  $nextToken: String
) {
  listBatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBatchesQueryVariables,
  APITypes.ListBatchesQuery
>;
export const getState = /* GraphQL */ `query GetState($id: ID!) {
  getState(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStateQueryVariables, APITypes.GetStateQuery>;
export const listStates = /* GraphQL */ `query ListStates(
  $filter: ModelStateFilterInput
  $limit: Int
  $nextToken: String
) {
  listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStatesQueryVariables,
  APITypes.ListStatesQuery
>;
export const getDistrict = /* GraphQL */ `query GetDistrict($id: ID!) {
  getDistrict(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDistrictQueryVariables,
  APITypes.GetDistrictQuery
>;
export const listDistricts = /* GraphQL */ `query ListDistricts(
  $filter: ModelDistrictFilterInput
  $limit: Int
  $nextToken: String
) {
  listDistricts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDistrictsQueryVariables,
  APITypes.ListDistrictsQuery
>;
export const getSpecialization = /* GraphQL */ `query GetSpecialization($id: ID!) {
  getSpecialization(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpecializationQueryVariables,
  APITypes.GetSpecializationQuery
>;
export const listSpecializations = /* GraphQL */ `query ListSpecializations(
  $filter: ModelSpecializationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpecializations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpecializationsQueryVariables,
  APITypes.ListSpecializationsQuery
>;
export const getDepartment = /* GraphQL */ `query GetDepartment($id: ID!) {
  getDepartment(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDepartmentQueryVariables,
  APITypes.GetDepartmentQuery
>;
export const listDepartments = /* GraphQL */ `query ListDepartments(
  $filter: ModelDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDepartmentsQueryVariables,
  APITypes.ListDepartmentsQuery
>;
export const getTechStack = /* GraphQL */ `query GetTechStack($id: ID!) {
  getTechStack(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTechStackQueryVariables,
  APITypes.GetTechStackQuery
>;
export const listTechStacks = /* GraphQL */ `query ListTechStacks(
  $filter: ModelTechStackFilterInput
  $limit: Int
  $nextToken: String
) {
  listTechStacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTechStacksQueryVariables,
  APITypes.ListTechStacksQuery
>;
export const getInstanceSize = /* GraphQL */ `query GetInstanceSize($id: ID!) {
  getInstanceSize(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetInstanceSizeQueryVariables,
  APITypes.GetInstanceSizeQuery
>;
export const listInstanceSizes = /* GraphQL */ `query ListInstanceSizes(
  $filter: ModelInstanceSizeFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstanceSizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstanceSizesQueryVariables,
  APITypes.ListInstanceSizesQuery
>;
export const getProgrammerSubject = /* GraphQL */ `query GetProgrammerSubject($id: ID!) {
  getProgrammerSubject(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProgrammerSubjectQueryVariables,
  APITypes.GetProgrammerSubjectQuery
>;
export const listProgrammerSubjects = /* GraphQL */ `query ListProgrammerSubjects(
  $filter: ModelProgrammerSubjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgrammerSubjects(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgrammerSubjectsQueryVariables,
  APITypes.ListProgrammerSubjectsQuery
>;
export const getProgrammerTopic = /* GraphQL */ `query GetProgrammerTopic($id: ID!) {
  getProgrammerTopic(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProgrammerTopicQueryVariables,
  APITypes.GetProgrammerTopicQuery
>;
export const listProgrammerTopics = /* GraphQL */ `query ListProgrammerTopics(
  $filter: ModelProgrammerTopicFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgrammerTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgrammerTopicsQueryVariables,
  APITypes.ListProgrammerTopicsQuery
>;
export const getProgrammerLevel = /* GraphQL */ `query GetProgrammerLevel($id: ID!) {
  getProgrammerLevel(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProgrammerLevelQueryVariables,
  APITypes.GetProgrammerLevelQuery
>;
export const listProgrammerLevels = /* GraphQL */ `query ListProgrammerLevels(
  $filter: ModelProgrammerLevelFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgrammerLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgrammerLevelsQueryVariables,
  APITypes.ListProgrammerLevelsQuery
>;
export const getStudentSection = /* GraphQL */ `query GetStudentSection($id: ID!) {
  getStudentSection(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStudentSectionQueryVariables,
  APITypes.GetStudentSectionQuery
>;
export const listStudentSections = /* GraphQL */ `query ListStudentSections(
  $filter: ModelStudentSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentSectionsQueryVariables,
  APITypes.ListStudentSectionsQuery
>;
export const getBlog = /* GraphQL */ `query GetBlog($id: ID!) {
  getBlog(id: $id) {
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
` as GeneratedQuery<APITypes.GetBlogQueryVariables, APITypes.GetBlogQuery>;
export const listBlogs = /* GraphQL */ `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBlogsQueryVariables, APITypes.ListBlogsQuery>;
export const getJobDrive = /* GraphQL */ `query GetJobDrive($id: ID!) {
  getJobDrive(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetJobDriveQueryVariables,
  APITypes.GetJobDriveQuery
>;
export const listJobDrives = /* GraphQL */ `query ListJobDrives(
  $filter: ModelJobDriveFilterInput
  $limit: Int
  $nextToken: String
) {
  listJobDrives(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobDrivesQueryVariables,
  APITypes.ListJobDrivesQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($id: ID!) {
  getCompany(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
export const getStudentJobNotification = /* GraphQL */ `query GetStudentJobNotification($id: ID!) {
  getStudentJobNotification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetStudentJobNotificationQueryVariables,
  APITypes.GetStudentJobNotificationQuery
>;
export const listStudentJobNotifications = /* GraphQL */ `query ListStudentJobNotifications(
  $filter: ModelStudentJobNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentJobNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      jobID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentJobNotificationsQueryVariables,
  APITypes.ListStudentJobNotificationsQuery
>;
export const getAssignMeetingStudents = /* GraphQL */ `query GetAssignMeetingStudents($id: ID!) {
  getAssignMeetingStudents(id: $id) {
    id
    studentID
    meetingID
    attendanceStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAssignMeetingStudentsQueryVariables,
  APITypes.GetAssignMeetingStudentsQuery
>;
export const listAssignMeetingStudents = /* GraphQL */ `query ListAssignMeetingStudents(
  $filter: ModelAssignMeetingStudentsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssignMeetingStudents(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentID
      meetingID
      attendanceStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAssignMeetingStudentsQueryVariables,
  APITypes.ListAssignMeetingStudentsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getMeetings = /* GraphQL */ `query GetMeetings($id: ID!) {
  getMeetings(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMeetingsQueryVariables,
  APITypes.GetMeetingsQuery
>;
export const listMeetings = /* GraphQL */ `query ListMeetings(
  $filter: ModelMeetingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMeetingsQueryVariables,
  APITypes.ListMeetingsQuery
>;
export const getAssignStudentToCourse = /* GraphQL */ `query GetAssignStudentToCourse($id: ID!) {
  getAssignStudentToCourse(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAssignStudentToCourseQueryVariables,
  APITypes.GetAssignStudentToCourseQuery
>;
export const listAssignStudentToCourses = /* GraphQL */ `query ListAssignStudentToCourses(
  $filter: ModelAssignStudentToCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssignStudentToCourses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAssignStudentToCoursesQueryVariables,
  APITypes.ListAssignStudentToCoursesQuery
>;
