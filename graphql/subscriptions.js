/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      first_name
      last_name
      email
      stripe_seller_id
      created_tests {
        nextToken
      }
      purchased_tests {
        nextToken
      }
      attempted_tests {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      first_name
      last_name
      email
      stripe_seller_id
      created_tests {
        nextToken
      }
      purchased_tests {
        nextToken
      }
      attempted_tests {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      first_name
      last_name
      email
      stripe_seller_id
      created_tests {
        nextToken
      }
      purchased_tests {
        nextToken
      }
      attempted_tests {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTestManager = /* GraphQL */ `
  subscription OnCreateTestManager {
    onCreateTestManager {
      id
      user_id
      created_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      category_id
      sub_category_id
      category {
        id
        name
        createdAt
        updatedAt
      }
      title
      description
      reject_description
      price
      status
      time_limit
      questions {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTestManager = /* GraphQL */ `
  subscription OnUpdateTestManager {
    onUpdateTestManager {
      id
      user_id
      created_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      category_id
      sub_category_id
      category {
        id
        name
        createdAt
        updatedAt
      }
      title
      description
      reject_description
      price
      status
      time_limit
      questions {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTestManager = /* GraphQL */ `
  subscription OnDeleteTestManager {
    onDeleteTestManager {
      id
      user_id
      created_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      category_id
      sub_category_id
      category {
        id
        name
        createdAt
        updatedAt
      }
      title
      description
      reject_description
      price
      status
      time_limit
      questions {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      marks
      test_id
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      question
      answer
      explainantion
      options
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      marks
      test_id
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      question
      answer
      explainantion
      options
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      marks
      test_id
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      question
      answer
      explainantion
      options
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      sub_category {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      sub_category {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      sub_category {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSubCategory = /* GraphQL */ `
  subscription OnCreateSubCategory {
    onCreateSubCategory {
      id
      name
      category_id
      category {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubCategory = /* GraphQL */ `
  subscription OnUpdateSubCategory {
    onUpdateSubCategory {
      id
      name
      category_id
      category {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubCategory = /* GraphQL */ `
  subscription OnDeleteSubCategory {
    onDeleteSubCategory {
      id
      name
      category_id
      category {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePurchasedTest = /* GraphQL */ `
  subscription OnCreatePurchasedTest {
    onCreatePurchasedTest {
      id
      user_id
      test_id
      purchased_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePurchasedTest = /* GraphQL */ `
  subscription OnUpdatePurchasedTest {
    onUpdatePurchasedTest {
      id
      user_id
      test_id
      purchased_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePurchasedTest = /* GraphQL */ `
  subscription OnDeletePurchasedTest {
    onDeletePurchasedTest {
      id
      user_id
      test_id
      purchased_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAttemptedTest = /* GraphQL */ `
  subscription OnCreateAttemptedTest {
    onCreateAttemptedTest {
      id
      user_id
      attempted_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      test_id
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      status
      remaining_time
      result {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAttemptedTest = /* GraphQL */ `
  subscription OnUpdateAttemptedTest {
    onUpdateAttemptedTest {
      id
      user_id
      attempted_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      test_id
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      status
      remaining_time
      result {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAttemptedTest = /* GraphQL */ `
  subscription OnDeleteAttemptedTest {
    onDeleteAttemptedTest {
      id
      user_id
      attempted_by {
        id
        first_name
        last_name
        email
        stripe_seller_id
        createdAt
        updatedAt
      }
      test_id
      test {
        id
        user_id
        category_id
        sub_category_id
        title
        description
        reject_description
        price
        status
        time_limit
        createdAt
        updatedAt
      }
      status
      remaining_time
      result {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult {
    onCreateResult {
      id
      attempted_id
      question_id
      question {
        id
        marks
        test_id
        question
        answer
        explainantion
        options
        createdAt
        updatedAt
      }
      user_input
      result_status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult {
    onUpdateResult {
      id
      attempted_id
      question_id
      question {
        id
        marks
        test_id
        question
        answer
        explainantion
        options
        createdAt
        updatedAt
      }
      user_input
      result_status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult {
    onDeleteResult {
      id
      attempted_id
      question_id
      question {
        id
        marks
        test_id
        question
        answer
        explainantion
        options
        createdAt
        updatedAt
      }
      user_input
      result_status
      createdAt
      updatedAt
    }
  }
`;
